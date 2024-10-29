<script setup>
import { onMounted, ref } from 'vue';

import PageBanner from '@/components/PageBanner.vue';
import items from '@/utils/projects.json'
import tags from '@/utils/projects-tags.json'

import ProjectItem from '@/components/ProjectItem.vue';

const itemsToDisplay = ref([])

const activeTag = ref(null)

const setActiveTag = (tag) => {
    if (activeTag.value !== tag) {
        activeTag.value = tag

        const tagIndex = Object.keys(tags).find(key => tags[key] === tag)
        itemsToDisplay.value = items.filter(item => String(item.tag) === tagIndex)
    }
}

onMounted(() => {
    setActiveTag(tags[1])
})

</script>

<template>
    <PageBanner photo="projects.jpg" />

    <div class="container">
        <div class="project">
            <div class="types">
                <button v-for="(tag, index) in tags" :key="index" v-on:click="setActiveTag(tag)"
                    class="paragraph paragraph__small types__btn" :class="{ active: activeTag === tag }">
                    {{ tag }}
                </button>
            </div>

            <div class="project__columns">
                <div class="project__column project__column-left">
                    <ProjectItem v-for="item in itemsToDisplay.filter((_, index) => index % 2 === 0).slice(0, 4)"
                        :key="item.id" :photo="item.photo" :title="item.title" :type="item.type" />
                </div>
                <div class="project__column project__column-right">
                    <ProjectItem v-for="item in itemsToDisplay.filter((_, index) => index % 2 !== 0).slice(0, 4)"
                        :key="item.id" :photo="item.photo" :title="item.title" :type="item.type" />
                </div>
            </div>

        </div>
    </div>

</template>
<script>
export default {
    name: "Projects",
    components: {
        PageBanner,
        ProjectItem
    }
}
</script>
<style lang="scss" scoped>
.project {
    margin-top: 200px;
    padding-bottom: 100px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__columns {
        display: flex;
        column-gap: 30px;

        margin-top: 60px;
    }

    &__column {
        display: flex;
        flex-direction: column;
        row-gap: 35px;
    }
}

.types {
    display: inline-flex;
    column-gap: 10px;
    margin: 0 auto;

    border: 1px solid var(--primary);
    border-radius: 25px;

    overflow: hidden;

    &__btn {
        padding: 25px 60px;
        border-radius: 20px;

        font-weight: 600;

        &.active {
            background-color: var(--primary);
            color: var(--light);
        }
    }
}
</style>