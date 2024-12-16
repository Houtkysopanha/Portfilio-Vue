<template>
  <div class="main-all">
    <!-- <div class="logo p-1 text-center d-flex">
      <div class="name-logo text-end">
        <a class="navbar-brand navbar-logo" href="#">
          <span>P</span>orfolio | <span>P</span>anah |
        </a>
      </div>
      <div class="img-logo">
        <img
          style="width: 40px; margin: auto;"
          src="https://img.icons8.com/?size=100&id=CMVEhOBzk3Zp&format=png&color=000000"
          alt=""
        />
      </div>
    </div> -->
    <div class="main-header">
      <div class="logo p-1 text-center d-flex">
      <div class="name-logo text-end">
        <a class="navbar-brand navbar-logo" href="#">
          <span>P</span>orfolio | <span>P</span>anah |
        </a>
      </div>
      <div class="img-logo">
        <img
          style="width: 40px; margin: auto;"
          src="https://img.icons8.com/?size=100&id=CMVEhOBzk3Zp&format=png&color=000000"
          alt=""
        />
      </div>
    </div>
      <div class="container" style="max-width: 100%;">
        <nav class="navbar navbar-expand-custom navbar-mainbg">
          <!-- Hamburger button, only visible on small screens -->
          <button
            class="navbar-toggler"
            v-show="windowWidth < 768"
            @click="toggleNavbar"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars text-white"></i>
          </button>

          <!-- Navbar Links -->
          <div
            :class="{
              collapse: !isNavbarOpen && windowWidth < 768,
              'navbar-collapse': true,
            }"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ml-auto">
              <div class="hori-selector" :style="horiSelectorStyle">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <li
                class="nav-item"
                v-for="(item, index) in menuItems"
                :key="index"
                :class="{ active: activeIndex === index }"
                @click="setActive(index, $event)"
              >
                <a class="nav-link" :href="item.href">
                  <i :class="item.icon"></i> {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      menuItems: [
        { name: "HOME", icon: "fas fa-house", href: "#home" },
        { name: "ABOUT ME", icon: "fas fa-address-card", href: "#aboutme" },
        { name: "SKILLS", icon: "fas fa-laptop-code", href: "#skills" },
        { name: "EDUCATION", icon: "fas fa-graduation-cap", href: "#education" },
        { name: "WORK", icon: "fas fa-check-to-slot", href: "#work" },
        { name: "EXPERIENCE", icon: "fas fa-briefcase", href: "#experience" },
      ],
      activeIndex: 0,
      isNavbarOpen: false,
      windowWidth: window.innerWidth,
      horiSelectorStyle: {
        top: "0px",
        left: "0px",
        height: "0px",
        width: "0px",
      },
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    setActive(index, event) {
      this.activeIndex = index;
      this.updateHoriSelector(event.target.closest("li"));
    },
    updateHoriSelector(activeItem) {
      if (activeItem) {
        const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = activeItem;
        this.horiSelectorStyle = {
          top: `${offsetTop}px`,
          left: `${offsetLeft}px`,
          height: `${offsetHeight}px`,
          width: `${offsetWidth}px`,
          borderRadius: "15px",
        };
      }
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
};
</script>

<style scoped>
/* Main header styles */
.main-header {
  background-color: #18181b;
  width: 100%;
  position: fixed;
  /* top: 0;  */
  z-index: 1000; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
}

/* Logo section */
.name-logo span {
  font-size: 30px;
}
.img-logo img {
  position: absolute;
  margin: 0px;
  top: 10px;
  left: 49%;
  right: 50%;
}
.navbar-logo {
  padding: 15px;
  color: #fff;
}
.logo{
  border-bottom: 1px solid gray;
}

/* Navbar */
.navbar-mainbg {
  background-color: #18181b;
}
#navbarSupportedContent ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row; /* Links in a row by default */
}
#navbarSupportedContent ul li {
  list-style-type: none;
}
#navbarSupportedContent ul li a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 15px;
  display: block;
  padding: 10px 20px;
  transition: all 0.6s;
}
#navbarSupportedContent > ul > li.active > a {
  color: whitesmoke;
  border-radius: 15px;
  transition: all 0.7s;
}
.hori-selector {
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: gray;
  opacity: 10%;
  border-radius: 15px;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Hamburger button for small screens */
.navbar-toggler {
  display: none;
}
/* @media (max-width: 768px) {
  .navbar-toggler {
    display: block;
  }
  #navbarSupportedContent ul {
    flex-direction: column;
  }
  .navbar-collapse {
    display: none;
  }
  .navbar-collapse.collapse.show {
    display: block;
  }
} */
</style>
