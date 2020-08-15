<template>
  <div>
    <div class="home">
      <navigation-bar>
        <div slot="navbarcenter">购物街</div>
      </navigation-bar>
    </div>
    <home-swiper :banners="banner" />
    <receommend :recommend="recommend" />
    <home-keywords :keywords="keywords" />

    <tab-control :tabTitle="['流行','新款','精选']" class="tab-control"/>


    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

    </ul>
  </div>


</template>

<script>
      import NavigationBar from 'components/common/navigationbar/NavigationBar'
      import TabControl from 'components/content/tabControl/TabControl'

      import HomeSwiper from './childComps/HomeSwiper'
      import Recommend from './childComps/Recommend'
      import HomeKeywords from './childComps/HomeKeywords'

      //网络请求api
      import {homeMultidata,homeData} from "network/homeRequest/home";
      import Receommend from "./childComps/Recommend";

      export default {
        name: "Home",
        data(){
          return {
            banner: [],
            recommend: [],
            keywords:[],
            dataList: {
              'pop': { page: 0,list: [] },
              'new': { page: 0,list: [] },
              'sell': { page: 0,list: [] },
            }
          }
        },
        components: {
          NavigationBar,
          TabControl,
          HomeKeywords,
          Receommend,
          HomeSwiper,
        },
        created() {
          this.homeMultidata()
          this.homeData('pop')
          this.homeData('new')
          this.homeData('sell')

        },
        methods: {
          homeMultidata() {
            homeMultidata().then(value => {
              const { banner,recommend,keywords } = value.data.data
              this.banner = banner.list
              this.recommend = recommend.list
              this.keywords = keywords.list
            })
          },
          homeData(type) {
            let page = this.dataList[type].page + 1
            console.log(page)
            console.log(type)
            homeData(type,page).then(res => {
              // this.dataList[type].list.push(...res)
              // this.dataList[type].page += 1
              console.log(res.data)
            })
          }
        }
      }
</script>

<style scoped>
  .home {
    background: hotpink;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 30;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
