<template>
  <div class="main-contact" style="margin-top: 65px;">
    <header class="mb-10">
      <h1 style=" font-size: 2.5rem;
  font-weight: 700;
  color: #38bdf8;text-align: center;"> &lt; / GET IN TOUCH &gt; </h1>
    </header>
    <div class="box">
      <div class="row g-0">
        <!-- Left Side (Image) -->
        <div class="col-md-6 col-sm-12 bg-box1">
          <img src="../assets/contact.png" alt="Contact" />
        </div>
        <!-- Right Side (Form) -->
        <div class="col-md-6 col-sm-12 bg-box2">
          <div class="form-header mb-5">
            <h2 class="text-2xl text-center text-white font-semibold">We'd love to hear from you!</h2>
            <p class="text-center text-gray-300">Fill out the form below and we’ll get back to you shortly.</p>
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="form-group mb-4">
              <input 
                class="form-control" 
                type="text" 
                v-model="formData.name" 
                placeholder="Full Name" 
                required />
            </div>
            <div class="form-group mb-4">
              <input 
                class="form-control" 
                type="email" 
                v-model="formData.email" 
                placeholder="Your Email" 
                required />
            </div>
            <div class="form-group mb-4">
              <input 
                class="form-control" 
                type="tel" 
                v-model="formData.phone" 
                placeholder="Phone Number" 
                required />
            </div>
            <div class="form-group mb-4">
              <textarea 
                class="form-control" 
                v-model="formData.message" 
                placeholder="Your Message" 
                rows="5" 
                required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form Submitted: ", this.formData);
      alert("Your message has been sent successfully!");
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
/* Main Container */
.main-contact {
  background: linear-gradient(135deg, #1e293b, #334155);
  color: #fff;
  padding: 2rem 1rem;
}

/* Box Container */
.box {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Left Side (Image) */
.bg-box1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Right Side (Form) */
.bg-box2 {
  background: #1f2937;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-header {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #4b5563;
  background: #374151;
  color: #fff;
  outline: none;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #60a5fa;
  background: #1f2937;
}

.submit-btn {
  background: #2563eb;
  color: #fff;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.submit-btn:hover {
  background: #1d4ed8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .bg-box2 {
    padding: 1.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }
}
</style>

