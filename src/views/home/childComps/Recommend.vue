<template>
  <div class="cecommend">
    <div v-for="item in recommend" :key="item.amc" class="cecommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" >
      </a>
      <div>{{item.title}}</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Recommend",
        props: {
          recommend: {
            type: Array,
            default(){
              return []
            }
          }
        }
    }
</script>

<style scoped>
  .cecommend {
    width: 100%;
    display: flex;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 14px;
    color: black;
  }
  .cecommend-item {
    flex: 1;
  }
  .cecommend-item img {
    width: 85%;
    margin-bottom: 10px;
  }
</style>
