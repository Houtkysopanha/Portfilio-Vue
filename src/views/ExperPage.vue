
<template>
  <div class="mian-myeduc">
    <div class="container">
      <div class="title mb-10 text-center">
        <h1 class="text-4xl">&lt; / Experience &gt;</h1>
      </div>
      <div class="content">
        <!-- Introduction Section -->
        <section class="intro">
          <p>Explore my journey of learning and accomplishments through the timeline below.</p>
        </section>

        <!-- Timeline Section -->
        <section class="timeline">
          <ul>
            <li v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
              <div>
                <img style=" height: 200px;" :src="item.photo" alt="Timeline Photo" class="timeline-photo" />
                <p class=" text-start text-2xl font-bold">{{ item.school }}</p>
                <p class="text-start text-sm font-medium">{{ item.year }}</p>
                <p class="text-start text-sm font-medium">{{ item.year1 }}</p>
                <p class="text-start text-success font-bold">{{ item.mark }}</p>
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
          school: "TAING KRASANG HIGHT SCHOOL",
          year: "2017-2019 | Graduated from Grade 9 National Education Program", 
          year1: "2020-2023 | Graduated from Grade 12 National Education Program", 
          photo: require("../assets/Img MOI.png"), // Ensure this path is correct
          mark: "Completed",
        }
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
  margin: 0 auto;
  padding-top: 50px;
  background: linear-gradient(to bottom, #06b6d4, #3b82f6); /* From cyan-500 to blue-500 */

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
  bottom: 0;
  width: 500px;
  padding: 15px;
  background: #3f3f46;
  border-radius: 5px;
  border: 1px solid #71717a;
  color: #fff;
}

.timeline ul li div::before {
  content: "";
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}

.timeline ul li:nth-child(even) div {
  left: -560px;
}

time {
  /* display: block; */
  font-size: 0.8rem;
  font-weight: bold;
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
