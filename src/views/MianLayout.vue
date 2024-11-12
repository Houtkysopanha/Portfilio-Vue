<template>
    <div class="all-container bg-black grid-background ">
        <backgroundBox />
        <div class="wrapper">
            <HeaderBar />
            <div class="main-content">
                <div class="body1 mb-0">
                    <BodyPage />
                </div>
                <div class="section-aboutme">
                    <section>
                    <AboutMe />
                </section>
                </div>
                <div class="secton-skillme">
                    <section>
                        <SkillMe />
                    </section>
                </div>
                <div class="secton-myedux">
                    <section>
                        <MyEducation />
                    </section>
                </div>
            </div>
        </div>
        </div>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderBar from '../components/HeaderBar.vue'; // Adjust path as necessary
import BackgroundBox from '/src/components/ui/BackgroundBox.vue';
import BodyPage from '../views/BodyPage.vue'; // Adjust path as necessary
import SkillMe from '../views/SkillMe.vue'; // Adjust path as necessary
</script>
<script>
import '../main.js';
import AboutMe from './AboutMe.vue';
import MyEducation from './MyEducation.vue';
export default {
    name: 'all-container',
    components: {
        HeaderBar,
        BackgroundBox,
        BodyPage,
        AboutMe,
        SkillMe,
        MyEducation,
    },
    mounted() {
    AOS.init();
  }
}
</script>
<style>
@import "../main.css";
.all-container{
    width: 100%;
    height: auto;
    background: black;
}
.grid-background {
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    background-position: center;
}

.animated-square {
    width: 50px;
    height: 50px;
    background-color: #8a5cf6;
    transform: translate(0, 0);
    transition: background-color 0.2s ease, transform 0.2s ease;
}
</style>