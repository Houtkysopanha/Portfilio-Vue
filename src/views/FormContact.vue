<template>
  <div>
    <!-- Sticky Circular Button with Icon -->
    <button class="contact-button" @click="openForm">
      <i class="fas fa-envelope"></i>
    </button>

    <!-- Modal for Contact Form -->
    <transition name="modal" @after-leave="afterLeave">
      <div v-if="formVisible" class="contact-form-modal">
        <h3 class="form-title">Contact Us</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              class="input-field"
              type="text"
              id="username"
              v-model="formData.username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              class="input-field"
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              class="input-field"
              id="message"
              v-model="formData.message"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <div class="form-actions">
            <button class="submit-button" type="submit">Send</button>
            <button class="close-button" type="button" @click="closeForm">Close</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

  
<script>
export default {
  name: "ContactForm",
  data() {
    return {
      formVisible: false,
      formData: {
        username: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    openForm() {
      this.formVisible = true;
    },
    closeForm() {
      this.formVisible = false;
    },
    submitForm() {
      console.log('Form submitted:', this.formData);
      this.closeForm();
    },
    afterLeave() {
      this.formVisible = false;
    },
  },
};
</script>

  
<style scoped>
/* Circular Button */
.contact-button {
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #6d6875;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #4a4750;
  transform: scale(1.1);
}

.contact-button i {
  font-size: 24px;
}

/* Contact Form Modal */
.contact-form-modal {
  position: fixed;
  bottom: 100px;
  left: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 300px;
  animation: slideIn 0.3s ease-out;
}

.form-title {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333333;
}

/* Form Inputs */
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #555555;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #6d6875;
}

/* Form Buttons */
.form-actions {
  display: flex;
  justify-content: space-between;
}

.submit-button,
.close-button {
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.submit-button {
  background-color: #6d6875;
  color: white;
}

.submit-button:hover {
  background-color: #4a4750;
}

.close-button {
  background-color: #dddddd;
  color: #333333;
}

.close-button:hover {
  background-color: #bbbbbb;
}

/* Animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
