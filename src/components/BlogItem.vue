<script setup>
import { RouterLink } from 'vue-router';
import LinkBtn from './Ui/LinkBtn.vue';
import tags from '@/utils/blog-tags.json';

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    photo: {
        type: String
    },
    date: {
        type: String,
        default: 'дата'
    },
    tag: {
        type: Number
    },
})

</script>

<template>
    <RouterLink to="/blog/post" class="blog__item">
        <div class="blog__item-photo">
            <div class="blog__item-tag">{{ tags[tag] }}</div>
            <img :src="`/images/blog/${photo}`" :alt="title">
        </div>
        <h3 class="title title__03 blog__item-title">
            {{ title }}
        </h3>
        <div class="blog__item-bottom">
            <div class="paragraph blog__item-date">
                {{ date }}
            </div>
            <LinkBtn :class="['link__btn-blog']" />
        </div>
    </RouterLink>
</template>
<script>
export default {
    name: "BlogItem"
}
</script>
<style lang="scss">
.blog__item {
    padding: 20px;
    border: 1px solid var(--stroke);
    border-radius: 62px;

    background-color: var(--light);

    transition: background-color .2s linear;

    &:hover .link__btn-blog {
        background-color: var(--light);
    }

    &:hover {
        background-color: var(--light-sec);
    }

    &-photo {
        width: 100%;
        height: 290px;
        border-radius: 45px 45px 0 0;

        overflow: hidden;

        position: relative;
    }

    &-tag {
        position: absolute;
        bottom: 20px;
        left: 20px;

        background-color: var(--light);

        padding: 8px 10px;

        border-radius: 8px 8px 8px 0;
    }

    &-title {
        margin-top: 20px;
    }

    &-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
    }
}
</style>