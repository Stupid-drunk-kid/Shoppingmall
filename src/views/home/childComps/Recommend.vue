<template>
  <div class="cecommend">
    <div v-for="item in recommend" :key="item.amc" class="cecommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
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
    padding: 20px 0 30px 0;
    border: 8px solid #eee;
    font-size: 14px;
  }
  .cecommend-item {
    flex: 1;
  }
  .cecommend-item img {
    width: 85%;
    margin-bottom: 10px;
  }
</style>
