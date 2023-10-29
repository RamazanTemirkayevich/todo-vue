import { createRouter, createWebHistory } from 'vue-router'
import NotesPath from '@/views/NotesPath'

const routers = [
    {
        path: '/todos',
        name: 'NotesPath',
        component: NotesPath
    }
]

const router = createRouter({
    history: createWebHistory(),
    routers
})

export default router