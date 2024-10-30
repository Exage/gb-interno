import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Projects from '@/pages/Projects.vue'
import Blog from '@/pages/Blog.vue'
import Post from '@/pages/Post.vue'
import Project from '@/pages/Project.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/blog/post',
            component: Post
        },
        {
            path: '/projects/project',
            component: Project
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        }
    ]
})

export default router