<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import { RouterView } from 'vue-router';

</script>

<template>
    <Header />

    <RouterView />

    <Footer />
</template>

<style>
#app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;

    min-height: 100vh;

    padding-top: 150px;
}
</style>
