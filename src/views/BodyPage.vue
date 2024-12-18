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
                <!-- <div> <ContactFoot /> </div> -->
              </div>
              <div class="scrolldown">
                <p data-aos="fade-up">Please Scroll Down to see more</p>
                <i  data-aos="fade-up" class="fa-solid fa-circle-chevron-down animated-arrow"></i>
              </div>
              <ScrollTop />
            </div>
          </div>
          <div class="col-md-6">
            <div class="con2  image-container" data-aos="fade-left">
              <img src="../assets/myprofile1.png" alt="Avatar" class="avatar-img" />
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
// import ContactFoot from './ContactFoot.vue';

export default {
  components: {
    // BtnContact,
    ScrollTop,
    // ContactFoot,
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

.avatar-img {
  max-width: 100%;
  height: auto;
  display: block;
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
