<template>
    <tab-bar id="tarBar">
        <tab-bar-item path='/home' tabbarColor="deeppink">
            <img src="~assets/img/tabbar/home.svg" alt="" slot="tab-icon">
            <img src="~assets/img/tabbar/home_active.svg" alt="" slot="tab-icon-active">
            <div slot="tab-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/category' tabbarColor="deeppink">
            <img src="~assets/img/tabbar/category.svg" alt="" slot="tab-icon">
            <img src="~assets/img/tabbar/category_active.svg" alt="" slot="tab-icon-active">
            <div slot="tab-text">菜单</div>
        </tab-bar-item>
        <tab-bar-item path='/cart' tabbarColor="deeppink">
            <img src="~assets/img/tabbar/cart.svg" alt="" slot="tab-icon">
            <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="tab-icon-active">
            <div slot="tab-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/profile' tabbarColor="deeppink">
            <img src="~assets/img/tabbar/profile.svg" alt="" slot="tab-icon">
            <img src="~assets/img/tabbar/profile_active.svg" alt=""  slot="tab-icon-active">
            <div slot="tab-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'


export default {
    name: "MainTabBar",
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>

</style>
