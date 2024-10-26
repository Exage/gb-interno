const BlogItem = {
    props: ['title', 'photo', 'date', 'tag'],
    template: `
        <a href="post.html" class="blog__item">
            <div class="blog__item-photo">
                <div class="blog__item-tag">{{ tag }}</div>
                <img :src="'images/blog/' + photo" :alt="title">
            </div>
            <h3 class="title title__03 blog__item-title">
                {{ title }}
            </h3>
            <div class="blog__item-bottom">
                <div class="paragraph blog__item-date">
                    {{ date }}
                </div>

                <div class="link__btn blog__link-btn">
                    <svg class="link__btn-icon">
                        <use xlink:href="#link-arrow"></use>
                    </svg>
                </div>
            </div>
        </a>
    `
}
