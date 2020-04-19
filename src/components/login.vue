<!--  -->
<template>
  <div class="box">
      <div class="log">shop</div>
      <div class="text">
    <input type="text" @input="text" placeholder="请输入账号">      
      </div>
      <div class="ps">
      <input type="password" @input="pass" placeholder="请输入密码">    
      </div>
      <button @click="fn">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
         id:{
             type:String
         },
         psd:{
             type:String
         }
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
      fn(){
          this.$router.push({
              path:"/foo",
              query:{
                  id:this.id,
                  psd : this.psd
              }
          });
      },
      text(e){
          this.id = e.target.value;
      },
      pass(e){
          this.psd = e.target.value;
      }
  }
}

</script>
<style>
*{
    margin: 0;
    padding: 0;
}
input{
  outline: none;
}
.box{
    width: 500px;
    height: 400px;
    background-color: rgba(0, 0, 0, .4);
}
body,html{
    width: 100%;
    height: 100%;
    background-color: #086972;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box>.log{
    text-transform: uppercase;
    width: 100%;
    height: 80px;
    color: #9e579d;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box>.text,.box>.ps{
    width: 200px;
    height: 40px;
    background: linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89));
    margin: 0 auto;
    border-radius: 20px;
}
.box>.text>input,.box>.ps>input{
    width: 90%;
    height: 20px;
    margin: 3px 2px;
    border-radius: 20px;
    padding: 5px;
    background: #a7ff83;
    font-size: 16px;
}
.box>.ps{
    margin-top: 10px;
}
</style>