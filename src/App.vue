<template>
  <div id="nav">
      <top-header>{{ headerTitle }}</top-header>
      <search-input :placeholder="placeholder" :maxlength="maxlength"></search-input>
  </div>
  <router-view/>

  <tab-bar></tab-bar>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import TabBar from '@/components/TabBar'
import SearchInput from '@/components/SearchInput'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { isReactive, watch } from 'vue'


export default {
  components:{
    TopHeader,
    TabBar,
    SearchInput
  },
  setup(){
    const store = useStore()
    // console.log(store.state) // 代理对象
    // console.log(isReactive(store.state))

    const router = useRouter()

    watch(
      () => router.currentRoute.value.name,
      (value) => {
        // console.log(value)
        store.commit('setHeaderTitle',value)
        store.commit('setPlaceholder',value)
        store.commit('setMaxlength',value)
        store.commit('setField',value)
      }
    )


    return store.state
  }
}
</script>
<style lang="less">
   .container{
        padding: .82rem 0 .44rem 0;
        box-sizing: border-box;
    }
</style>
