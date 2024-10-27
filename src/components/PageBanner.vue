<script setup>

const props = defineProps({
    photo: {
        type: String
    },
    title: {
        type: String
    },
    path: {
        type: String
    },
    st: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="page__banner">
        <div class="page__banner-photo" :style="{ backgroundImage: 'url(/images/banners/' + photo + ')' }">
        </div>
        <div v-if="st" class="page__banner-text__wrapper">
            <div class="container">
                <div class="page__banner-text">
                    <h1 class="title title__01 page__banner-text__title">
                        {{ title }}
                    </h1>
                    <div class="page__banner-text__path">
                        <a href="index.html" class="paragraph paragraph__large">Домой</a>
                        <p class="paragraph paragraph__large">{{ path }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PageBanner"
}
</script>
<style lang="scss" scoped>
.page__banner {
    &-photo {
        height: 356px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    &-text {
        max-width: 500px;
        width: 100%;

        background-color: var(--light);
        padding: 40px 80px;

        margin: 0 auto;

        border-radius: 40px 40px 0 0;

        &__wrapper {
            margin-top: -108px;
        }

        &__path {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            &>.paragraph::after {
                content: '/';
                margin: 0 10px;
            }

            &>.paragraph:last-child:after {
                display: none;
            }
        }
    }
}
</style>