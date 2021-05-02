<template>
    <div class="nav">
        <router-link to="/" class="brand">
            <img class="avatar" src="https://github.com/Gary50613.png?size=128">
            <span class="title">Kane</span>
        </router-link>
        <router-link class="route" v-for="n in ['Home,/', 'About me,/about', 'Contact,/contact']" :to="n.split(',')[1]">{{ n.split(',')[0] }}</router-link>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .nav {
        padding: 1rem 7rem;
        display: flex;
        text-align: left;
        align-items: center;
    }

    .brand {
        cursor: pointer;
        display: flex;
        text-align: left;
        align-items: center;
    }

    .avatar {
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
    }

    .title {
        margin: 0 2rem;
        font-weight: bold;
        font-size: 3rem;
    }
</style>