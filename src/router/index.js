import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const login = ()=>import("../components/login.vue");
  const routes = [
    {
      path:"",
      redirect:"/login"
    },
    {
      path:"/login",
      component:login,
      beforeEach:((to, from, next) => {
       console.log("----");
      })
    },
    {
      path:"/foo",
      component:()=>import("../components/foo.vue"),
      beforeEach:((to, from, next) => {
        console.log("++++");
       })
    }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
