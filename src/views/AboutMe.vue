<template>
  <div class="main-aboutme bg-black">
    <div class="container">
      <div class="AboutMe mb-40 mt-0 text-center">
        <h1>About Me</h1>
      </div>
      <div class="contain">
        <div class="row g-0 text-start">
          <div class="col-6 col-md-4">
            <div class="card skew-y-3">
              <img
                src="https://i.pinimg.com/564x/12/bd/05/12bd059f106729fb3db9f82c3d159e09.jpg"
                alt="Avatar"
                style="width: 90%; height: 100%;"
              />
              <div class="container">
                <p>&lt; " Here!! Me " / &gt; </p>
              </div>
            </div>
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
                      <Chip label="HOUTKYSOPANHA" image="https://i.pinimg.com/564x/12/bd/05/12bd059f106729fb3db9f82c3d159e09.jpg" />
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
                  href="https://vuejs.org/"
                  target="_blank"
                  rel="noopener"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fieldset from 'primevue/fieldset';
import Chip from 'primevue/chip';
import Button from 'primevue/button';

export default {
  name: "AboutMe",
  components: {
    Fieldset,
    Chip,
    Button
  }
};
</script>

<style scoped>
.main-aboutme {
    width: 100%;
    height: 850px;
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

.card img {
  margin: 0;
  margin-left: 20px;
  margin-top: 20px;
}

@keyframes spin{
  from{
    --angle: 0deg;
  }
  to{
    --angle: 360deg;
  }
}

.skill p {
  width: 180px;
  text-align: center;
  padding: 5px;
  border-radius: 4px;
  color: #f0abfc;
  font-weight: 400;
  background-color: #083344;
}
</style>
