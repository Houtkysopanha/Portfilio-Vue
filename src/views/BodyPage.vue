<template>
  <div class="main-body">
    <ScrollPanel style="width: 100%; height: auto">
      <div class="container">
        <div class="row row-cols-1 g-0" style="margin-top: 140px;">
          <div class="col-md-6">
            <div class="con-1">
              <div class="content">
                <h3 class="text-4xl font-bold" data-aos="fade-down">&lt;/ Hi, I'm PANHA &gt;</h3>
                <h2 class="text-5xl leading-tight font-bold" data-aos="fade-down">NICE TO MEET YOU!!</h2>
                <div class="typewriter">
              <h2 id="typewriter-text" data-aos="fade-down" class="typewriter-text gradient-text">
                 {{ displayedText }}
              </h2>
              </div>

                <p class="description" data-aos="fade-down">
                  I am good at building Web Applications and Websites. <br />
                  I am very passionate about improving my coding skills & developing applications.
                </p>
                <!-- <div class="btn-contact" data-aos="fade-right"><BtnContact /></div> -->
                <div class=" mt-10"> 
                  <ContactFoot /> 
                </div>
              </div>
              <div class="scrolldown">
                <p data-aos="fade-up">Please Scroll Down to see more</p>
                <i  data-aos="fade-up" class="fa-solid fa-circle-chevron-down animated-arrow"></i>
              </div>
              <ScrollTop />
            </div>
          </div>
          <div class="col-md-6">
            <div class="con2 image-container" data-aos="fade-left">
              <div class="profile-container">
                <div class="image-wrapper">
                  <img :src="require('@/assets/my-img.png')" alt="Avatar" class="avatar-img" />
                </div>
                <!-- Tech Icons -->
                <div class="tech-icon icon-html">
                  <i class="fab fa-html5" style="color: #e34c26;"></i>
                </div>
                <div class="tech-icon icon-css">
                  <i class="fab fa-css3-alt" style="color: #264de4;"></i>
                </div>
                <div class="tech-icon icon-js">
                  <i class="fab fa-js" style="color: #f0db4f;"></i>
                </div>
                <div class="tech-icon icon-vue">
                  <i class="fab fa-vuejs" style="color: #42b883;"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollPanel>
  </div>
</template>

<script>

// import BtnContact from "./BtnContact.vue";
// import BtnSocial from "./BtnSocial.vue";
import ScrollTop from "primevue/scrolltop";
import ContactFoot from './ContactFoot.vue';

export default {
  components: {
    // BtnContact,
    ScrollTop,
    ContactFoot,
  },
  name: "BodyPage",
  data() {
  return {
    words: [
      "I am into a FRONTEND-DEVELOPER.",
      "Currently, I am years 2.",
      "HTML5,CSS3,Javascript,..",
      "Vue JS Framework.",
      "DESIGN ENTHUSIAST.",
    ],
    currentWordIndex: 0,
    displayedText: "",
    isDeleting: false,
    typingSpeed: 100, // Typing speed in milliseconds
    deletingSpeed: 50, // Deleting speed in milliseconds
    pauseBetweenWords: 1000, // Pause before typing the next word
    pauseAfterDelete: 500, // Pause after deleting the current word
  };
},
mounted() {
  this.startTyping();
},
beforeUnmount() {
  clearTimeout(this.typingTimeout);
},
methods: {
  startTyping() {
    const currentWord = this.words[this.currentWordIndex];

    if (!this.isDeleting && this.displayedText.length < currentWord.length) {
      // Typing mode
      this.displayedText = currentWord.substring(0, this.displayedText.length + 1);
      this.typingTimeout = setTimeout(this.startTyping, this.typingSpeed);
    } else if (this.isDeleting && this.displayedText.length > 0) {
      // Deleting mode
      this.displayedText = currentWord.substring(0, this.displayedText.length - 1);
      this.typingTimeout = setTimeout(this.startTyping, this.deletingSpeed);
    } else if (!this.isDeleting && this.displayedText.length === currentWord.length) {
      // Pause after typing the full word
      this.isDeleting = true;
      this.typingTimeout = setTimeout(this.startTyping, this.pauseBetweenWords);
    } else if (this.isDeleting && this.displayedText.length === 0) {
      // Pause before switching to the next word
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.typingTimeout = setTimeout(this.startTyping, this.pauseAfterDelete);
    }
  },
},

};
</script>

