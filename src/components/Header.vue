<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__logo">
                    <img :src="logo" alt="Interno">
                </div>
                <nav class="header__nav">
                    <a v-for="link in links" :href="link.url" class="header__nav-link">{{ link.name }}</a>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import logo from '@/assets/images/logo.svg'

export default {
    name: "Header",
    data() {
        return {
            logo,
            links: [
                { name: 'Домой', url: '#' },
                { name: 'Проект', url: '#' },
                { name: 'Блог', url: '#' }
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