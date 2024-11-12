import { createApp } from 'vue';
import App from './App.vue';
import '../src/assets/style.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AnimateOnScroll from 'primevue/animateonscroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

// Use PrimeVue and Particles
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(Particles, {
    init: async engine => {
      await loadSlim(engine); // use slim version
    }
});

// Set up custom directive and mount AOS
app.directive('animateonscroll', AnimateOnScroll);

app.mount('#app');

// Initialize AOS after the app is mounted
AOS.init();