<style scoped>
.main-body {
  padding: 0;
  margin: 0;
  width: 100%;
}

.container {
  box-sizing: border-box;
  padding: 1rem;
}

.con-1 {
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
}

.content {
  margin-top: 4rem;
    
}

.description {
  margin-top: 1rem;
  font-size: 1rem;
}

.scrolldown {
  text-align: center;
  margin-top: 3rem;
}

.animated-arrow {
  color: #63e6be;
  font-size: 2rem;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.typewriter {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  position: relative;
  height: 2.5rem; /* Set a fixed height for the container */
}

.typewriter-text {
  font-size: 2rem;
  font-weight: bold;
  display: inline-block;
  width: auto;
  text-align: left;
  vertical-align: top;
  animation: cursor-blink 0.75s step-end infinite;
}

.gradient-text {
  background: linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247), rgb(236, 72, 153));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@keyframes cursor-blink {
  50% {
    border-right: 2px solid #212121;
  }
}



/* Responsive Styles */
@media (max-width: 1024px) {
  .typewriter-text {
    font-size: 1.75rem; /* Adjust for tablets */
  }
}

@media (max-width: 768px) {
  .typewriter-text {
    font-size: 1.5rem; /* Adjust for small tablets or large phones */
  }
}

@media (max-width: 480px) {
  .typewriter-text {
    font-size: 1.25rem; /* Adjust for smaller phones */
    border-right: 2px solid #212121; /* Adjust border size for smaller screens */
  }
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.profile-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white; /* Optional: adds a nice frame */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Soft shadow for depth */
  transition: transform 0.3s ease;
  z-index: 1;
}

.tech-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  z-index: 10;
  animation: float 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.tech-icon:hover {
  transform: scale(1.1) rotate(10deg);
  cursor: pointer;
}

.icon-html {
  top: 10%;
  left: -20px;
  animation-delay: 0s;
}

.icon-css {
  bottom: 10%;
  left: -10px;
  animation-delay: 1s;
}

.icon-js {
  top: 5%;
  right: -10px;
  animation-delay: 2s;
}

.icon-vue {
  bottom: 15%;
  right: -25px;
  animation-delay: 0.5s;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.image-wrapper:hover {
  transform: scale(1.02); /* Subtle hover effect */
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the circle without distortion */
  display: block;
}

/* Responsive adjustments for the image */
@media (max-width: 992px) {
  .profile-container {
    width: 300px;
    height: 300px;
  }
  
  .tech-icon {
    width: 45px;
    height: 45px;
    font-size: 24px;
  }
}

@media (max-width: 576px) {
  .profile-container {
    width: 250px;
    height: 250px;
    margin-top: 2rem;
  }
  
  .tech-icon {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
  
  /* Adjust icon positions for smaller screens to keep them close */
  .icon-html { left: -10px; }
  .icon-css { left: -5px; }
  .icon-js { right: -5px; }
  .icon-vue { right: -10px; }
}

@media (max-width: 992px) {
  .content {
    margin-top: 2rem;
  }
  .typewriter h2 {
    font-size: 1.4rem;
  }
  .description {
    font-size: 0.9rem;
    text-align: start;
  }
}

@media (max-width: 576px) {
  .content {
    text-align: center;
    margin-top: 1rem;
  }
  .typewriter h2 {
    font-size: 1rem;
  }
  .animated-arrow {
    font-size: 1.5rem;
  }
}
@media (max-width: 320px) {
  h3 {
    font-size: 20px; /* Adjusts the heading size for smaller screens */
  }
  .content {
    text-align: center; /* Centers text for better readability */
    margin-top: 1rem; /* Reduces top margin */
  }
  .typewriter h2 {
    font-size: 0.8rem; /* Shrinks font size for the typewriter effect */
  }
  .animated-arrow {
    font-size: 1.5rem; /* Reduces the size of the arrow */
  }
}

</style>
