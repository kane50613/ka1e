<template>
    <div class="nav">
        <router-link to="/" class="brand">
            <img class="avatar" src="https://github.com/Gary50613.png?size=128">
            <span class="title">Kane</span>
        </router-link>
        <div class="right">
            <router-link class="route" v-for="n in ['Home,/', 'About me,/about', 'Projects,/projects', 'Contact,/contact']" :to="n.split(',')[1]">{{ n.split(',')[0] }}</router-link>
            <div class="menuButton" @click="menuOpen=!menuOpen">
                <div :class="`${menuOpen?'active ':''}menubtn one`"></div>
                <div :class="`${menuOpen?'active ':''}menubtn two`"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            menuOpen: false
        }
    }
}
</script>

<style scoped>
    .nav {
        padding: 1rem 10%;
        display: grid;
        text-align: left;
        align-items: center;
        grid-template-columns: 2fr 5fr;
    }

    .brand {
        cursor: pointer;
        display: flex;
        text-align: left;
        align-items: center;
    }

    .avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }

    .title {
        margin: 0 8%;
        font-weight: bold;
        font-size: 2rem;
    }

    .right {
        text-align: right;
    }

    .route {
        font-size: 1vw;
        font-weight: 700;
        padding: 1rem 1rem;
        margin: 0 calc(1vw / 4);
    }

    .menuButton {
        display: none;
        height: 100%;
        z-index: 10;
        margin-top: 5px;
    }

    .menuButton .menubtn {
        display: block;
        background-color: #0090ff;
        margin: 10px;
        padding: 2px 15px;
        transition: .5s;
    }

    .menuButton .menubtn.one.active {
        transform: rotateZ(45deg) translate(5px, 5px);
    }

    .menuButton .menubtn.two.active {
        transform: rotateZ(-45deg) translate(5px, -5px);
    }
    
    @media (max-width: 800px) {
        .route {
            display: none;
        }

        .menuButton {
            display: inline-block;
        }
    }
</style>