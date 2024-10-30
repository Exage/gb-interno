import { createStore } from 'vuex'

import blogItems from '../utils/blog.json'
import blogTags from '../utils/blog-tags.json'
import projectItems from '../utils/projects.json'
import projectTags from '../utils/projects-tags.json'

export default createStore({
    state: {
        blogTags,
        blogItems,
        projectItems,
        projectTags
    }
})