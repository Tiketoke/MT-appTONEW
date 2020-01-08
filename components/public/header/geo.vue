<script
  src="../../../../yunDownload/Vue全家桶+SSR+Koa2全栈开发美团网[完整版]/mt-stack-master2/mt-stack-master2/mt-stack/app/store/modules/geo.js"></script>
<template>
  <div class="m-geo">
    <i class="el-icon-location"/>{{ $store.state.geo.position.city }}
    <nuxt-link
      class="changeCity"
      to="/changeCity">切换城市</nuxt-link>
    [香河 廊坊 天津]
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="css">
</style>
