<template>
    <Navbar style="z-index: 999"/>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" class="comp"></component>
        </transition>
    </router-view>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet">
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
    components: {
        Navbar
    },
}
</script>

<style>

::-webkit-scrollbar {
    display: none;
}

* {
    /*outline: #00b7ff solid 3px;*/
    outline: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    color: #c6c6c6;
    border-radius: 3px;
    -webkit-font-smoothing: subpixel-antialiased;
    -ms-overflow-style: none;
}

body {
    background-color: #212121;
    height: 100vh;
}

.comp {
    position: relative;
    text-align: center;
    width: 100vw;
    overflow-y: scroll;
    transition: transform 2s cubic-bezier(.37,.11,.4,1);
}

#app {
    padding-top: 5vh;
    font-family: 'Comfortaa', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: calc(100% - 5vh);
}

.shadow {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow .5s;
}

.shadow:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.fade-leave-active {
    position: absolute;
}

.fade-enter-from {
    transform: translateY(100vh);
}

.fade-leave-from,
.fade-enter-to {
    transform: none;
}

.fade-leave-to {
    /*transform: translate(0, -200vh);*/
    transform: translateY(-100vh);
}
</style>