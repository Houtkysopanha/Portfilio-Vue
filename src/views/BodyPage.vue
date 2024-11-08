<template>
  <div class="main-body">
    <div class="container overflow-hidden text-start">
      <div class="row">
        <div class="col">
          <div class="con-1 p-3">
            <div class="content">
              <h3 class="text-4xl font-bold">Hi, I'm PANHA</h3>
              <h2 class="text-5xl leading-tight font-bold">
                NICE TO MEET YOU!!
              </h2>
              
                <div class="typewriter">
                  <h2 class="text-4xl leading-tight font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    I am into FRONTEND-DEVELOPER.
                  </h2>
                </div>
              

              <p class="leading-7 font-bold">
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
            
          </div>
        </div>
        <div class="col">
          <div class="con2 p-3 ">
                <img src="https://i.pinimg.com/564x/12/bd/05/12bd059f106729fb3db9f82c3d159e09.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import BtnContact from './BtnContact.vue';
import BtnSocial from './BtnSocial.vue';

export default {
  components: { BtnContact, BtnSocial },
  name: "BodyPage",
  
};
</script>

<style scoped>

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
