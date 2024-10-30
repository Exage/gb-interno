<script setup>
import { RouterLink } from 'vue-router';
import LinkBtn from './Ui/LinkBtn.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    photo: {
        type: String
    },
    type: {
        type: String
    }
})
</script>

<template>
    <RouterLink to="/projects/project" class="project__item" :class="$attrs.class">
        <div class="project__item-photo">
            <img :src="`/images/projects/${photo}`" :alt="`${title}`">
        </div>
        <div class="project__item-info">
            <div class="project__item-info__text">
                <h3 class="title title__03 project__item-info__title">
                    {{ title }}
                </h3>
                <p class="paragraph paragraph__large project__item-info__paragraph">
                    {{ type }}
                </p>
            </div>
            <LinkBtn />
        </div>
    </RouterLink>
</template>
<script>
export default {
    name: "ProjectItem",
    components: {
        LinkBtn
    },
    inheritAttrs: false
}
</script>
<style lang="scss" scoped>
.project__item {
    &-photo {
        width: 100%;
        overflow: hidden;

        min-height: 500px;

        background-color: #C4C4C4;

        img {
            width: 100%;
        }
    }

    &-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 25px;
    }
}
</style>