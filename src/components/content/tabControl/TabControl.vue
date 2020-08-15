<template>
  <div class="tab-control">
    <div v-for="(item,index) in tabTitle" class="tab-control-item" :class="{ active: index === currentIndex }" @click="tabControl(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
          tabTitle: {
            type: Array,
            default(){
              return []
            }
          }
        },
        data(){
          return {
            currentIndex: 0
          }
        },
        methods: {
          tabControl(index) {
            this.currentIndex = index
          }
        }
    }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: deeppink;
  }
  .active span {
    border-bottom: 3px solid deeppink;
    padding: 5px;
  }
</style>
