<script setup>

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import { RouterLink } from 'vue-router';
import PageBanner from '@/components/PageBanner.vue'
import BlogItem from '@/components/BlogItem.vue';

const store = useStore()

const blogItems = computed(() => store.state.blogItems)
const blogTags = computed(() => store.state.blogTags)

const itemsToDisplay = ref([...blogItems.value])
const activeTag = ref(null)

const setActiveTag = (tag) => {
    if (activeTag.value === tag) {
        itemsToDisplay.value = [...blogItems.value]
        activeTag.value = null
    } else {
        activeTag.value = tag

        const tagIndex = Object.keys(blogTags.value).find(key => blogTags.value[key] === tag)
        itemsToDisplay.value = blogItems.value.filter(item => String(item.tag) === tagIndex)
    }
}

</script>

<template>

    <PageBanner photo="post.jpg" />

    <div class="container">
        <div class="post__wrapper">
            <div class="post">
                <h1 class="title title__01 post__title">
                    Создадим лучший макет перепланировки
                </h1>
                <div class="post__img post__preview">
                    <img src="/images/post/preview.jpg" alt="Создадим лучший макет перепланировки">
                </div>
                <div class="post__info">
                    <div class="paragraph post__info-date">
                        26 Декабрь,2022
                    </div>
                    <div class="paragraph post__info-path">
                        Интерьер / Домой / Декор
                    </div>
                </div>
                <p class="paragraph paragraph__large post__paragraph">
                    В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до
                    философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на
                    латинском языке.
                    В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто
                    искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
                </p>
                <q class="quote post__quote">
                    Какая-то умная и красивая цитата
                </q>
                <h1 class="title title__01 post__title">
                    Design sprints are great
                </h1>
                <p class="paragraph paragraph__large post__paragraph">
                    В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто
                    искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
                </p>
                <ol class="post__list">
                    <li class="paragraph__large">
                        С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности
                        для примеров шрифтов и текстов.
                    </li>
                    <li class="paragraph__large">
                        С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности
                        для примеров шрифтов и текстов.
                    </li>
                    <li class="paragraph__large">
                        С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности
                        для примеров шрифтов и текстов.
                    </li>
                </ol>
                <div class="post__img">
                    <img src="/images/post/photo-1.jpg" alt="Фото 1">
                </div>
                <p class="paragraph paragraph__large post__paragraph">
                    В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до
                    философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на
                    латинском языке.
                </p>
            </div>

            <div class="post__tags-wrapper">
                <div class="post__tags">
                    <h3 class="title title__03 post__tags-title">
                        Тэги
                    </h3>
                    <div class="post__tags-items">
                        <button v-for="(tag, index) in blogTags" v-on:click="setActiveTag(tag)" :key="index"
                            class="post__tags-item" :class="{ active: activeTag === tag }">
                            {{ tag }}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="container">
        <div class="blog">
            <h1 class="title title__01 blog__title">
                Статьи & Новости
            </h1>
            <div class="blog__items">

                <BlogItem v-for="item in itemsToDisplay" :title="item.title" :photo="item.photo" :date="item.date"
                    :tag="item.tag" />

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Post",
    components: {
        PageBanner,
        BlogItem,
    }
}
</script>
<style lang="scss" scoped>
.post {

    max-width: 800px;
    width: 100%;

    &__title {
        margin-bottom: 20px;
    }

    &__img {
        width: 100%;
        height: auto;

        border-radius: 50px;
        overflow: hidden;

        margin-bottom: 35px;

        img {
            width: 100%;
        }
    }

    &__preview {

        margin-bottom: 45px;

        img {
            width: 100%;
        }
    }

    &__info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 45px;
    }

    &__paragraph {
        margin-bottom: 35px;
    }

    &__quote {
        margin-bottom: 35px;
    }

    &__list {
        counter-reset: item;

        li {
            position: relative;
            color: var(--paragraph-color);
            margin-bottom: 35px;
            padding-left: 25px;

            &::after {
                content: counter(item);
                position: absolute;

                left: 0;
                top: 0;

                counter-increment: item;
                font-family: "DM Serif Display", serif;
                font-size: 20px;
                color: var(--primary);
                margin-right: 10px;
            }
        }
    }
}

.post__wrapper {
    display: flex;
    column-gap: 50px;
    margin-top: 200px;
}

.post__tags {
    position: sticky;
    top: 35px;
    right: 0;

    &-wrapper {
        position: relative;
        flex: 1;
    }

    &-title {
        margin-bottom: 25px;
    }

    &-items {
        display: flex;
        gap: 10px;
    }

    &-item {
        padding: 10px 30px;
        color: var(--dark);
        background-color: var(--light-sec);
        border-radius: 10px;

        &.active {
            color: var(--light);
            background-color: var(--dark);
        }
    }
}

.post__blog {
    margin-top: 100px;

    &-head {
        text-align: center;
    }

    &-body {
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
}
</style>