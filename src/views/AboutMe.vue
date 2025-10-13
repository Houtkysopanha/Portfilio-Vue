<template>
  <div class="main-aboutme bg-gradient">
    <div class="container">
      <header class="mb-10 text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-400 tracking-tight leading-tight mb-4 animate-fade-in-down">
        &lt; / <span class="border-b-4 border-indigo-300 pb-1">Abo</span>ut Me &gt;
      </h1>
      <p class="text-gray-400 text-lg sm:text-xl animate-fade-in-up">Let's connect and build something amazing.</p>
    </header>
      <div class="contain">
        <div class="row row-cols-1 g-0 text-start">
          <div class="col-6 box1 col-md-4">
            <div class="demo" data-aos="fade-up-right">
  <div class="box mb-2">
    <div class="hover-point"></div>
    <div class="hover-point"></div>
    <div class="hover-point"></div>
    <div class="hover-point"></div>
    <div class="hover-point"></div>
    <div class="hover-point"></div>
    <div class="hover-point"></div>
    <div class="hover-point"></div>
    <div class="box-contents"></div>
  </div>
</div>
    <p class="text-center">&#64;houtkysopanha</p>
          </div>
          <div class="col-md-8 p-3" data-aos="fade-up-left">
            <div class="content-text">
              <h4 class="text-4xl text-highlight mb-3">My BRIEF BACKGROUND</h4>
              <div class="skill mb-3">
                <p>Frontend Developer</p>
              </div>
              <div class="note mb-3">
                <p>I am a Junior developer and ICT student at Royal University of Phnom Penh.</p>
                <p>I take on several different projects as a developer.</p>
                <p>I am passionate about improving my coding skills & developing applications & websites.</p>
              </div>
              <hr />
              <div class="brief-bg mb-3">
                <div class="row row-cols-1 row-cols-lg-2 g-2">
                  <div class="col">
                    <i class="fa-solid fa-cake-candles text-primary">
                      <span class="ml-3">: 2006</span>
                    </i>
                    <i class="fa-solid fa-location-dot text-primary">
                      <span class="ml-3">: Chamkar Daung, Phnom Penh</span>
                    </i>
                    <i class="fa-solid fa-school text-primary">
                      <span class="ml-1">: Royal University of Phnom Penh</span>
                    </i>
                  </div>
                  <div class="col">
                    <i class="fa-solid fa-calendar text-primary">
                      <span class="ml-2">: 19 years old</span>
                    </i>
                    <i class="fa-brands fa-google-scholar text-primary">
                      <span style="font-weight: bold;" class="ml-2">: Bachelor Computer Science | Present</span>
                    </i>
                  </div>
                </div>
              </div>
              <div class="email-phone mb-4">
                <p>
                  <span class="font-medium text-cyan-500">Email:</span>
                  houtkysopanha69@gmail.com
                </p>
                <p>
                  <span class="font-medium text-cyan-500">Phone:</span>
                  +855 99 654 752
                </p>
              </div>
               <div class="action-buttons flex flex-wrap gap-4 justify-start">
            <Button
              class="action-button bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              as="a"
              label="Detail Me (CV)"
              href="/Houtkysopanha_CV.pdf"
              target="_blank"
              rel="noopener"
            >
              <i class="fa-solid fa-file-pdf mr-2"></i> Detail Me (CV)
            </Button>
            <Button
              class="action-button bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              as="a"
              label="My Certificates"
              href="https://my-certificates-flax.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              <i class="fa-solid fa-award mr-2"></i> My Certificates
            </Button>
          </div>
            </div>
          </div>
        </div>
      </div>
          <FormContact  />
      </div>
    </div>
</template>

<script>

import Button from 'primevue/button';
import FormContact from './FormContact.vue';


export default {
  name: "AboutMe",
  components: {
    Button,
    FormContact,

  },
 
};
</script>

<style scoped>

