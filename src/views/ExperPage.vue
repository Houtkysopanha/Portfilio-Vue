<template>
  <div class="main-myeduc">
    <div class="container">
      <div class="title text-center" style="margin-top: 65px;">
        <h1 style=" font-size: 2.5rem; 
  font-weight: 700;
  
  color: #38bdf8;" data-aos="fade-up"> &lt; / <span style="border-bottom: 5px solid white;">Exp</span>rience &gt; </h1>
      </div>
      <div class="content">
        <!-- Introduction Section -->
        <!-- <section class="intro">
          <p>Explore my journey of learning and accomplishments through the timeline below.</p>
        </section> -->

        <!-- Timeline Section -->
        <section class="timeline text-start">
          <ul>
            <li v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
              <div>
                <img :src="item.photo" alt="Timeline Photo" class="timeline-photo" />
                <p class="school-name">{{ item.school }}</p>
                <hr>
                <p class="timeline-year">{{ item.dec }}</p>
                <p class="timeline-year">{{ item.dec1 }}</p>
                <!-- <p class="mark">{{ item.mark }}</p> -->
                 <p class="mark1">{{ item.mark }}</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyEducation",
  data() {
    return {
      timelineItems: [
        { 
          school: "Ministy of Interior | Internship",
          dec: "General Department of Digital Technology and Media", 
          dec1: "Work as a position Frontend Developer at Department of Software Development and Digital Innovation" ,
          photo: require("../assets/Img MOI.png"), 
          mark: "Present",
        }, 
        { 
          school: "EdTech Summit Cambodia | Volunteer",
          dec: "Responsible in role Registration and Logistic.", 
          dec1: "Instant Switching role with other volunteer if needed." ,
          photo: require("../assets/EdTech.jpg"), 
          mark: "Finished",
        }, 
      ],
    };
  },
  methods: {
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    checkElementsInView() {
      const items = this.$el.querySelectorAll(".timeline-item");
      items.forEach((item) => {
        if (this.isElementInViewport(item)) {
          item.classList.add("in-view");
        }
      });
    },
  },
  mounted() {
    this.checkElementsInView();
    window.addEventListener("resize", this.checkElementsInView);
    window.addEventListener("scroll", this.checkElementsInView);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkElementsInView);
    window.removeEventListener("scroll", this.checkElementsInView);
  },
};
</script>

<style scoped>
.intro {
  color: #fff;
  font-size: 1.2rem;
  /* margin-bottom: 30px; */
}

/* Container Styling */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

/* Timeline Styling */
.timeline ul {
  padding: 50px 0;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 3px;
  /* margin: 50px auto; */
  padding-top: 50px;
  background: linear-gradient(to bottom, #06b6d4, #3b82f6);
  /* Add space between the line and the content */
  margin-left: 50px; /* This ensures there's space on the left side */
}

.timeline ul li::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: whitesmoke;
  z-index: 1;
}

.timeline ul li div {
  position: relative;
  width: 500px;
  padding: 20px;
  background: #3f3f46;
  border-radius: 5px;
  border: 1px solid #71717a;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Add margin to create space between the line and the content */
  margin-left: 35px; /* Space between line and content */
}

.timeline ul li div::before {
  content: "";
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Timeline Item Text Styling */
.timeline .school-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
}

.timeline .timeline-year, .timeline .timeline-year1 {
  font-size: 1rem;
  font-weight: 500;
  /* color: #b3b3b3; */
}

.timeline .mark1 {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: whitesmoke;
  margin-top: 10px;
  background-color: #2ec4b6;
  border-radius: 30px;
  width: 40%;
  padding: 4px;
}

/* Timeline Photo Styling */
.timeline-photo {
  width: 500px;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Animation Effects */
.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}

/* Responsive Styling */
@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
  }
}

@media screen and (max-width: 600px) {
  .timeline ul li {
    margin-left: 20px;
  }
  .timeline ul li div {
    width: calc(100vw - 91px);
  }
}

</style>
