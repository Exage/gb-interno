<script setup>
import Button from '@/components/Ui/Button.vue'
import BlogItem from '@/components/BlogItem.vue'

import blogItems from '@/utils/blog.json'
import projectsItems from '@/utils/projects.json'

import ProjectItem from '@/components/ProjectItem.vue';

</script>

<template>
    <div class="container">
        <div class="intro">
            <div class="intro__text">
                <h1 class="title intro__text-title">
                    Пусть ваш дом <br> будет уникальным
                </h1>
                <p class="paragraph paragraph__large intro__text-paragraph">
                    Существует много вариаций Lorem Ipsum, <br>которые можно использовать
                </p>

                <Button text="Начать" :showArrow="true" :class="['intro__text-btn']" />

            </div>
        </div>
    </div>

    <div class="container">
        <div class="projects">
            <div class="projects__head">
                <h1 class="title title__01 projects__head-title">
                    Следите за нашими проектами
                </h1>
                <p class="paragraph paragraph__large projects__head-paragraph">
                    Хорошо известно, что читатель будет отвлекаться <br>на читабельный контент страницы
                </p>
            </div>
            <div class="projects__body">

                <ProjectItem v-for="item in projectsItems.slice(0, 4)" :key="item.id" :photo="item.photo"
                    :title="item.title" :type="item.type" :class="['main-project-item-rounded-img']" />

            </div>
        </div>
    </div>

    <div class="advantages">
        <div class="container">
            <div class="advantages__inner">

                <div class="advantages__item">
                    <h1 class="title title__large advantages__item-title">
                        12
                    </h1>
                    <p class="paragraph paragraph__large advantages__item-paragraph">
                        Лет опыта
                    </p>
                </div>
                <div class="advantages__item">
                    <h1 class="title title__large advantages__item-title">
                        85
                    </h1>
                    <p class="paragraph paragraph__large advantages__item-paragraph">
                        Успешных проектов
                    </p>
                </div>
                <div class="advantages__item">
                    <h1 class="title title__large advantages__item-title">
                        15
                    </h1>
                    <p class="paragraph paragraph__large advantages__item-paragraph">
                        Проектов в работе
                    </p>
                </div>
                <div class="advantages__item">
                    <h1 class="title title__large advantages__item-title">
                        95
                    </h1>
                    <p class="paragraph paragraph__large advantages__item-paragraph">
                        Счастливых клиентов
                    </p>
                </div>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="blog">
            <div class="blog__head">
                <h1 class="title title__01 blog__head-title">
                    Статьи & <br> Новости
                </h1>
                <p class="paragraph paragraph__large blog__head-paragraph">
                    Хорошо известно, что читатель будет отвлекаться <br>на читабельный контент страницы
                </p>
            </div>
            <div class="blog__body">

                <BlogItem v-for="item in blogItems.slice(0, 3)" :key="item.id" :title="item.title" :photo="item.photo"
                    :date="item.date" :tag="item.tag" />

            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "Main",
    components: {
        Button
    }
}
</script>
<style lang="scss">
.main-project-item-rounded-img:nth-child(1)>.project__item-photo {
    border-radius: 0 50px 0 0;
}

.main-project-item-rounded-img:nth-child(2)>.project__item-photo {
    border-radius: 50px 0 0 0;
}

.main-project-item-rounded-img:nth-child(3)>.project__item-photo {
    border-radius: 0 0 50px 0;
}

.main-project-item-rounded-img:nth-child(4)>.project__item-photo {
    border-radius: 0 0 0 50px;
}
</style>
<style lang="scss" scoped>
.intro {
    display: flex;
    align-items: center;

    padding: 50px;

    width: 100%;
    height: 750px;

    background-image: url(../assets/images/intro/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 70px;
    overflow: hidden;

    &__text {
        &-title {
            font-size: 65px;
        }

        &-paragraph {
            margin-top: 18px;
        }

        &-btn {
            margin-top: 20px;
        }
    }
}

.projects {

    margin-top: 100px;

    &__head {
        text-align: center;
    }

    &__body {
        display: grid;
        grid-template-columns: repeat(2, 525px);
        justify-content: space-between;
        row-gap: 50px;

        margin-top: 95px;
    }
}

.advantages {
    background-color: var(--light-sec);
    margin-top: 100px;

    &__inner {
        display: flex;
        max-width: 1080px;
        width: 100%;

        margin: 0 auto;
        padding: 150px 0;
    }

    &__item {
        width: 25%;
        position: relative;
        text-align: center;

        &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 18px;

            width: 1px;
            height: 130px;

            background-color: var(--primary);
        }

        &-title {
            font-family: "DM Serif Display", serif;
            color: var(--primary);
        }

        &-paragraph {
            margin-top: 16px;
        }

        &:last-child::after {
            display: none;
        }
    }
}

.blog {
    margin-top: 100px;

    &__head {
        text-align: center;
    }

    &__body {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 30px;

        margin-top: 50px;
    }
}
</style>