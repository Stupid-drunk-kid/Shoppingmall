<template>
    <div class="swiper-home">
      <swiper>
          <el-carousel-item v-for="item in banners" :key="item.amc">
            <a :href="item.link">
              <img :src="item.image" alt="" @load="imgLoad">
            </a>
          </el-carousel-item>

      </swiper>
    </div>
</template>

<script>
    import Swiper from 'components/common/swiper/Swiper'
    export default {
        name: "HomeSwiper",
        props: {
          banners : {
            type: Array,
            default(){
              return []
            }
          }
        },
        data() {
          return {
            isImageLoad: false
          }
        },
        components: {
          Swiper
        },
        methods: {
          imgLoad() {
            if (!this.isImageLoad)
              this.$emit('imgLoad')
              this.isImageLoad = true
          }
        }
    }
</script>

<style scoped>
  .swiper-home img {
    height: 100%;
    width: 100%;
  }

</style>
