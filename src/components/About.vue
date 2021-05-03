<template>
    <div class="AboutContainer">
        <div class="left container">
            <span class="title">$(whoami)</span>
            <span class="content">
                Hi, My name is Kane, 2 years ago, I joined Discord
            </span>
        </div>
        <div class="hr"></div>
        <div class="right container">
            <span class="title">Contact</span>
            <div class="btn discord">Discord</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style scoped>
    .AboutContainer {
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        background-color: white;
        border-radius: 5px;
        padding: 2rem 0;
    }

    span {
        color: black;
    }

    .hr {
        width: 0;
        border-radius: 0;
        border-left: 1px solid #212121;
    }

    .container {
        padding: 1rem;
    }

    .title {
        font-weight: bold;
        display: block;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .btn {
        border-radius:  5px;
    }

    .btn.discord {
        cursor: pointer;
        background-color: #7289da;
        color: white;
        margin: auto;
        padding: 1rem 2rem;
        width: fit-content;
        font-weight: bold;
    }

    @media (max-width: 800px) {
        .AboutContainer {
            display: block;
            padding: 2rem;
            margin: 0;
        }

        .hr {
            width: calc(100% - 4rem);
            border-top: 1px solid #212121;
            margin: 2rem;
        }
    }
</style>