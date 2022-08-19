<template>
  <router-link :to="path" class="wrapper">
    <i class="icon">{{ iconText }}</i>
    <p class="text">
      <slot></slot>
    </p>
  </router-link>
</template>

<script>
export default {
  props: {
    iconText: String,
    path: String,
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  font-size: 0.12rem;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.25rem;
    height: 0.25rem;
    background: #ccc;
    color: #999;
    border-radius: 50%;
    transition: all 0.5s;
  }
  .text{
      text-align: center;
      margin-top: .02rem;
      color: #999;
      transition: all 0.5s;
  }

  &.router-link-active{
      .icon{
          background: #ed4040;
          color: #fff;
      }
      .text{
          color: #ed4040;
      }
  }
}
</style>