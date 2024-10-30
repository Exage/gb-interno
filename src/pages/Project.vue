<script setup>
import { ref } from 'vue';
import PageBanner from '@/components/PageBanner.vue';
import Zoom from '@/components/icons/zoom.vue';

const slides = [
    {
        photo: 'project-1.jpg'
    },
    {
        photo: 'project-2.jpg'
    },
    {
        photo: 'project-3.jpg'
    }
]

const wrapperTransform = ref(0)
const slideWidth = 1200
const slideGap = 100

const activeDot = ref(0)

const onDotClick = (index) => {
    activeDot.value = index
    wrapperTransform.value = (slideWidth * index) + (slideGap * index)
}

</script>

<template>

    <PageBanner photo="project.jpg" />

    <div class="container">
        <div class="project">
            <div class="project__text">
                <h1 class="title title__01 project__title">
                    Минималистичные спальни
                </h1>
                <div class="project__block">
                    <p class="paragraph paragraph__large project__paragraph">
                        В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до
                        философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на
                        латинском языке.
                    </p>
                    <p class="paragraph paragraph__large project__paragraph">
                        В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до
                        философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на
                        латинском языке.
                    </p>
                </div>
            </div>

            <div class="project__slider">
                <div class="project__slider-slides">

                    <div class="project__slider-wrapper" :style="`transform: translateX(-${wrapperTransform}px)`">

                        <a href="#" v-for="(slide, index) in slides" :key="index" class="project__slider-slide">
                            <div class="project__slider-slide__icon">
                                <Zoom />
                            </div>
                            <img :src="`/images/project/slider/${slide.photo}`" alt="slide">
                        </a>

                    </div>
                </div>
                <div class="project__slider-dots">
                    <button v-for="(_, index) in slides" :key="index" v-on:click="onDotClick(index)" class="project__slider-dot" :class="{ active: index === activeDot }"></button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    components: {
        PageBanner,
        Zoom
    }
}
</script>
<style lang="scss" scoped>
.project {
    margin-top: 200px;
    padding-bottom: 100px;

    &__text {
        max-width: 660px;
        width: 100%;

        margin: 0 auto;
    }

    &__title {
        margin-bottom: 10px;
    }

    &__paragraph {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__slider {
        width: 100%;
        margin-top: 100px;


        &-slides {
            width: 100%;
            overflow: hidden;
            border-radius: 70px;
        }

        &-wrapper {
            display: flex;
            flex-wrap: nowrap;

            column-gap: 100px;

            transition: transform .5s ease
        }

        &-slide {
            min-width: 1200px;
            height: 800px;

            overflow: hidden;
            border-radius: 70px;

            position: relative;

            img {
                width: 100%;
                height: 100%;

                object-fit: cover;
            }

            &__icon {
                position: absolute;
                top: calc(50% - 65px);
                left: calc(50% - 65px);

                width: 130px;
                height: 130px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: var(--light);
                fill: var(--primary);

                border-radius: 50%;

                z-index: 10;

                transition: transform .2s ease;
            }

            &:hover > &__icon {
                transform: scale(1.1);
            }
        }

        &-dots {
            display: flex;
            column-gap: 10px;
            justify-content: center;
            margin-top: 20px;
        }

        &-dot {
            width: 20px;
            height: 20px;

            border: 3px solid var(--dark);

            border-radius: 50%;

            &.active {
                background-color: var(--dark);
            }

        }
    }
}
</style>