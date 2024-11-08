import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/style.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);
app.use(Particles, {
    init: async engine => {
      // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
  });
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
