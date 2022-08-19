<template>
    <div>
        <div class="container">
            <card-list :data="yearData"></card-list>
            
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { getNowDate } from '../libs/utils';
import getData from '../services'
import CardList from '../components/YearPage/List.vue'

export default {
    components:{
        CardList
        
    },
    setup(){
        const store = useStore()
        onMounted(()=>{
            const field = store.state.field
            getData(store,field,getNowDate(field))
        })

        return {
            yearData: computed( () => store.state.yearData)
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>