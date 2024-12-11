<template>
  <div class="container">
    <div class="content">
      <div class="social-btns">
        <a class="btn facebook" href="https://www.facebook.com/houtkyso.panha.9/" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a class="btn linkedin" href="https://www.linkedin.com/in/hout-ky-sopanha-8597852ba/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a class="btn phone" href="tel: +855 99 654 752">
          <i class="fa-solid fa-phone"></i>
        </a>
        <a class="btn instagram" href="https://www.instagram.com/houtkysopanha/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a class="btn whatsapp" href="https://wa.me/099654752" target="_blank">
          <i class="fa-brands fa-square-whatsapp"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnSocial",
};
</script>

<style scoped lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.social-btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.social-btns .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 24px;
  background-color: #fff;
  color: #282c34;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}

.social-btns .btn i {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.social-btns .btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  z-index: 0;
  transition: all 0.3s ease-in-out;
}

.social-btns .btn:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.social-btns .btn:hover i {
  transform: scale(1.2);
}

/* Custom button colors */
.social-btns .btn.facebook {
  background-color: #3b5998; /* Facebook blue */
  color: #fff;
}

.social-btns .btn.facebook:hover::before {
  background-color: #2d4373;
}

.social-btns .btn.linkedin {
  background-color: #0077b5; /* LinkedIn blue */
  color: #fff;
}

.social-btns .btn.linkedin:hover::before {
  background-color: #005582;
}

.social-btns .btn.phone {
  background-color: #34c759; /* Green for phone */
  color: #fff;
}

.social-btns .btn.phone:hover::before {
  background-color: #28a745;
}

.social-btns .btn.instagram {
  background: linear-gradient(45deg, #fd5949, #d6249f, #285aeb);
  color: #fff;
}

.social-btns .btn.instagram:hover::before {
  background-color: rgba(0, 0, 0, 0.2);
}

.social-btns .btn.whatsapp {
  background-color: #25d366; /* WhatsApp green */
  color: #fff;
}

.social-btns .btn.whatsapp:hover::before {
  background-color: #128c7e;
}

/* Responsive Design */
@media (max-width: 768px) {
  .social-btns {
    gap: 10px;
  }

  .social-btns .btn {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .social-btns {
    gap: 8px;
  }

  .social-btns .btn {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
}
</style>
