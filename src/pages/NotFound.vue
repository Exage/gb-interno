<template>
    <div class="not-found">
        <div class="container">
            <div class="not-found__text">
                <h1 class="title title__01 not-found__title">
                    404
                </h1>
                <p>
                    Page not found
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NotFound"
}
</script>
<style lang="scss">
.not-found {
    margin-top: auto;

    &__text {
        text-align: center;
    }
}
</style>