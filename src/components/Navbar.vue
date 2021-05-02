<template>
    <div class="nav">
        <router-link to="/" class="brand">
            <img class="avatar" src="https://github.com/Gary50613.png?size=128">
            <span class="title">Kane</span>
        </router-link>
        <div class="right">
            <router-link class="route" v-for="n in ['Home,/', 'About me,/about', 'Contact,/contact']" :to="n.split(',')[1]">{{ n.split(',')[0] }}</router-link>
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
        grid-template-columns: 3fr 5fr;
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
        margin: 0 10%;
        font-weight: bold;
        font-size: 2.5rem;
    }

    .right {
        text-align: right;
    }

    .route {
        font-weight: 700;
        padding: 1rem 1rem;
        margin: 0 .5rem;
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
    
    @media (max-width: 750px) {
        .avatar {
            width: 3rem;
            height: 3rem;
        }

        .title {
            font-size: 2rem;
        }

        .route {
            display: none;
        }

        .menuButton {
            display: inline-block;
        }
    }
</style>