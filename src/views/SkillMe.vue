<template>
  <div class="main-skillme">
    <div class="container">
      <div class="Subject text-center mb-20">
        <h1>My skills and Ability</h1>
      </div>
      <div class="content-skill">
        <div
          class="grid grid-cols-4 gap-4 p-4 bg-zinc-900 place-content-center"
        >
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>HTML5</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>CSS3</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>JAVASCRIPT</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>BOOTSTRAP</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>TAILWANDCSS</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>VUEJS</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://img.icons8.com/?size=100&id=ixfybwBsCCEH&format=png&color=000000"
              />
            </div>
            <div class="name text-center">
              <p>PRIMEVUE</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>GIT</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>GITHUB</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://img.icons8.com/?size=100&id=24895&format=png&color=000000"
              />
            </div>
            <div class="name text-center">
              <p>NPM</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
              />
            </div>
            <div class="name text-center">
              <p>POSTMAN</p>
            </div>
          </div>
          <div class="box-1">
            <div class="logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
              />
            </div>
            <div class="name text-center">
              <p>VERCEL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillMe",
};
</script>
<style scoped>
.main-skillme {
  width: 100%;
  height: 850px;
  background-color: black;
}
.content-skill {
  width: 90%;
  height: auto;
  margin: auto;
}
.grid {
  border: 1px solid #3f3f46;
  border-radius: 5px;
}
.box-1 {
  background: #3f3f46;
  border-radius: 10px;
}
.box-1 img {
  width: 70px;
  margin: auto;
}
.logo {
  margin: 20px 0px 15px 0px;
}
</style>
