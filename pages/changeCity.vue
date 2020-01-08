<template>
     <div class="page-changeCity">
       <el-row>
         <el-col :span="24">
           <iselect/>
         </el-col>
       </el-row>
       <el-row>
         <el-col :span="24">
           <hot/>
         </el-col>
       </el-row>
       <el-row>
         <el-col :span="24">
           <categroy/>
         </el-col>
       </el-row>     
     </div>
</template>

<script>
  import Iselect from '@/components/changeCity/iselect'
  import Hot from '@/components/changeCity/hot'
  import Categroy from '@/components/changeCity/categroy'
    export default {
        name: "changeCity",
        components:{
          Iselect,
          Hot,
          Categroy
        }
    }
</script>

<style scoped>

</style>
