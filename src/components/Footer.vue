<template>
    <footer class="footer">
        <div class="container">

            <div class="footer__inner">
                <div class="footer__info">
                    <div class="footer__logo">
                        <img :src="logo" alt="">
                    </div>
                    <div class="footer__social">
                        <a href="#" class="footer__social-item">
                            <svg class="footer__social-item__icon">
                                <use xlink:href="#twitter"></use>
                            </svg>
                        </a>
                        <a href="#" class="footer__social-item">
                            <svg class="footer__social-item__icon">
                                <use xlink:href="#linkedin"></use>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="footer__columns">
                    <div class="footer__column">
                        <h3 class="title title__03 footer__column-title">Страницы</h3>
                        <RouterLink v-for="link in links" :to="link.url"
                            class="paragraph paragraph__large footer__column-link">
                            {{ link.name }}
                        </RouterLink>
                    </div>
                    <div class="footer__column">
                        <h3 class="title title__03 footer__column-title">Контакты</h3>
                        <p class="paragraph paragraph__large footer__column-link">55 East Birchwood Ave.<br>
                            Brooklyn,
                            New York 11201</p>
                        <a href="mailto:contact@interno.com"
                            class="paragraph paragraph__large footer__column-link">contact@interno.com</a>
                        <a href="tel:1234567890" class="paragraph paragraph__large footer__column-link">(123) 456 -
                            7890</a>
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>
<script>
import logo from '@/assets/images/logo.svg'
import { RouterLink } from 'vue-router';

export default {
    name: "Footer",
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
.footer {
    margin-top: auto;
    padding-top: 100px;
    padding-bottom: 100px;

    &__inner {
        display: flex;
    }

    &__social {
        display: flex;
        column-gap: 50px;
        margin-top: 30px;

        &-item {
            &__icon {
                width: 18px;
                height: 22px;
            }
        }
    }

    &__columns {
        max-width: 705px;
        width: 100%;

        display: flex;
        justify-content: space-between;

        margin-left: auto;
    }

    &__column {
        display: flex;
        flex-direction: column;

        &-title {
            margin-bottom: 25px;
        }

        &-link {
            margin-bottom: 25px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>