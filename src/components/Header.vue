<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__logo">
                    <img :src="logo" alt="Interno">
                </div>
                <nav class="header__nav">
                    <RouterLink v-for="link in links" :to="link.url" class="header__nav-link">
                        {{ link.name }}
                    </RouterLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import logo from '@/assets/images/logo.svg'
import { RouterLink } from 'vue-router';

export default {
    name: "Header",
    data() {
        return {
            logo,
            RouterLink,
            links: [
                { name: 'Домой', url: '/' },
                { name: 'Проект', url: '/projects' },
                { name: 'Блог', url: '/blog' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 40px;
    left: 0;

    width: 100%;

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__nav {
        display: flex;
        column-gap: 50px;

        &-link {
            font-family: "Jost", sans-serif;
            font-size: 20px;
        }
    }
}
</style>