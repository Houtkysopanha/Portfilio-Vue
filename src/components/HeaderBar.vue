<template>

  <div class="logo p-1 text-center d-flex">
         <div class="name-logo text-end">
          <a class="navbar-brand navbar-logo" href="#">  <span>P</span>orfilio | <span>P</span>anah |</a>
         </div>
         <div class="img-logo">
          <img style="width: 40px; margin: auto;" src="https://img.icons8.com/?size=100&id=CMVEhOBzk3Zp&format=png&color=000000" alt="">

         </div>
        </div>
  <div class="main-header">
    <!-- <div class="logo text-center d-flex">
          <a class="navbar-brand navbar-logo" href="#">Panha|</a>
          <img style="width: 20px; margin: auto;" src="https://img.icons8.com/?size=100&id=CMVEhOBzk3Zp&format=png&color=000000" alt="">
        </div> -->

    <div class="container" style="max-width: 100%;">
      <nav class="navbar navbar-expand-custom navbar-mainbg">
        <!-- Hamburger button, only visible on small screens -->
        <div class="nav-right">
          <button class="navbar-toggler" v-show="windowWidth < 768" @click="toggleNavbar" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars text-white"></i>
          </button>

          <!-- Navbar Links, hidden initially on small screens -->
          <div :class="{'collapse': !isNavbarOpen && windowWidth < 768, 'navbar-collapse': true}" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <div class="hori-selector" :style="horiSelectorStyle"><div class="left"></div><div class="right"></div></div>
              <li class="nav-item" v-for="(item, index) in menuItems" :key="index" :class="{ active: activeIndex === index }" @click="setActive(index, $event)">
                <a class="nav-link" href="#"><i :class="item.icon"></i> {{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      menuItems: [
        { name: 'HOME', icon: 'fas fa-house' },
        { name: 'ABOUTME', icon: 'fas fa-address-card' },
        { name: 'SKILLS', icon: 'fas fa-laptop-code' },
        { name: 'EDUCATION', icon: 'fas fa-graduation-cap' },
        { name: 'WORK', icon: 'fas fa-check-to-slot' },
        { name: 'EXPERIMENCE', icon: 'fas fa-briefcase' },
      ],
      activeIndex: 0, // Set to 0 to make "HOME" active by default
      isNavbarOpen: false,
      windowWidth: window.innerWidth,
      horiSelectorStyle: {
        top: '0px',
        left: '0px',
        height: '0px',
        width: '0px'
      }
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
      this.updateHoriSelector();
    },
    setActive(index, event) {
      this.activeIndex = index;
      this.updateHoriSelector(event.target.closest('li'));
    },
    updateHoriSelector(activeItem) {
      if (!activeItem) {
        // activeItem = this.$el.querySelector('.nav-item.active');
      }
      if (activeItem) {
        const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = activeItem;
        this.horiSelectorStyle = {
          top: `${offsetTop}px`,
          left: `${offsetLeft}px`, // Align left from the start of the "HOME" menu item
          height: `${offsetHeight}px`,
          width: `${offsetWidth}px`,
          borderRadius: '15px'
        };
      }
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 768) {
        this.isNavbarOpen = true; // Show navbar on larger screens
      } else {
        this.isNavbarOpen = false; // Hide navbar on smaller screens
      }
    }
  },
  mounted() {
    this.updateHoriSelector();
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }
};
</script>

<style scoped>
.main-header {
  background-color: #18181b;
}
.main-header  {
  position: sticky; 
  top: 0; /* Stick it to the top */
  z-index: 1000; /* Ensure it's above other content */
}
.name-logo span{
  font-size: 30px;
}
.img-logo img{
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
.navbar-mainbg {
  background-color: #18181b;
}
#navbarSupportedContent {
  overflow: hidden;
  position: relative;
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
  padding: 10px 20px;
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
  padding: 10px;
}

/* Hamburger button hidden by default, shown only on small screens */
.navbar-toggler {
  display: none;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .navbar-toggler {
    display: block; /* Show hamburger button on small screens */
  }
  #navbarSupportedContent ul {
    flex-direction: column; /* Stack links vertically on small screens */
  }
  .navbar-collapse {
    display: none; /* Hide navbar content initially on small screens */
  }
  .navbar-collapse.collapse.show {
    display: block; /* Show when toggled open */
  }
}
</style>
