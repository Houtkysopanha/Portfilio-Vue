<template>
  <div class="main-aboutme bg-black">
    <div class="container">
      <div class="AboutMe mb-40 text-center">
        <h1>About Me</h1>
      </div>
      <div class="contain">
        <div class="row g-0 text-start">
          <div class="col-6 col-md-4">
            <div class="demo">
  <div class="box">
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


            <!-- <div
  class="card skew-y-0  "
>
  <img
    src="../assets/My Photo.jpg"
    alt="Avatar"
    style="width: 100%; height: 100%; border-radius: 5px;"
  />
  <div class="container">
    <p>&lt; " Here!! Me " / &gt;</p>
  </div>
</div> -->

          </div>
          <div class="col-sm-6 col-md-8 p-2">
            <div class="content-text ml-20 mt-20">
              <h4 class="mb-3">HOUTKY SOPANHA</h4>
              <div class="skill">
                <p>Frontend Developer</p>
              </div>
              <div class="note">
                <Fieldset>
                  <template #legend>
                    <div class="chip" style="width: 27%; font-size: 18px;">
                      <Chip label="HOUTKYSOPANHA" image= "https://scontent.fpnh1-1.fna.fbcdn.net/v/t39.30808-6/407326085_1045442653364089_2566174350899690277_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=6YIRxuhAPDgQ7kNvgEpg10l&_nc_zt=23&_nc_ht=scontent.fpnh1-1.fna&_nc_gid=A8D4fJ8UwYByhWq43yz0lkH&oh=00_AYBj-PLLdOdUzOwfPK7XwOdiiQJf0ElJ_rZscCgfuMtRbA&oe=6737CCEA" />
                    </div>
                  </template>
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Fieldset>
              </div>
              <br />
              <div>
                <Button
                  class="CV no-underline w-40 text-center bg-cyan-600"
                  as="a"
                  label="Detail Me"
                  href="/My CV.pdf"
                  target="_blank"
                  rel="noopener"
                />
              </div>
            </div>
          </div>
          <FormContact />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Fieldset from 'primevue/fieldset';
import Chip from 'primevue/chip';
import Button from 'primevue/button';
import FormContact from './FormContact.vue';


export default {
  name: "AboutMe",
  components: {
    Fieldset,
    Chip,
    Button,
    FormContact,

  },
 
};
</script>

<style scoped>

.main-aboutme {
    width: 100%;
    height: 900px;
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

/* .card img {
  margin: 0;
  margin-left: 20px;
  margin-top: 20px;
} */

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



.box {
  position: relative;
  width: 400px;
  height: 450px;
}
.box-contents {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(https://scontent.fpnh1-1.fna.fbcdn.net/v/t39.30808-6/407326085_1045442653364089_2566174350899690277_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=6YIRxuhAPDgQ7kNvgEpg10l&_nc_zt=23&_nc_ht=scontent.fpnh1-1.fna&_nc_gid=A8D4fJ8UwYByhWq43yz0lkH&oh=00_AYBj-PLLdOdUzOwfPK7XwOdiiQJf0ElJ_rZscCgfuMtRbA&oe=6737CCEA) 50% 50% / cover no-repeat;
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



</style>
