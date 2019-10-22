<template>
    <div class="home">
        <h1>This is an home page</h1>
        <ResultList/>
    </div>
</template>

<script>
    import ResultList from '@/components/ResultList.vue'

    export default {
        name: "Home",
        components: {
            ResultList
        },
    }
</script>

<style scoped>

</style>