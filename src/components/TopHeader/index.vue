<template>
    <div class="header">
        <h1>
            <slot></slot>
        </h1>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        background: #ed4040;
        text-align: center;
        height: .44rem;
        line-height: .44rem;
        
        h1{
            color: #fff;
            font-size: .18rem;
        }
    }
</style>