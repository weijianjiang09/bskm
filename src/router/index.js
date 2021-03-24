import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import ('../views/home/home.vue') 
const undergraduate = () =>import ('../views/undergraduate/undergraduate.vue') 
const junior = () =>import ('../views/junior/junior.vue') 
const graduate = () =>import ('../views/graduate/graduate.vue') 
const credential = () => import ('../views/credential/credential.vue')
const announcement =() => import ('../views/announcement/announcement.vue')
const about = () =>import ('../views/about/about.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/undergraduate',
    component:undergraduate
  },
  {
    path:'/junior',
    component:junior
  },
  {
    path:'/graduate',
    component:graduate
  },
  {
    path:'/credential',
    component:credential
  },
  {
    path:'/announcement',
    component:announcement
  },
  {
    path:'/about',
    component:about
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
