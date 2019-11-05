import Vue from 'vue'
import VueRouter from 'vue-router'
import NavInfo from '../components/navInfo'
import home from "../components/home";
Vue.use(VueRouter)

let router = new VueRouter({
    //路由map的集合，path: views component
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/info',component:NavInfo},
    ]
})

export default  router;