.main-aboutme {
  background: linear-gradient(135deg, #2e3b4e, #3b4f69);
  color: #fff;
  padding: 5em 0;
  width: 100%;
}

.card {
  position: relative;
  padding: 2em;
  width: 300px;
  height: 500px;
  border: 3px solid transparent;
  border-radius: 10px;
  background-color: transparent;
  text-align: center;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding: 3px;
  background: conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: spin 3s linear infinite;
  background-image: conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0095, #ff4545);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
}
@property --angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes spin{
  from{
    --angle: 0deg;
  }
  to{
    --angle: 360deg;
  }
}
.p {
  border: 1px silid red;
}
.skill p {
  width: 180px;
  text-align: center;
  padding: 5px;
  border-radius: 4px;
  color: #f0abfc;
  font-weight: 400;
  border: 1px solid #083344;
}

.heading-title {
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.box-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.box-contents {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../assets/MyPhoto.jpg) center/cover no-repeat;
  transition: transform 0.3s ease;
}

.hover-point {
  position: absolute;
  z-index: 2;
  width: 33%;
  height: 33%;
}

.hover-point:nth-child(1) {
  top: 0;
  left: 0;
}

.hover-point:hover ~ .box-contents {
  transform: scale(1.05) rotate(5deg);
}

.content-text {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
}

.text-highlight {
  color: #74C0FC;
}

.skill p {
  font-size: 1.1rem;
  color: #74C0FC;
  padding: 5px 0;
}

.brief-bg i {
  font-size: 1rem;
  color: #74C0FC;
  margin-bottom: 1rem;
}

.cv-button {
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  margin-top: 2rem;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  transition: background-color 0.3s ease;
}

.cv-button:hover {
  background-color: #3383b1;
}
.box {
  position: relative;
  width: 400px;
  height: 450px;
  border: 10px solid white;
}
.box-contents {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../assets/MyPhoto.jpg) 50% 50% / cover no-repeat;
  box-shadow: 0 0 50px rgba(0, 0, 0, .3);
  transition: .5s ease;
}
.hover-point {
  position: absolute;
  z-index: 2;
  width: calc(100% / 3);
  height: calc(100% / 3);
}
.hover-point:nth-child(1) {
  top: 0;
  left: 0;
}
.hover-point:nth-child(2) {
  top: 0;
  left: calc(100% / 3);
}
.hover-point:nth-child(3) {
  top: 0;
  right: 0;
}
.hover-point:nth-child(4) {
  top: calc(100% / 3);
  left: 0;
}
.hover-point:nth-child(5) {
  top: calc(100% / 3);
  right: 0;
}
.hover-point:nth-child(6) {
  bottom: 0;
  left: 0;
}
.hover-point:nth-child(7) {
  bottom: 0;
  left: calc(100% / 3);
}
.hover-point:nth-child(8) {
  bottom: 0;
  right: 0;
}
.hover-point:nth-child(1):hover ~ .box-contents {
  box-shadow: 15px 15px 50px rgba(0, 0, 0, .3);
  transform-origin: right top;
  transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg);
}
.hover-point:nth-child(2):hover ~ .box-contents {
  box-shadow: 0 15px 50px rgba(0, 0, 0, .3);
  transform-origin: center top;
  transform: perspective(1000px) rotateX(10deg);
}
.hover-point:nth-child(3):hover ~ .box-contents {
  box-shadow: -15px 15px 50px rgba(0, 0, 0, .3);
  transform-origin: left top;
  transform: perspective(1000px) rotateX(10deg) rotateY(10deg) rotateZ(-2deg);
}
.hover-point:nth-child(4):hover ~ .box-contents {
  box-shadow: 15px 5px 50px rgba(0, 0, 0, .3);
  transform-origin: left center;
  transform: perspective(1000px) rotateY(-10deg);
}
.hover-point:nth-child(5):hover ~ .box-contents {
  box-shadow: -15px 5px 50px rgba(0, 0, 0, .3);
  transform-origin: right center;
  transform: perspective(1000px) rotateY(10deg);
}
.hover-point:nth-child(6):hover ~ .box-contents {
  box-shadow: 15px -15px 50px rgba(0, 0, 0, .3);
  transform-origin: right bottom;
  transform: perspective(1000px) rotateX(-10deg) rotateY(-10deg) rotateZ(-2deg);
}
.hover-point:nth-child(7):hover ~ .box-contents {
  box-shadow: 0 -15px 50px rgba(0, 0, 0, .3);
  transform-origin: center bottom;
  transform: perspective(1000px) rotateX(-10deg);
}
.hover-point:nth-child(8):hover ~ .box-contents {
  box-shadow: -15px -15px 50px rgba(0, 0, 0, .3);
  transform-origin: left bottom;
  transform: perspective(1000px) rotateX(-10deg) rotateY(10deg) rotateZ(2deg);
}

@media (max-width: 1200px) {
  h1 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  .text-center {
    text-align: center;
  }

  .p-3 {
    padding: 1rem !important;
  }
  .box {
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  .box1 {
    width: 100% ;
    height: 50%;
    justify-content: center;
    align-items: center;
    margin: auto !important;
  }
}
/* Buttons (PrimeVue Button will override, but good for base styles) */
.action-button {
  display: inline-flex;
  align-items: center;
  width: 200px;
  justify-content: center;
  gap: 0.5rem; /* Space between icon and text */
  padding: 0.9rem 2.5rem; /* Generous padding */
  font-size: 1.05rem; /* Consistent font size */
  font-weight: 700; /* Bolder text */
  border-radius: 9999px; /* Fully rounded buttons */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Softer initial shadow */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  white-space: nowrap; /* Prevent text wrapping */
}

.action-button i {
  font-size: 1.1em; /* Slightly larger icon */
}

/* Button specific gradients & shadows */
/* Detail Me (CV) Button */
.action-buttons .action-button:first-child {
  background: linear-gradient(90deg, #3b82f6, #9333ea);
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
}
.action-buttons .action-button:first-child:hover {
  background: linear-gradient(90deg, #2563eb, #7e22ce);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.45);
  transform: translateY(-3px) scale(1.02);
}

/* My Certificates Button */
.action-buttons .action-button:last-child {
  background: linear-gradient(90deg, #06b6d4, #14b8a6);
  box-shadow: 0 5px 15px rgba(6, 182, 212, 0.3);
}
.action-buttons .action-button:last-child:hover {
  background: linear-gradient(90deg, #0ea5e9, #0d9488);
  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.45);
  transform: translateY(-3px) scale(1.02);
}

@media (max-width: 576px) {
  h1 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  .text-center {
    text-align: center;
  }

  .p-3 {
    padding: 1rem !important;
  }
  .box1{
    width: 100%;
  }
  .box {
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin: auto !important;
  }
  .btn2 .cv-button{
    font-size: 13px;
    font-size: bold;
    width: auto;
  }
}
</style>
