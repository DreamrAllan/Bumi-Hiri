import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/destinations',
        name: 'Destinations',
        component: () => import('../views/Destinations.vue')
    },
    {
        path: '/culture',
        name: 'Culture',
        component: () => import('../views/Culture.vue')
    },
    {
        path: '/activities',
        name: 'Activities',
        component: () => import('../views/Activities.vue')
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: () => import('../views/Gallery.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

export default router
