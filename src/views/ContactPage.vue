<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter">
    <AppToast />
    <header class="mb-10 text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-400 tracking-tight leading-tight mb-4 animate-fade-in-down">
        &lt; / <span class="border-b-4 border-indigo-300 pb-1">Get</span>In Touch &gt;
      </h1>
      <p class="text-gray-400 text-lg sm:text-xl animate-fade-in-up">Let's connect and build something amazing.</p>
    </header>

    <div class="w-full max-w-6xl mx-auto bg-gray-800 bg-opacity-80 rounded-2xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg border border-gray-700 animate-zoom-in">
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-2/5 p-8 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
          <img src="../assets/contact.png" alt="Contact" class="w-full max-w-sm rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div class="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
          <div class="mb-8 text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-indigo-300 mb-3">We'd love to hear from you!</h2>
            <p class="text-gray-300 text-base sm:text-lg leading-relaxed">Fill out the form below and we'll get back to you shortly.</p>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <input
                class="w-full px-5 py-3 rounded-xl bg-gray-700 border-2 border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-30 transition duration-300"
                type="text"
                v-model="formData.name"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                class="w-full px-5 py-3 rounded-xl bg-gray-700 border-2 border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-30 transition duration-300"
                type="email"
                v-model="formData.email"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <input
                class="w-full px-5 py-3 rounded-xl bg-gray-700 border-2 border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-30 transition duration-300"
                type="tel"
                v-model="formData.phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <textarea
                class="w-full px-5 py-3 rounded-xl bg-gray-700 border-2 border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-30 transition duration-300 resize-y min-h-[120px]"
                v-model="formData.message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <div class="text-center pt-4">
              <button
                type="submit"
                class="px-8 py-3 rounded-xl text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50"
                :disabled="sending"
              >
                {{ sending ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { useToast } from 'primevue/usetoast';
// Make sure you have AppToast component imported if it's custom
// import AppToast from '@/components/AppToast.vue'; // Example path

export default {
  name: "ContactPage",
  // components: { AppToast }, // Uncomment if AppToast is a custom component
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      sending: false,
      toast: null,
    };
  },
  mounted() {
    this.toast = useToast();
    // Initialize AOS if you are using it
    // if (window.AOS) {
    //   window.AOS.init();
    // }
  },
  methods: {
    async handleSubmit() {
      this.sending = true;
      try {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });

        await emailjs.send(
          'service_cqvewto', // Replace with your EmailJS Service ID
          'template_az9zl7k', // Replace with your EmailJS Template ID
          {
            name: this.formData.name,
            time: timeString,
            email: this.formData.email,
            phoneNumber: this.formData.phone,
            message: this.formData.message,
          },
          'klvWgZVaF-d2hJHUr' // Replace with your EmailJS Public Key
        );
        this.toast.add({ severity: 'success', summary: 'Success', detail: 'Your message has been sent!', life: 4000 });
        this.resetForm();
      } catch (error) {
        this.toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message. Please try again.', life: 4000 });
        console.error(error);
      }
      this.sending = false;
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
/*
  You would typically put these in a global CSS file or your main Tailwind config
  if you want to use custom animations or fonts.
  For simplicity, I'm keeping them here, but Tailwind's philosophy is
  to use utility classes directly in the template.
*/
.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Custom animations if you still want them and are not using AOS */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.2s; /* Delay for sequence */
}

.animate-zoom-in {
  animation: zoomIn 0.8s ease-out forwards;
  animation-delay: 0.4s; /* Delay for sequence */
}

</style>