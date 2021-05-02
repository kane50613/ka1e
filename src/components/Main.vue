<template>
    <div class="MainContainer">
        <strong class="title"><span class="coding">Coding</span> is <span class="everything">Everything</span></strong>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>
    .MainContainer {
        height: 80%;
        display: flex;
        align-items: center;
    }

    .title {
        font-size: 1000%;
    }

    .title .coding {
        background: #be93c5;
        background: -webkit-linear-gradient(to right, #be93c5, #7bc6cc);
        background: linear-gradient(to right, #be93c5, #7bc6cc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .title .everything {
        background: #e65c00;
        background: -webkit-linear-gradient(to right, #e65c00, #f9d423);
        background: linear-gradient(to right, #e65c00, #f9d423);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>