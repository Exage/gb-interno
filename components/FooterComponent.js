const FooterComponent = {
    template: `
        <footer class="footer">
            <div class="container">

                <div class="footer__inner">
                    <div class="footer__info">
                        <div class="footer__logo">
                            <img src="images/logo.svg" alt="">
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
                            <a v-for="link in links" :href="link.url" class="paragraph paragraph__large footer__column-link">{{ link.name }}</a>
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
    `,
    data() {
        return {
            links: [
                { name: 'Домой', url: 'index.html' },
                { name: 'Проект', url: '#' },
                { name: 'Блог', url: 'blog.html' }
            ]
        }
    }
}