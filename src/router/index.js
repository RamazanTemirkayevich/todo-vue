import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todos/:id',
        name: 'NotesPath',
        component: () => import('@/views/NotesPath'),
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router