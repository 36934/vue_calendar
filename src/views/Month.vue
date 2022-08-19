<template>
        <div class="container">
            <card-item :data="monthData"></card-item>
            <card-list :data="monthData"></card-list>
        </div>
</template>

<script>
import { onMounted , computed} from "vue";
import getData from "../services";
import { useStore } from "vuex";
import {getNowDate} from '../libs/utils'
import Carditem from '../components/MonthPage/Item.vue'
import CardList from '../components/MonthPage/List.vue'

export default {
    components:{
        Carditem,
        CardList
    },
    setup(){
        const store = useStore()

        onMounted(() => {
            const field = store.state.field
            getData(store,field,getNowDate(field))
        })

        return {
            monthData:computed(() => store.state.monthData)
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>