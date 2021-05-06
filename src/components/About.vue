<template>
    <div class="AboutContainer">
        <div class="left container">
            <span class="title">$(whoami)</span>
            <span class="content">
                Hi, My name is Kane, 2 years ago, I joined Discord and started my coding journry!
            </span>
        </div>
        <div class="hr"></div>
        <div class="right container">
            <span class="title">Contact</span>
            <div class="btn discord"><img src="@/assets/discord.svg"/>凱恩Kane#5384</div>
            <div class="btn email"><img src="@/assets/email.svg"/>contact@ka1e.co</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    methods: {
        copyToClipboard(text) {
            let dom = document.createComment('input')
        }
    }
}
</script>

<style scoped>
    .AboutContainer {
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        background-color: rgba(255, 255, 255, 0.9);
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
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    .btn {
        border-radius: 5px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 1rem 1rem 1rem;
        padding: .7rem 1.5rem;
        width: fit-content;
        height: 1.5rem;
        font-weight: bold;
        transition: .5s;
        white-space: nowrap;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
    }

    .btn:hover {
        box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.3);
    }

    .btn > img {
        height: 1.5rem;
        padding-right: .5rem;
    }

    .btn.email {
        background-color: #ffffff;
        color: #212121;
    }
    .btn.email:hover {
        background-color: #bababa;
    }
    .btn.discord {
        background-color: #7289da;
        color: white;
    }
    .btn.discord:hover {
        background-color: #56659e;
    }

    @media (max-width: 800px) {
        .AboutContainer {
            display: block;
            padding: 2rem;
            margin: 0;
            width: 70%;
            margin-top: 2rem;
        }

        .container {
            padding: 0;
        }

        .hr {
            width: calc(100% - 4rem);
            border-top: 1px solid #212121;
            margin: 2rem;
        }
    }
</style>