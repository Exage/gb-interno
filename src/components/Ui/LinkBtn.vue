<template>
    <button class="link__btn" :class="$attrs.class">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.67 366.62" class="link__btn-icon">
            <path
                d="M140.72,182.85c-6.75-7.58-13.43-15.07-20.12-22.56q-41.52-46.5-83.06-93C26.61,55.05,15.61,42.86,4.76,30.54a18.27,18.27,0,0,1,1.36-26c7.81-6.79,19-5.95,26.16,2Q94.55,76.28,156.78,146q10.47,11.72,20.95,23.4c7.79,8.66,8,18,.26,26.74Q126.51,254.38,75,312.58q-21,23.75-42,47.51c-7,7.9-18.35,8.71-25.88,2a18.23,18.23,0,0,1-1.46-26.2q28.58-32.43,57.3-64.75Q101.46,227.58,140,184A12.09,12.09,0,0,0,140.72,182.85Z" />
        </svg>
    </button>
</template>
<script>
export default {
    name: "LinkBtn",
    inheritAttrs: false,
}
</script>
<style lang="scss">
.link__btn {

    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;
    height: 70px;

    border-radius: 50%;

    background-color: var(--light-sec);

    transition: background-color .2s linear;

    &-icon {
        width: 8px;
        height: 18px;
    }

    &-blog {
        width: 52px;
        height: 52px;
    }
}
</style>