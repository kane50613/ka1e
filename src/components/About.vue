<template>
    <div class="AboutContainer">
        <div class="BoxContainer shadow">
            <div class="left container">
                <span class="title">$(whoami)</span>
                <span class="content">
                Hi, My name is Kane, 2 years ago, I joined Discord and started my coding journey!
            </span>
            </div>
            <div class="hr"></div>
            <div class="right container">
                <span class="title">Contact</span>
                <div class="btn discord shadow copy" @click="copyToClipboard('凱恩Kane#5384')"><img src="@/assets/discord.svg" alt="Discord"/>凱恩Kane#5384</div>
                <div class="btn email shadow copy" @click="copyToClipboard('kane@iskane.me')"><img src="@/assets/email.svg" alt="Email"/>kane@iskane.me</div>
                <a href="https://github.com/Gary50613" class="btn github shadow"><img src="@/assets/github.svg" alt="Github"/>Gary50613</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    methods: {
        copyToClipboard(text) {
            if (window.clipboardData && window.clipboardData.setData)
                return window.clipboardData.setData("Text", text)
            if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                var textarea = document.createElement("textarea");
                textarea.textContent = text;
                textarea.style.position = "fixed";
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    return document.execCommand("copy");
                }
                catch (ex) {
                    return false;
                }
                finally {
                    document.body.removeChild(textarea);
                }
            }
        }
    }
}
</script>

<style scoped>
    .AboutContainer {
        display: flex;
        align-items: center;
        height: 75%;
        justify-content: center;
    }

    .BoxContainer {
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 5px;
        padding: 2rem 1rem;
        width: 90%;
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
        margin: 0 1rem 1rem 1rem;
        padding: .7rem 1.5rem;
        width: fit-content;
        height: 1.5rem;
        font-weight: bold;
        transition: .5s;
        white-space: nowrap;
        letter-spacing: .1rem;
    }

    .btn.copy::after {
        content: 'Copy to clipboard';
        background-color: #1c1c1c;
        border-radius: 5px;
        padding: .5rem 1.5rem;
        position: absolute;
        color: white;
        z-index: -9;
        opacity: 0;
        transition: .5s;
        transform: translate(0, -1rem);
    }

    .btn:hover::after {
        transform: translate(0, -3rem);
        z-index: 10;
        opacity: 1;
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
    .btn.github {
      background: black;
      color: white;
    }

    @media (max-width: 800px) {
        .BoxContainer {
            display: block;
            padding: 2rem;
            margin: 0 2rem;
        }

        .container {
            padding: 0;
        }

        .hr {
            width: calc(100% - 4rem);
            border-top: 1px solid #212121;
            margin: 1rem 2rem;
        }
    }
</style>