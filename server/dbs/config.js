export  default {
  dbs:'mongodb://127.0.0.1:27017/student',
  useNewUrlParser: true,
  useUnifiedTopology:true,
  redis:{
    get host(){
      return '127.0.01'
    },
    get port(){
      return 6379
    }
  },
  smtp:{
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '2293432086@qq.com'
    },
    get pass(){
      return 'skntfhbazutreacd'
    },
    get code(){ //生成邮箱验证码
      return ()=>{
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire(){  //邮箱验证过期时间
      return ()=>{
        return new Date().getTime()+60*60*1000
      }
    }
  }

}
