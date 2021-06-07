<template>
    <div class="ProjectsContainer">
          <div class="repoContainer" v-for="n in repos" @click="redirect(n.html_url)">
              <div class="infoContainer">
                  <p class="repoName">{{n.name}}</p>
                  <p class="repoDescription">{{n.description}}</p>
              </div>
              <div class="countContainer">
                  <img src="@/assets/github/star.svg" class="countIcon">
                  <p class="count">{{n.stargazers_count}}</p>
                  <div v-if="n?.forks_count > 0" class="counterContainer">
                      <img src="@/assets/github/fork.svg" class="countIcon">
                      <p class="count">{{n.forks_count}}</p>
                  </div>
                  <p class="language">{{n.language}}</p>
              </div>
          </div>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data() {
        return {
          repos: []
        }
    },
    methods: {
        fetchGithubUser() {
            fetch('https://api.github.com/users/Gary50613/repos')
            .then(async r => {
                this.repos = (await r.json())
                .filter(x => x.stargazers_count > 0)
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                console.log(this.repos)
            })
        },
        redirect(url) {
          location.href = url
        }
    },
    async beforeMount() {
        await this.fetchGithubUser()
    }
}
</script>

<style scoped>
    .ProjectsContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        margin-top: 3rem;
    }
    .repoContainer {
        display: block;
        border-radius: 5px;
        width: 60%;
        margin: 2rem auto;
        padding: 2rem;
        transition: .5s;

    }
    .repoContainer:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    .repoName {
      font-size: 2rem;
      font-weight: 900;
    }
    .hr {
      background: rgba(255, 255, 255, 0.3);
      width: 80%;
      height: 1px;
      margin: auto;
    }
    .infoContainer {
        text-align: left;
    }
    .countContainer {
      display: flex;
    }
    .countIcon {
      margin-right: .5rem;
      font-weight: 900;
    }
    .count {
      margin-right: 1rem;
    }
    .repoDescription {
      margin: .5rem 0;
    }
    .counterContainer {
      display: flex;
    }

    @media (max-width: 1000px) {
      .ProjectsContainer {
        display: block;
      }
    }
</style>