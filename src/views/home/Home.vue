<template>
    <!-- 导航栏 -->
    <div id="home">
        <navigation-bar class="home-nav">
          <div slot="navbarcenter">购物街</div>
        </navigation-bar>
        <tab-control :tabTitle="['流行','新款','精选']" 
              @tabControl="tabControl" 
              ref="tabControl"
              :class="{fixed:isShow}"
              v-show="isShow"
              />

        <scroll class="content" 
                ref="scroll" 
                @scrolls="scrollCurrent" 
                :probe-type="3"
                :pull-up-load="true"
                @pullingUp="LoadMore"
                >
          <home-swiper :banners="banner" @imgLoad="imgLoads"/>
          <receommend :recommend="recommend" />
          <home-keywords :keywords="keywords" />

          <tab-control :tabTitle="['流行','新款','精选']"
                        @tabControl="tabControl" 
                        ref="tabControl"
                        />
          <tab-control-list :tabControlList="tabIndex"/>
        </scroll>

        <back-top @click.native="backtop" v-show="isShow"/>
    </div>

</template>

<script>
      import NavigationBar from 'components/common/navigationbar/NavigationBar'
      import TabControl from 'components/content/tabControl/TabControl'
      import TabControlList from 'components/content/tabControlList/TabControlList'

      import Scroll from 'components/common/scroll/Scroll'
      import BackTop from 'components/content/backtop/BackTop'


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
            },
            tabControlCurrentIndex: 'pop',
            isShow: false,
            isOffSetTop:0,
            isImgLoad: false
          }
        },
        computed: {
          tabIndex(){
            return this.dataList[this.tabControlCurrentIndex].list
          }
        },
        components: {
          NavigationBar,
          TabControl,
          TabControlList,
          HomeKeywords,
          Receommend,
          HomeSwiper,
          Scroll,
          BackTop
        },
        created() { 
          this.homeMultidata()
          this.homeData('pop')
          this.homeData('new')
          this.homeData('sell')
        },
        mounted() {
            const refresh = this.debounce(this.$refs.scroll.refresh)
            this.$bus.$on('itemimg',() => {
              refresh()
            })

        },
        methods: {
          imgLoads(){
             this.isOffSetTop = this.$refs.tabControl.$el.offsetTop
          },
          debounce(func,dtime){
            let timer = null;
            return (...argu) => {
              if (timer) clearTimeout(timer)
              timer = setTimeout(() => {
                func()
              },dtime)
            }
          },
          //上拉加载更多
          LoadMore(){
            this.homeData(this.tabControlCurrentIndex)
          },
          //隐藏显示返回顶部按钮
          scrollCurrent(position){
            this.isShow = (-position.y) > 1000
            this.isShow = (-position.y) > this.isOffSetTop
          },
          //返回顶部方式
          backtop(){
            this.$refs.scroll.scrollBackTop(0,0)
          },
          //确定点击的是那个current类型
          tabControl(index){
            switch (index) {
              case 0:
                this.tabControlCurrentIndex = 'pop';
                break;
              case 1:
                this.tabControlCurrentIndex = 'new';
                break
              case 2:
                this.tabControlCurrentIndex = 'sell'
                break
            }
          },
          homeMultidata(){
            homeMultidata().then(value => {
              const { banner,recommend,keywords } = value.data.data
              this.banner = banner.list
              this.recommend = recommend.list
              this.keywords = keywords.list
            })
          },
          homeData(type) {
            let page = this.dataList[type].page + 1
            homeData(type,page).then(res => {
              this.dataList[type].list.push(...res.data.data.list)
              this.dataList[type].page += 1
              //多次上拉加载更多 则需要调用 scroll.finishPullUp()
              this.$refs.scroll.finishPullUp()
            })
          }
        }
      }
</script>

<style scoped>
  #home {
    height: 100vh;
  }
  .home-nav {
    background: deeppink;
    
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 3;
  }

  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>
