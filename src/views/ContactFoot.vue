<template>
  <div class="btn-wrap group relative flex justify-center items-center overflow-hidden cursor-pointer w-60 sm:w-64 h-14 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
    <span class="absolute z-10 w-full h-full rounded-full flex justify-center items-center text-lg sm:text-xl font-bold tracking-wide text-white bg-gradient-to-r from-blue-600 to-purple-700 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-x-full">
      Contact Me
    </span>

    <div class="social-icons-container absolute flex justify-around items-center w-full h-full rounded-full bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-500 ease-in-out">
      <a href="https://www.facebook.com/houtkyso.panha.9/" target="_blank" rel="noopener noreferrer" class="social-icon facebook">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/houtkysopanha/" target="_blank" rel="noopener noreferrer" class="social-icon instagram">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="https://t.me/houtKysopanha" target="_blank" rel="noopener noreferrer" class="social-icon telegram">
        <i class="fa-brands fa-telegram"></i>
      </a>
      <a href="https://www.linkedin.com/in/hout-ky-sopanha-8597852ba/" target="_blank" rel="noopener noreferrer" class="social-icon linkedin">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="tel:+85599654752" target="_blank" rel="noopener noreferrer" class="social-icon phone">
        <i class="fa-solid fa-phone"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactFoot",
};
</script>

<style scoped>
/* Main button wrapper */
.btn-wrap {
  background-color: #3b82f6; /* Fallback color for initial state */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(59, 130, 246, 0.3); /* Subtle border */
  /* Tailwind handles: transition-all duration-300 ease-in-out hover:scale-105 */
}

/* "Contact Me" Text Styling */
span {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for the text pill */
}

/* Social Icons Container */
.social-icons-container {
  padding: 0 1rem; 
  /*
  The key change here:
  Initially, the text `span` is OVER the icons and is opaque.
  On hover, the `span` becomes transparent and slides away,
  revealing this `social-icons-container` which is always opaque here.
  */
  opacity: 1; /* Ensure this container is always opaque. It's hidden by the `span` initially. */
  transform: translateX(0); /* Ensure it's not off-screen initially */
  transition: opacity 0.5s ease-in-out; /* Smooth transition for its own opacity (if used) */
}

/* Individual Social Icon Styling */
.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; /* Fixed size for touch target */
  height: 40px;
  border-radius: 50%; /* Circular background */
  background-color: rgba(255, 255, 255, 0.1); /* Subtle background for icons */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* Icons start off-scale and hidden, then transition in */
  transform: scale(0); /* Start completely hidden/zero scale */
  opacity: 0; /* Start completely transparent */
}

/* Specific icon colors (directly on the <i> tag) */
.social-icon.facebook i { color: #18629a; }
.social-icon.instagram i { color: #c31d1d; }
.social-icon.telegram i { color: #74c0fc; }
.social-icon.linkedin i { color: #327bb3; }
.social-icon.phone i { color: #28a745; }

/* Icon visibility and animation on group hover */
.btn-wrap:hover .social-icons-container .social-icon {
  opacity: 1; /* Fade in to full visibility */
  transform: scale(1); /* Scale up to normal size */
}

/* Staggered animation for icons */
/* The base transition is 0.3s, so delays stack on top of that */
.btn-wrap:hover .social-icons-container .social-icon:nth-child(1) { transition-delay: 0.1s; }
.btn-wrap:hover .social-icons-container .social-icon:nth-child(2) { transition-delay: 0.15s; }
.btn-wrap:hover .social-icons-container .social-icon:nth-child(3) { transition-delay: 0.2s; }
.btn-wrap:hover .social-icons-container .social-icon:nth-child(4) { transition-delay: 0.25s; }
.btn-wrap:hover .social-icons-container .social-icon:nth-child(5) { transition-delay: 0.3s; }

.social-icon i {
  font-size: 1.5rem; /* Icon size */
  transition: transform 0.2s ease; /* Transition for individual icon hover */
  
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Slightly brighter background on icon hover */
  transform: scale(1.1); /* Pop effect on individual icon hover */
}

/* --- Responsive adjustments --- */
@media (max-width: 640px) {
  .btn-wrap {
    width: 200px;
    height: 50px;
  }
  span {
    font-size: 1rem;
  }
  .social-icon {
    width: 35px;
    height: 35px;
  }
  .social-icon i {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .btn-wrap {
    width: 180px;
    height: 45px;
  }
  span {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  .social-icon {
    width: 30px;
    height: 30px;
  }
  .social-icon i {
    font-size: 1rem;
  }
}
</style>