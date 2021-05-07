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
    -ms-overflow-style: none;
}

html, body {
    height: 95%;
    background-color: #212121;
}

.comp {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100vw - 15rem);
}

#app {
    margin-top: 5vh;
    font-family: 'Comfortaa', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
}

.shadow {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow .5s;
}

.shadow:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
    transition: transform 1.5s cubic-bezier(.37,.11,.4,1);
}

.fade-enter-from {
    transform: translate(-50%, 100vh);
}

.fade-leave-from,
.fade-enter-to {
    transform: translate(-50%, -50%);
}

.fade-leave-to {
    transform: translate(-50%, -100vh);
}
</style>