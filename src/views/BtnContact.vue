<template>
  <div class="wrapper w-50">
    <button class="button">
      <div class="bg-container">
        <div class="bg-circle"></div>
      </div>
      <div class="front">
        <span>Contact Me</span>
      </div>
    </button>
  </div>
</template>

  
<script>
export default {
  name: 'BtnContacts',
};
</script>

<style scoped>
/* Universal Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* General Button Reset */
button {
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  isolation: isolate;
}

/* Button Styling */
.button {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid hsl(0, 0%, 10%);
  border-radius: 9999rem;
  background: transparent;
  position: relative;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
  overflow: hidden; /* Prevents overflow issues */
}

/* Background Container */
.bg-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: inherit;
  position: absolute;
  inset: 0;
  z-index: -1; /* Places it behind content */
}

/* Background Circle */
.bg-circle {
  width: 150%;
  height: 150%; /* Replacing aspect-ratio for broader compatibility */
  background: rgb(236, 72, 153);
  border-radius: 50%;
  position: absolute;
  transform: translate(60%, 60%);
  filter: blur(60px);
  transition: transform 500ms ease, filter 500ms ease;
}

/* Front Button Text */
.front {
  color: hsl(0deg, 0%, 60%);
  padding: 12px 24px; /* Correct padding */
  border-radius: inherit;
  transition: color 200ms ease;
}

/* Hover and Focus Effects */
.button:hover .bg-circle,
.button:focus .bg-circle {
  transform: translate(0, 0); /* Moves circle into position */
}

.button:hover .front,
.button:focus .front {
  color: hsl(0deg, 0%, 10%);
}

/* Focus-visible Outline */
.button:focus-visible {
  outline-color: white;
}
</style>
