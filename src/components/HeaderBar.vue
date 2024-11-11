<template>
    <div class="main-header w-100 rounded-b border-b ">
    <div class="container w-100">
      <nav class="navigation-bar">
        <div class="all-nav">
          <div class="nav-left">
            <div class="logo">
             <p>Panha <sup> <img style=" width: 20px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></sup> 
             </p> 

            </div>
          </div>
          <div class="nav-right">
            <div class="nav-links">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>


</template>

<script>
export default {
  name: 'MainHeader',
};
</script>
<style scoped>
.main-header{
    background-color: #27272a
}
@import "../../src/css/HeaderBar.css";
</style>