<template>
    <div class="itabbar-item" @click="tabBtn">
        <div v-if="isActive">
            <slot name="tab-icon-active"></slot>
        </div>
        <div v-else>
            <slot name="tab-icon"></slot>
        </div>
        <div :style="isStyleColor">
            <slot name="tab-text"></slot>
        </div>

    </div>
</template>


<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        tabbarColor: {
            type: String,
            default: 'red'
        }
    },
    data(){
        return {
        }
    },
    methods: {
        tabBtn(){
            this.$router.replace(this.path);
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) != -1;
        },
        isStyleColor() {
            return this.isActive ? {color:this.tabbarColor} : {}
        }
    }
}
</script>

<style scoped>
    .itabbar-item{
        flex: 1;
        text-align: center;
        font-size: 13px;
    }
    .itabbar-item img{
        width: 26px;
        vertical-align: middle;
        top: 2px;
        margin-top: 3px;
    }

</style>
