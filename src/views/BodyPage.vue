<template>
  <div class="main-body">
    <ScrollPanel style="width: 250px; height: 200px">
    <div class="container overflow-hidden text-start">
      <div class="row">
        <div class="col">
          <div class="con-1 p3">
            <div class="content ">
              <h3 class="text-4xl font-bold" data-aos="fade-down"> &lt; / Hi, I'm PANHA &gt; </h3>
              <h2 class="text-5xl leading-tight font-bold" >
                NICE TO MEET YOU!!
              </h2>
              
                <div class="typewriter" >
                  <h2 class="text-4xl leading-tight font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    I am into FRONTEND-DEVELOPER.
                  </h2>
                </div>
              

              <p class="leading-7 font-bold" >
                I am good at build for WebApplication and Website
                <br />
                I am very passionate about improving my coding skills &
                developing applications & websites.
              </p>
              <div class="btn-contact">
                <BtnContact />
            </div>
            <div class="btn-social">
                <BtnSocial />
            </div>
            </div>
            <div class="scrolldown text-center">
              <p>Please Scroll Down to see more</p>
              <i class="fa-solid fa-circle-chevron-down animated-arrow" style="color: #63E6BE;"></i>            
            </div>
            <ScrollTop  />
            
          </div>
        </div>
        <div class="col">
          <div class="con2 p-3 ">
                <img src="../assets/Avata.png" alt="">
          </div>
        </div>
        <!-- <div class="col-span-12 md:col-span-6 overflow-hidden">
        <img src="https://4kwallpapers.com/images/wallpapers/silhouette-person-balance-sunset-orange-sky-dawn-standing-3840x2160-3148.jpg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div> -->
      </div>
    </div>
  </ScrollPanel>
</div>
</template>
<script>
import BtnContact from './BtnContact.vue';
import BtnSocial from './BtnSocial.vue';
import ScrollTop from 'primevue/scrolltop';

export default {
  components: { BtnContact, BtnSocial, ScrollTop,},
  name: "BodyPage",
  
};
</script>

<style scoped>
.scrolldown {
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
}

.animated-arrow {
  color: #ffffff;
  font-size: 2rem;
  animation: bounce 1.5s infinite;
  display: inline-block;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px); /* Adjust as needed for bounce distance */
  }
}
.main-body {
  width: 100%;
  height: 830px;
}
@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  /* 100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  } */
}
.container {
  display: ruby;
  box-sizing: border-box;
}
.con-1 {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.con-1 .content {
  padding: 0 10%;
  margin-top: 10rem;
}
.container1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: clamp(2rem, 2.8vw, 5rem);
  font-family: Raleway;
  font-weight: bold;
}
.con2{
  width: 700px;
}

.typewriter {
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid #212121;
  animation: typing 3s steps(30, end) infinite alternate, cursor 0.75s step-end infinite;
}

@keyframes typing {
  from { 
    width: 0; 
  }
  to { 
    width: 100%; 
  }
}

@keyframes cursor {
  50% { 
    border-color: transparent; 
  }
}

</style>
