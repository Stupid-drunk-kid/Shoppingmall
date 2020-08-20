<template>
    <div class="navigation">
      <div class="navigationbar_left">
        <slot name="navbarleft"></slot>
      </div>
      <div class="navigationbar_center">
        <slot name="navbarcenter"></slot>
      </div>
      <div class="navigationbar_right">
        <slot name="navbarright"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavigationBar"
    }
</script>

<style scoped>
  .navigation {
    display: flex;
    line-height: 44px;
    text-align: center;
  }

  .navigationbar_left,.navigationbar_right{
    width: 62px;
  }
  .navigationbar_center{
    flex: 1;
  }
</style>
