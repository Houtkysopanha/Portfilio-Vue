<template>
    <div>
      <!-- Sticky Circular Button with Icon -->
      <button class="contact-button" @click="openForm">
        <i class="fas fa-envelope"></i> <!-- Font Awesome envelope icon -->
      </button>
  
      <!-- Modal for Contact Form -->
      <transition name="modal" @after-leave="afterLeave">
        <div v-if="formVisible" class="contact-form-modal">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label style="font-size: 12px;">
               Please send me your monthly newsletter
              </label>
            </div>
            <div class="form-group">
              <!-- <label for="name">Name:</label> -->
              <label for="username">Username:</label>
              <input class="rounded-md	" type="text" id="text" v-model="formData.username" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input class="rounded-md	" type="email" id="email" v-model="formData.email" required />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea class="rounded-md	" id="message" v-model="formData.message" required></textarea>
            </div>
            <div class="form-actions">
              <button type="submit">Send</button>
              <button type="button" @click="closeForm">Close</button>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  // import InputText from 'primevue/inputtext';
  // import FloatLabel from 'primevue/floatlabel';


  export default {
    name: "ContactForm",
    components: {
        // InputText,
        // FloatLabel
      },
    data() {
      return {
        formVisible: false,
        formData: {
          name: '',
          email: '',
          message: '',
          optin: false,
        },
      };
    },
    methods: {
      openForm() {
        console.log('Button clicked. Opening form...');
        this.formVisible = true;
        console.log('Form visible:', this.formVisible); // Debugging log
      },
      closeForm() {
        console.log('Closing form...');
        this.formVisible = false;
      },
      submitForm() {
        console.log('Form submitted with data:', this.formData);
        this.closeForm();
      },
      afterLeave() {
        // Ensure modal is fully removed after transition
        this.formVisible = false;
      }
    },
};

  </script>
  
  <style scoped>
  .contact-button {
    position: fixed;
    bottom: 0;
    left: 2%;
    background-color: #6D6875;
    color: white;
    border: none;
    padding: 16px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact-button:hover {
    transform: translateY(-50%) scale(1.05);
  }
  
  .contact-button i {
    font-size: 24px;
  }
  
  .contact-form-modal {
    position: fixed;
    bottom: 80px;
    left: 2%;
    background: #3f3f46;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 300px;
    opacity: 1;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: translateY(0);
  }
  </style>
  