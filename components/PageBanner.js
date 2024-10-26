const PageBanner = {
    props: ['photo', 'title', 'path', 'st'],
    template: `
        <div class="page__banner">
            <div 
                class="page__banner-photo" 
                :style="{ backgroundImage: 'url(./images/' + photo + ')' }">
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
    `,
    mounted() {
        console.log(this.st)
    }
}
