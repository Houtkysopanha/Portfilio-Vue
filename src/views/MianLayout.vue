<template>
    <div class="all-container  bg-black grid-background ">
        <backgroundBox />
        <div class="wrapper">
            <HeaderBar />
            <div class="main-content">
                <div class="body1 mb-20">
                    <section id="home">
                        <BodyPage />
                    </section>
                    
                </div>
                <div class="section-aboutme mb-48">
                    <section id="aboutme">
                    <AboutMe />
                </section>
                </div>
                <div class="secton-skillme">
                    <section id="skills">
                        <SkillMe />
                    </section>
                </div>
                <div class="secton-myedux">
                    <section id="education">
                        <MyEducation />
                    </section>
                </div>
                <div class="secton-mypro">
                    <section >
                        <ProjectMade />
                    </section>
                </div>
                <div class="secton-myexper">
                    <section >
                        <ExperPage />
                    </section>
                </div>
                <div class="section-contact">
                    <section>
                        <ContactPage />
                    </section>
                </div>
                <div class="section-footer">
                    <FooterPage />
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
import AboutMe from '../views/AboutMe.vue'; // Adjust path as necessary
</script>
<script>
import '../main.js';
// import AboutMe from './AboutMe.vue';
import MyEducation from './MyEducation.vue';
import ProjectMade from './ProjectMade.vue';
import ExperPage from './ExperPage.vue';
import ContactPage from './ContactPage.vue';
import FooterPage from './FooterPage.vue';
export default {
    name: 'all-container',
    components: {
        HeaderBar,
        BackgroundBox,
        BodyPage,
        AboutMe,
        SkillMe,
        MyEducation,
        ProjectMade,
        ExperPage,
        ContactPage,
        FooterPage,
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
