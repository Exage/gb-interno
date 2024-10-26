const HeaderComponent = {
    template: `
        <header class="header">
            <div class="container">
                <div class="header__inner">
                    <div class="header__logo">
                        <img src="images/logo.svg" alt="Interno">
                    </div>
                    <nav class="header__nav">
                        <a v-for="link in links" :href="link.url" class="header__nav-link">{{ link.name }}</a>
                    </nav>
                </div>
            </div>
        </header>
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
