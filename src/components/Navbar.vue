<template>
    <div class="nav">
        <router-link to="/" class="brand">
            <img class="avatar" src="https://github.com/Gary50613.png?size=128" alt="凱恩Kane">
            <span class="title" :class="menuOpen? 'black': ''">Kane</span>
        </router-link>
        <div class="right">
            <router-link class="route" v-for="n in ['Home,/', 'About me,/about', 'Projects,/projects']" :to="n.split(',')[1]">{{ n.split(',')[0] }}</router-link>
            <div class="menuButton" @click="menuOpen=!menuOpen">
                <div :class="`${menuOpen?'active ':''}menubtn one`"></div>
                <div :class="`${menuOpen?'active ':''}menubtn two`"></div>
            </div>
        </div>
        <div class="menuBox" :class="menuOpen?'active':''" @click="menuOpen=false">
            <div class="menu">
                <router-link class="route inMenu" :class="menuOpen?'active':''" v-for="n in ['Home,/', 'About me,/about', 'Projects,/projects']" :to="n.split(',')[1]">{{ n.split(',')[0] }}</router-link>
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
    },
}
</script>

<style scoped>
    .nav {
        position: sticky;
        padding: 1rem 10%;
        display: grid;
        text-align: left;
        align-items: center;
        grid-template-columns: 2fr 5fr;
    }

    .brand {
        z-index: 11;
        cursor: pointer;
        display: flex;
        text-align: left;
        align-items: center;
    }

    .avatar {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }

    .title {
        margin: 0 1.5vw;
        font-weight: bold;
        font-size: 2rem;
        transition: .5s;
    }

    .title.black {
        color: #383838;
    }

    .right {
        text-align: right;
    }

    .route {
        font-size: 1rem;
        font-weight: 700;
        padding: 1rem 1rem;
        margin: 0 .5vw;
        transition: .5s;
    }

    .route.inMenu {
        display: block;
        z-index: -1;
        opacity: 0;
        pointer-events: none;
    }

    .route.inMenu.active {
        color: #212121;
        z-index: 9;
        opacity: 1;
        pointer-events: auto;
    }

    .router-link-active {
        color: #807e7e;
    }

    .route.inMenu.router-link-active {
        color: #4c4c4c;
    }

    .menuButton {
        position: relative;
        z-index: 100;
        display: none;
        height: 100%;
        margin-top: 5px;
    }

    .menuButton .menubtn {
        display: block;
        background-color: #0090ff;
        margin: 10px;
        padding: 2px 15px;
        transition: .5s;
        border-radius: 2px;
    }

    .menuButton .menubtn.one.active {
        transform: rotateZ(45deg) translate(5px, 5px);
    }

    .menuButton .menubtn.two.active {
        transform: rotateZ(-45deg) translate(5px, -5px);
    }

    .menuBox {
        display: none;
    }

    @media (max-width: 800px) {
        .route {
            display: none;
        }

        .title {
            font-size: 1.5rem;
            margin: 0 1.5rem;
        }

        .avatar {
            width: 3rem;
            height: 3rem;
        }

        .menuButton {
            display: inline-block;
        }

        .menuBox {
            visibility: hidden;
            transition: .5s;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin-top: 0;
            background-color: rgba(255,255,255,0);
            z-index: -1;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .menuBox.active {
            z-index: 9;
            visibility: visible;
            background-color: rgba(255, 255, 255, 0.9);
        }
    }
</style>