<template>
    <div id="tarBar">
        <slot></slot>
    </div>

</template>

<script>
export default {
    name: "Tabbar",
}
</script>


<style scoped>
    #tarBar {
        display: flex;
        background: #e2e2e2;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 49px;
    }

</style>
