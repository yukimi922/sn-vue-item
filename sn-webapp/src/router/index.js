import Vue from 'vue'
import VueRouter from 'vue-router'
import NavInfo from '../components/navInfo'
import home from "../components/home"
import snSortPage from '../components/sn-sort-page'
import snMustBy from '../components/sn-must-page'

Vue.use(VueRouter)

let router = new VueRouter({
    //路由map的集合，path: views component
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/info',component:NavInfo},
        {path:'/sort',component:snSortPage},
        {path:'/list',component:snMustBy},
    ]
})

export default  router;