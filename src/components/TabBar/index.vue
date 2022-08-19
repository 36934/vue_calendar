<template>
    <div class="tab">
        <tab-icon v-for="(item, index) in tabData" :index="index" :iconText="item.iconText" :path="item.path">
            {{ item.tabText }}
        </tab-icon>
    </div>
</template>

<script>
import TabIcon from './Icon'
import tabData from '@/data/tab'
import { ref } from 'vue'
export default {
    components:{
        TabIcon
    },
    setup(){
        return {
            tabData:ref(tabData)
        }
    }
}
</script>

<style lang="less" scoped>
    .tab{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        height: .44rem;
        border-top: 1px solid #cccccc;
        background: #fff;
    }
</style>