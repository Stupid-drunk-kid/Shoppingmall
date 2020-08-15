<template>
  <div>
    <el-carousel height="220px">
      <slot></slot>
    </el-carousel>
  </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/index.css'
    export default {
        name: "HomeSwiper",
        data() {
          return {
            banners : []
          }
        },
    }
</script>

<style scoped>

</style>
