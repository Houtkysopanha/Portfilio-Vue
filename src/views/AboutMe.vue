<template>
  <div class="main-aboutme bg-black">
    <div class="container">
      <div class="AboutMe mb-40 mt-5 text-center">
        <h1>About Me</h1>
      </div>
      <div class="contain">
        <div class="row g-0 text-start">
          <div class="col-6 col-md-4 ">
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
          <div class="col-sm-6 col-md-8 p-2 ">
            <div class="content-text ml-20 mt-20">
              <h4 class="mb-3">HOUTKY SOPANHA</h4>
                <div class="skill">
                    <p>Frontend Developer</p>
                </div>
                <div class="note">
                    <Fieldset>
            <template #legend>
                <!-- <div class="flex items-center pl-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold p-2">Amy Elsner</span>
                </div> -->
                <div class="chip" style="width: 27%; font-size: 18px;">
                    <Chip label="HOUTKYSOPANHA" image="https://i.pinimg.com/564x/12/bd/05/12bd059f106729fb3db9f82c3d159e09.jpg" />
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
                </div>
                <br>
                <div >
                    <Button class="CV no-underline w-40 text-center bg-cyan-600" as="a" label="Detail Me" href="https://vuejs.org/" target="_blank" rel="noopener" />

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
    height: 900px;
}
.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  width: 370px;
  height: 500px;
  background-color: transparent;
  border: 1px solid cyan;
}
.card img{
    margin: 0;
    margin-left: 20px;
    margin-top: 20px;
}
.container {
  padding: 2px 16px;
}
.skill p{
    width: 180px;
    text-align: center;
    padding: 5px;
    border-radius: 4px;
    color: #f0abfc;
    font-weight: 400;
    background-color: #083344;
}
</style>
