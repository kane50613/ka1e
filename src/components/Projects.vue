<template>
    <div class="ProjectsContainer">

    </div>
</template>

<script>
export default {
    name: "Projects",
    data() {
        return {
          repos: []
        }
    },
    methods: {
        fetchGithubUser() {
            fetch('https://api.github.com/users/Gary50613/repos')
            .then(async r => {
                console.log(await r.json())
            })
        }
    }
}
</script>

<style scoped>
    .title {
        font-size: 3rem;
    }
</style>