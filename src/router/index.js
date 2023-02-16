import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'welcome',
    component: function () {
      return import('../views/WelcomeView.vue')
    }
  },
  {
    path: '/books',
    name: 'books',
    component: function () {
      return import('../views/BooksView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/RegisterView.vue')
    }
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: function () {
      return import('../views/FavouritesView.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import('../views/AdminView.vue')
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
