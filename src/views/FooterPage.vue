<template>
  <footer class="main-footer">
    <div class="container text-center py-5">
      <div class="row text-start row-cols-1 row-cols-lg-3 g-4">
        <!-- About Section -->
        <div class="col">
          <h2 class="footer-title">Panha Portfolio</h2>
          <p class="footer-text">
            Thank you for visiting my personal portfolio website. Contact me via my social channels.
          </p>
        </div>
        
        <!-- Quick Links Section -->
        <div class="col">
          <h2 class="footer-title">Quick Links</h2>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Home</a></li>
            <li><a href="#" class="footer-link">About Me</a></li>
            <li><a href="#" class="footer-link">Skills</a></li>
            <li><a href="#" class="footer-link">Education</a></li>
            <li><a href="#" class="footer-link">Work</a></li>
            <li><a href="#" class="footer-link">Experience</a></li>
          </ul>
        </div>
        
        <!-- Contact Info Section -->
        <div class="col">
          <h2 class="footer-title">Contact Info</h2>
          <ul class="contact-info">
            <li><i class="fa-solid fa-phone"></i> +855 99 654 752</li>
            <li><i class="fa-solid fa-envelope"></i> houtkysopanha69@gmail.com</li>
            <li><i class="fa-solid fa-map-marker-alt"></i> Dangkor, Phnom Penh</li>
          </ul>
          <!-- Social Icons -->
         <ContactFoot />
        </div>
      </div>
    </div>
    <hr>
    <div class="copyright text-center py-3">
      <p>Design by Heart | Houtkysopanha | Portfolio ©2024</p>
    </div>
  </footer>
</template>

<script>
import ContactFoot from './ContactFoot.vue';
export default {
  components: { ContactFoot },
  name: 'FooterPage',
};
</script>

<style scoped>
/* Footer Base Styling */
.main-footer {
  background-color: #3f3f46;
  color: #ffffff;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #74c0fc;
}

.footer-text,
.footer-links li,
.contact-info li {
  font-size: 0.9rem;
  line-height: 1.8;
}

.footer-links,
.contact-info {
  list-style: none;
  padding: 0;
}

.footer-links li,
.contact-info li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #74c0fc;
}

.contact-info li i {
  color: #74c0fc;
  margin-right: 0.5rem;
}

.social-icons {
  margin-top: 1rem;
}

.social-icons a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #3f3f46;
  transition: all 0.3s;
}

.social-icons a:hover {
  background-color: #74c0fc;
  color: #ffffff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-title {
    font-size: 1.25rem;
  }

  .footer-text,
  .footer-links li,
  .contact-info li {
    font-size: 0.8rem;
  }

  .social-icons a {
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
}
</style>
