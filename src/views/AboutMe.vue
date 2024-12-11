<template>
  <div class="main-aboutme bg-gradient">
    <div class="container">
      <div class="AboutMe mb-20   text-center"> 
        <h1 style=" font-size: 2.5rem; 
  font-weight: 700;
  
  color: #38bdf8;" data-aos="fade-up"> &lt; / About Me &gt; </h1>
      </div>
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
                      <span class="ml-3">: 02-03-2006</span>
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
                      <span class="ml-2">: 18</span>
                    </i>
                    <i class="fa-brands fa-google-scholar text-primary">
                      <span class="ml-2">: Bachelor | Present</span>
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
              <Button
                class="cv-button no-underline w-40 text-center bg-cyan-600 hover:bg-cyan-700"
                as="a"
                label="Detail Me"
                href="/My CV.pdf"
                target="_blank"
                rel="noopener"
              />
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


.aboutme-header h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #74C0FC;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
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

.text-4xl {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
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
}
</style>
