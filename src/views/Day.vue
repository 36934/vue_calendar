<template>
        <div class="container">
            <Card :data = "dayData"></Card>
            <day-list :data="dayData"></day-list>
        </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import getData from '@/services'
import {getNowDate} from '../libs/utils'
import {useStore} from 'vuex'
import DayList from '../components/dayPage/List/List.vue'
import Card from '../components/dayPage/Card'
export default {
    components:{
        Card,
        DayList
    },
    setup(){
        const store = useStore()
        onMounted(()=>{
            const field = store.state.field
            getData(store,field,getNowDate(field))
            console.log(store.state.dayData)
        })

        return {
            dayData:computed(() => store.state.dayData)
        }
        
    }
}
</script>

<style lang="less" scoped>
   
</style>