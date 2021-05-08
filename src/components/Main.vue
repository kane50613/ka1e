<template>
    <div class="MainContainer">
        <strong class="title"><span class="coding">Coding</span> is<br><span class="everything">Everything</span></strong>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>
    .MainContainer {
        position: absolute;
        top: calc(10% + 8rem);
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 12vw;
        transition: .5s;
        user-select: none;
    }

    .title:hover {
        font-size: calc(12vw + 20px);
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
        background: -webkit-linear-gradient(to right, #fdc830, #f37335);
        background: linear-gradient(to right, #fdc830, #f37335);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    @media (max-width: 600px) {
        .MainContainer {
            top: calc(25% + 8rem);
        }
    }

    @media (max-height: 500px) {
        .title {
            font-size: 25vh;
        }

        .title:hover {
            font-size: calc(25vh + 20px);
        }
    }
</style>