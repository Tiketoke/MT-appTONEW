<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu/>
      </el-col>
      <el-col :span="19">
        <carouse/>
      </el-col>
    </el-row>
    <el-row :span="24">
     <list-menu/>
    </el-row>
  </div>
</template>

<script>
  import Emenu from '@/components/index/menu'
  import ListMenu from '@/components/index/listmenu'
  import Carouse from '@/components/index/life'
export default {
  components:{
    Emenu,
    ListMenu,
    Carouse
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
