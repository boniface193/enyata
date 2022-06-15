import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../helpers/Layout.vue'),

    children: [
      {
        path: '',
        name: 'overview',
        component: () => import('../views/Overview.vue')
      },
      {
        path: '/starship',
        name: 'starship',
        component: () => import('../views/Starship.vue')
      },
      {
        path: '/people',
        name: 'people',
        component: () => import('../views/People.vue')
      },
      {
        path: '/species',
        name: 'species',
        component: () => import('../views/Species.vue')
      },
      {
        path: '/:id',
        name: 'details',
        component: () => import('../components/primary/DetailPages.vue'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
}) 

export default router
