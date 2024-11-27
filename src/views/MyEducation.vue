<template>

  <div class="main-experience">
      <div class="title text-center">
          <h1 class=" text-4xl">
              Education
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea ipsam aliquid voluptate beatae aperiam, velit minima facere ab debitis tempora nobis optio, corrupti recusandae enim error, reiciendis excepturi veritatis!</p>
      </div>
      <div class="timelinw-exper">
          <section>
  <!-- Intro Section -->
  

  <!-- Timeline Section -->
  <section class="timeline">
    <ol>
      <li v-for="(item, index) in timelineItems" :key="index" ref="timelineItems">
        <div class="item-inner">
          <div class="time-wrapper">
            <time>{{ item.year }}</time>
          </div>
          <div class="details">
            <h3>{{ item.heading }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </li>
    </ol>
  </section>
</section>
      </div>
  </div>
</template>
<script>
export default{
  name: "ExperPage",
  data() {
  return {
    timelineItems: [
    { year: "2024-2028", heading: "ROYAL UNIVERSITY OF PHNOM PENH", description: "Batcerlor of Information Technology | Majoring | Computer Scient" },
    { year: "Apr,06 - Jun,22 of 2024", heading: "INSTINCT INSTITUTE", description: "Frontend Developers | Short Course" },
    { year: "2020-2023", heading: "TAING KRASANG HIGHT SCHOOL", description: "Graduated from Grade 12 National Education Program" },
    { year: "2017-2019", heading: "TAING KRASANG HIGHT SCHOOL", description: "Graduated from Grade 9 National Education Program" },
    ],
  };
},
mounted() {
  const targets = this.$refs.timelineItems;
  const threshold = 0.5;
  const ANIMATED_CLASS = "in-view";

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const elem = entry.target;
      if (entry.intersectionRatio >= threshold) {
        elem.classList.add(ANIMATED_CLASS);
        observer.unobserve(elem);
      } else {
        elem.classList.remove(ANIMATED_CLASS);
      }
    });
  };

  const observer = new IntersectionObserver(callback, { threshold });
  targets.forEach((target) => observer.observe(target));
},
}
</script>
<style scoped>
.main-experience{
  width: 100%;
  height: auto;
  background-color: black;
}
:root {
--red: #f45b69;
--dark-blue: #227c9d;
--turquoise: #17c3b2;
--white: #fff;
}

*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

a {
color: inherit;
}

body {
font: normal 16px/1.5 "Inter", sans-serif;
padding-bottom: 50px;
}

/* INTRO SECTION */
.intro {
color: var(--white);
background: var(--red);
padding: 100px 0;
}

.container {
width: 90%;
max-width: 1200px;
margin: 0 auto;
text-align: center;
}

h1 {
font-size: 2.5rem;
}

/* TIMELINE */
.timeline {
padding: 50px 20px;
margin: 0 auto;
max-width: 1000px;
color: var(--dark-blue);
}

.timeline ol {
position: relative;
list-style: none;
}

.timeline ol::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 3px;
height: 100%;
background: darkcyan;
}

.timeline ol li .item-inner {
padding: 20px 180px;
margin-bottom: 8vh;
}

.timeline ol li .time-wrapper {
position: relative;
font-size: 3rem;
font-weight: bold;
line-height: 0.9;
}

.timeline ol li .time-wrapper::before,
.timeline ol li .time-wrapper::after {
content: "";
position: absolute;
background: red;
}

.timeline ol li .time-wrapper::before {
top: 50%;
left: -180px;
transform: translateY(-50%);
width: 0;
height: 3px;
transition: width 0.8s linear;
}

.timeline ol li .time-wrapper::after {
top: calc(50% - 8px);
left: -60px;
width: 15px;
height: 15px;
border-radius: 50%;
transform: scale(0);
transform-origin: left center;
transition: all 0.4s linear;
}

.timeline ol li time,
.timeline ol li .details > * {
opacity: 0;
transition: 0.5s;
}

.timeline ol li time {
display: inline-block;
transform: translateY(-30px);
}

.timeline ol li .details > * {
transform: translateY(30px);
}

.timeline ol li .details h3 {
font-size: 2rem;
line-height: 1;
margin: 15px 0;
}

/* ANIMATION STYLES */
.timeline ol li.in-view .time-wrapper::before {
width: 120px;
}

.timeline ol li.in-view .time-wrapper::after {
transition-delay: 0.8s;
transform: scale(1.5);
}

.timeline ol li.in-view time,
.timeline ol li.in-view .details > * {
opacity: 1;
transform: none;
}

.timeline ol li.in-view time {
transition-delay: 1.3s;
}

.timeline ol li.in-view .details h3 {
transition-delay: 1.5s;
}

.timeline ol li.in-view .details p {
transition-delay: 1.7s;
}

/* MQ STYLES */
@media (max-width: 700px) {
.timeline ol li .item-inner {
  padding: 20px 40px;
}

.timeline ol li .time-wrapper::before {
  display: none;
}

.timeline ol li .time-wrapper::after {
  left: -45px;
  transform-origin: center;
}

.timeline ol li.in-view .time-wrapper::after {
  transition-delay: 0s;
}

.timeline ol li.in-view time {
  transition-delay: 0.5s;
}

.timeline ol li.in-view .details h3 {
  transition-delay: 0.7s;
}

.timeline ol li.in-view .details p {
  transition-delay: 0.9s;
}
}
</style>
