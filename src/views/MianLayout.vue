<template>
    <div class="all-container bg-black grid-background ">
        <backgroundBox />
        <div class="wrapper">
            <HeaderBar />
            <div class="main-content">
                <div class="body1 mb-4">
                    <BodyPage />
                </div>
                <div class="section-aboutme ">
                    <section>
                    <AboutMe />
                </section>
                </div>
            </div>
        </div>
        </div>
</template>
<script setup>
import HeaderBar from '../components/HeaderBar.vue'; // Adjust path as necessary
import BackgroundBox from '/src/components/ui/BackgroundBox.vue';
import BodyPage from '../views/BodyPage.vue'; // Adjust path as necessary
</script>
<script>
import '../main.js';
import AboutMe from './AboutMe.vue';
export default {
    name: 'all-container',
    components: {
        HeaderBar,
        BackgroundBox,
        BodyPage,
        AboutMe,
    }
}
</script>
<style>
@import "../main.css";
.all-container{
    width: 100%;
    height: 100vh;
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