<template>
  <div class="main-skillme">
    <div class="container">
      <div class="subject text-center mb-10">
        <h1 style=" font-size: 2.5rem; 
  font-weight: 700;
  
  color: #38bdf8;" data-aos="fade-up"> &lt; / <span style="border-bottom: 5px solid white;">Skill</span>&Abilitie &gt; </h1>
      </div>
      <div class="content-skill">
        <div class="grid" data-aos="fade-up">
          <div class="skill-card" v-for="skill in skills" :key="skill.name">
            <div class="logo">
              <img :src="skill.icon" :alt="skill.name" />
            </div>
            <div class="name text-center">
              <p>{{ skill.name }}</p>
              <div class="progress-bar-container">
                <div class="progress-bar" :style="{ width: skill.level + '%' }"></div>
              </div>
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
  data() {
    return {
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 85 },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 85 },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 50 },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 65 },
        { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 50 },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", level: 50 },
        { name: "PrimeVue", icon: "https://img.icons8.com/?size=100&id=ixfybwBsCCEH&format=png", level: 45 },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 50 },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 50 },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", level: 50 },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg", level: 50 },
      ],
    };
  },
};
</script>

<style scoped>
.main-skillme {
  width: 100%;
  padding: 50px 0;
  background: linear-gradient(135deg, #1e293b, #111827);
  color: #f8fafc;
}

.subject .title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 20px;
}

.content-skill {
  width: 90%;
  margin: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.skill-card {
  background: linear-gradient(135deg, #3b82f6, #1e293b);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.skill-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.logo img {
  width: 70px;
  margin: auto;
  display: block;
}

.name p {
  margin: 10px 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.progress-bar-container {
  background: #334155;
  border-radius: 4px;
  height: 6px;
  overflow: hidden;
  margin-top: 10px;
}

.progress-bar {
  height: 100%;
  background: #f8fafc;
  border-radius: 4px;
  transition: width 0.5s ease;
}
</style>
