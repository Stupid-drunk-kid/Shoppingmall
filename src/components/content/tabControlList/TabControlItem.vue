<template>
    <div class="tab-control-img-data">
        <img :src="tabControlImgData.img" alt="" @load="itemImage">
    </div>
</template>


<script>
export default {
    name: 'TabControlItem',
    props: {
        tabControlImgData: {
            type: Object,
            default(){
                return []
            }
        }
    },
    methods: {
        itemImage() {
            this.$bus.$emit('itemimg')
        }
    }
}
</script>


<style scoped>
    .tab-control-img-data img {
        width: 100%;
        border-radius: 5px;
    }
</style>