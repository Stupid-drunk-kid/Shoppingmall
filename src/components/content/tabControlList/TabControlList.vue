<template>
    <div class="tab-control-list">
        <div v-for="item in tabControlList" :key="item.amc" class="tab-control-item">
            <a :href="item.link">
                <tab-control-item :tabControlImgData="item.show" />
            </a>
            <div class="tab-control-text">{{item.title}}</div>
        </div>
        
    </div>
</template>


<script>
import TabControlItem from './TabControlItem'
export default {
    name: 'TabControlList',
    props: {
        tabControlList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        TabControlItem
    }
}
</script>

<style scoped>
    .tab-control-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .tab-control-item {
        flex: 1;
        flex-wrap: wrap;
        flex-direction: row;
        width: 48%;
        text-align: center;
        padding: 5px;
    }
    .tab-control-text {
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        height: 20px;
        line-height: 20px;
    }

</style>