<!--  -->
<template>
  <div>
      <h1>我是首页,哈哈哈</h1>
      <h1>{{$route.query.id}}</h1>
      <h1>{{$route.query.psd}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
        id:{
            type:String
        },
        psd:String
    };
  },

  components: {},

  computed: {
      fullid(){
          this.id = this.$route.query.id
      },
      fullpsd(){
          this.psd = this.$route.query.psd;
      }
  },

  mounted(){},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>