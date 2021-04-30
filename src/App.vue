<template>
    <Navbar/>
    <transition name="fade">
        <router-view/>
    </transition>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet">
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
    components: {Navbar}
}
</script>

<style>

* {
    /*outline: #00b7ff solid 3px;*/
    outline: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    color: #c6c6c6;
    border-radius: 3px;
}

*:focus {
    box-shadow: 0 0 0 3px #00b7ff;
}

body {
    background-color: #212121;
}

#app {
    margin-top: 2rem;
    font-family: 'Comfortaa', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
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