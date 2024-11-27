<template>
    <div class="main-footer">
        <div class="Box">
            <div class="container text-center">
      <div class="row text-start row-cols-1 row-cols-lg-3 g-1 g-lg-2">
        <div class="col ">
          <div class="p-3">
            <div class="name">
                <h1 class="text-2xl">Panha Portfolio</h1>
            </div>
            <div class="describe">
                <p>Thank you for visiting my personal portfolio Website.</p>
                <p>Contact me with my social.</p>
            </div>
        </div>
        </div>
        <div class="col">
          <div class="p-3 ">
            <h1 class="text-2xl">
                Quick Links
            </h1>
            <div class="link ml-5">
                
                    <i class="fa-regular fa-circle-right"> <span class="font-medium"> Home</span></i>
                    <i class="fa-regular fa-circle-right"> <span class="font-medium"> AboutMe</span></i>
                    <i class="fa-regular fa-circle-right"> <span class="font-medium"> Skills</span></i>
                    <i class="fa-regular fa-circle-right"> <span class="font-medium"> Education</span></i>
                    <i class="fa-regular fa-circle-right"> <span class="font-medium"> Work</span></i>
                    <i class="fa-regular fa-circle-right"> <span class="font-medium"> Experience</span></i>
                
               
            </div>
        </div>
        </div>
        <div class="col">
          <div class="p-3 ">
           <div class="header">
            <h1 class="text-2xl">
                Contact Infor
            </h1>
           </div>
           <div class="Contact-infor ml-5">
                
                <i class="fa-solid fa-phone" style="color: #74C0FC;"><span class=" font-medium"> +855 99 654 752</span></i>
                <i class="fa-solid fa-envelope" style="color: #74C0FC;"><span class="font-medium"> houtkysopanha69@gmail.com</span></i>
                <i class="fa-solid fa-map" style="color: #74C0FC;"><span class="font-medium"> Dangkor, Phnom Penh </span></i>
                
        </div>
        <div class="social-menu ml-4">
  <ul>
    <li>
      <a href="https://github.com/sanketbodke" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/imsanketbodke/" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </li>
    <li>
      <a href="https://codepen.io/sanketbodke" target="_blank" aria-label="CodePen">
        <i class="fab fa-codepen"></i>
      </a>
    </li>
  </ul>
</div>
</div>
        </div>
      </div>
    </div>
    <hr class="p-3 m-0">
    <div class="copyright text-center">
        <p>Design by Heart | Houtkysopanha | Portfolio @2024</p>
    </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterPage',
}
</script>
<style scoped>
.main-footer {
    background-color: #3f3f46;
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
}
.social-menu {
  margin-top: 20px; /* Adds some spacing from the top */
}

.social-menu ul {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.social-menu ul li {
  margin: 0 10px; /* Adjust spacing between icons */
}
li a{
    text-decoration: none;
} 

.social-menu ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
.social-menu ul li a i{
    margin: 0px 10px;
}
.social-menu ul li a:hover {
  transform: scale(1.1); /* Slightly enlarges the icon on hover */
}

.social-menu ul li a i {
  color: #3f3f46; /* Default color for icons */
  font-size: 24px;
  transition: color 0.3s;
}

.social-menu ul li a:hover i {
  color: #fff; /* Changes icon color to white on hover */
}

.social-menu ul li:nth-child(1) a:hover {
  background-color: #333; /* GitHub */
}

.social-menu ul li:nth-child(2) a:hover {
  background-color: #e4405f; /* Instagram */
}

.social-menu ul li:nth-child(3) a:hover {
  background-color: #0077b5; /* LinkedIn */
}

.social-menu ul li:nth-child(4) a:hover {
  background-color: #000; /* CodePen */
}
</style>