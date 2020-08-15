<template>
    <div class="keywords">
        <a href="https://www.baidu.com">
          <img src="~assets/img/home/recommend_bg.jpg" alt="">
        </a>
    </div>

</template>

<script>
    export default {
        name: "HomeKeywords",
        props: {
          keywords: {
            type: Array,
            default(){
              return []
            }
          }
        }
    }
</script>

<style scoped>
.keywords img {
  width: 100%;
}
</style>
