import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Reviews from '../views/Reviews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
    path: '/reviews',
    name: 'Reviews',
    component: () => 
    import(/**/'../views/Reviews.vue')
  },
{
    path: '/TenderSupport',
    name: 'TenderSupport',
    component: () => 
    import(/**/'../views/TenderSupport.vue')
  },
{
    path: '/Auctions',
    name: 'Auctions',
    component: () => 
    import(/**/'../views/Auctions.vue')
  },
{
    path: '/LoyaltyProgram',
    name: 'LoyaltyProgram',
    component: () => 
    import(/**/'../views/LoyaltyProgram.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,



   scrollBehavior (to, from, savedPosition) {
    this.to=to;
    this.from=from;
    this.savedPosition=savedPosition;
    if (savedPosition) {
      
      return savedPosition
      
    } else {
     
      return { x: 0, y: 0 }
    }
    
  }






  




  })

export default router
