<script setup>

import btnArrow from '@/components/Ui/btnArrow.vue';

const props = defineProps({
    text: {
        type: String,
        default: 'Button'
    },
    showArrow: {
        type: Boolean,
        default: false
    },
})

</script>

<template>
    <button class="btn index__intro-text__btn" :class="$attrs.class">
        {{ text }}
        <btnArrow v-if="showArrow" />
    </button>
</template>
<script>
export default {
    name: "Button",
    inheritAttrs: false,
    components: {
        btnArrow
    }
}
</script>
<style lang="scss">
.btn {
    display: inline-flex;
    align-items: center;

    border-radius: 18px;
    padding: 25px 50px;

    color: var(--light);
    background-color: var(--dark);

    font-size: 18px;
    font-weight: 700;

    line-height: 1.25;

    transition: background-color .2s linear;

    &:hover {
        background-color: var(--primary);
    }

    &:hover>&__icon {
        fill: var(--dark);
    }

    &__icon {
        width: 15px;
        height: 13px;

        fill: var(--primary);

        margin-left: 10px;
        transition: fill .2s linear;
    }
}
</style>