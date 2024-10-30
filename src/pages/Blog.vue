<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';
import BlogItem from '@/components/BlogItem.vue';
import PageBanner from '@/components/PageBanner.vue';
import LinkBtn from '@/components/Ui/LinkBtn.vue';

const store = useStore()

const blogItems = computed(() => store.state.blogItems)

</script>

<template>
    <div>

        <PageBanner title="Статьи & Новости" path="Блог" photo="blog.jpg" :st="true" />

        <div class="container">
            <div class="blog__last-post__block">
                <h1 class="title title__01">Последний пост</h1>

                <RouterLink to="/blog/post" class="blog__last-post">
                    <div class="blog__last-post__image">
                        <img :src="blogItems.length > 0 ? 'images/blog/' + blogItems[0].photo : ''" alt="">
                    </div>
                    <div class="blog__last-post__content">
                        <h1 class="title title__03 blog__last-post__title">
                            {{ blogItems.length > 0 ? blogItems[0].title : '' }}
                        </h1>
                        <h1 class="paragraph paragraph__large blog__last-post__paragraph">
                            {{ blogItems.length > 0 ? blogItems[0].text : '' }}
                        </h1>
                        <div class="blog__last-post__info">
                            <div class="blog__last-post__date">
                                {{ blogItems.length > 0 ? blogItems[0].date : '' }}
                            </div>
                            <LinkBtn :class="['link__btn-blog']" />
                        </div>
                    </div>
                </RouterLink>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="blog">
            <h1 class="title title__01 blog__title">
                Статьи & Новости
            </h1>
            <div class="blog__items">

                <BlogItem v-for="item in blogItems" :title="item.title" :photo="item.photo" :date="item.date"
                    :tag="item.tag" />

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Blog"
}
</script>
<style lang="scss">
.blog {

    margin-top: 90px;

    &__last-post {

        display: grid;
        grid-template-columns: 1fr 525px;
        column-gap: 65px;

        align-items: center;

        margin-top: 50px;
        border: 1px solid var(--stroke);
        border-radius: 62px;
        padding: 20px;

        &__block {
            margin-top: 130px;
        }

        &__image {
            width: 100%;
            height: 478px;

            border-radius: 50px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;

                object-fit: cover;
            }
        }

        &__content {
            padding-right: 35px;
        }

        &__paragraph {
            margin-top: 22px;
        }

        &__info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 40px;
        }
    }

    &__items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin-top: 30px;
    }

    &__link-btn {
        width: 52px;
        height: 52px;

        transition: background-color .2s linear;
    }
}
</style>