<template>
    <Navbar style="z-index: 999"/>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" style="position: absolute; top: 55%; left: 50%; transform: translate(-50%, -50%)"></component>
        </transition>
    </router-view>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet">
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
    components: {Navbar}
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
    -ms-overflow-style: none;
}

html, body {
    height: 95%;
    background-color: #212121;
}

#app {
    margin-top: 5vh;
    font-family: 'Comfortaa', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

</style>