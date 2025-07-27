<template>
  <div class="main-Project">
    <header class="mb-10 text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-400 tracking-tight leading-tight mb-4 animate-fade-in-down">
        &lt; / <span class="border-b-4 border-indigo-300 pb-1">Pro</span>ject Made &gt;
      </h1>
    </header>
    <div class="list-project">
      <div class="card__group">
        <div class="card" v-for="(card, index) in cards" :key="index" data-aos="zoom-in-up">
          <div class="card__image">
            <img :src="card.imgSrc" :alt="card.alt" />
          </div>
          <div class="card__content">
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-desc">{{ card.description }}</p>
            <div class="card__actions">
              <a :href="card.projectLink" target="_blank" rel="noopener noreferrer" class="btn-view">
                <i class="fa-solid fa-eye"></i>
                <span>View Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectMade",
  data() {
    return {
      cards: [
         {
          imgSrc: require('/src/assets/ecom-clothing.png'),
          alt: "Ecommerce Web Clothing-Women",
          title: "Ecommerce Web Clothing-Women",
          description: "it about cloting women tha have a good quality and good price",
          projectLink: "https://ecom-moi-v2.vercel.app/"
        },
        {
          imgSrc: require('/src/assets/hms.png'),
          alt: "HMS",
          title: "Hospital Management System-HMS",
          description: "A comprehensive Hospital Management System for streamlined operations and patient care.",
          projectLink: "https://hms-pro-dusky.vercel.app/"
        },
        {
          imgSrc: require('/src/assets/doctor.png'),
          alt: "Doctor Services",
          title: "Doctor Services Platform",
          description: "An intuitive platform for doctors to manage appointments and consultations efficiently.",
          projectLink: "https://doctor-vue.vercel.app/"
        },
        // {
        //   imgSrc: require('/src/assets/calculate.png'),
        //   alt: "Calculator",
        //   title: "Biginer Calculator App",
        //   description: "A versatile calculator application designed for everyday calculations and complex equations.",
        //   projectLink: "https://calculate-vue.vercel.app/"
        // },
      ]
    };
  }
};
</script>

<style scoped>
.main-Project {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #121625 0%, #1a2035 100%); /* Slightly darker, richer background */
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif; /* Modern, clean font */
}

/* Header remains strong */
.main-Project header {
  margin-bottom: 3rem; /* More spacing */
}


.card__group {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Slightly smaller min-width for flexibility */
  width: 100%;
  max-width: 1280px; /* Wider max-width for larger screens */
  margin: 0 auto;
}

.card {
  background: rgba(30, 36, 56, 0.85); /* Slightly darker card background for contrast */
  border-radius: 1.5rem;
  padding: 1.8rem 1.8rem 1.5rem 1.8rem; /* Uniform padding */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Stronger, softer shadow */
  backdrop-filter: blur(12px); /* Slightly more blur */
  border: 1px solid rgba(56, 189, 248, 0.15); /* Thinner, more subtle border */
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.3s ease-in-out; /* Smoother transitions */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 440px; /* Slightly taller cards */
  position: relative;
  overflow: hidden; /* Ensures no content overflows rounded corners */
}

.card:hover {
  transform: translateY(-8px) scale(1.02); /* Slightly less aggressive scale, more subtle lift */
  box-shadow: 0 25px 50px rgba(56, 189, 248, 0.15); /* Enhanced hover shadow */
  background: linear-gradient(145deg, #28304a 60%, #38bdf8 100%); /* Adjusted hover gradient */
}

.card__image {
  width: 100%;
  height: 220px; /* Taller image area */
  overflow: hidden;
  border-radius: 1rem;
  background: #f4f6ff; /* Clean background for images */
  margin-bottom: 1.5rem; /* More spacing below image */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.05); /* Subtle inner shadow for depth */
}
.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smoother image zoom */
}
.card:hover .card__image img {
  transform: scale(1.1); /* Slightly more zoom on hover */
}

.card__content {
  width: 100%;
  text-align: left;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 1.7rem; /* Larger, more impactful title */
  font-weight: 700;
  color: #67e8f9; /* Lighter, more vibrant blue */
  margin-bottom: 0.7rem; /* More spacing */
  letter-spacing: 0.5px; /* Slightly less letter spacing */
}
.card-desc {
  font-size: 1.1rem; /* Slightly larger description font */
  color: #cbd5e1; /* Lighter gray for better readability */
  line-height: 1.6; /* Improved line height for readability */
  margin-bottom: 1.8rem; /* More spacing before button */
  flex: 1;
}

.card__actions {
  margin-top: auto; /* Pushes the button to the bottom */
  width: 100%; /* Ensure button container takes full width */
}

.btn-view {
  display: flex; /* Use flexbox for button content alignment */
  justify-content: center;
  align-items: center;
  gap: 0.75rem; /* More space between icon and text */
  background: linear-gradient(90deg, #3b82f6, #9333ea, #ec4899); /* Updated gradient colors for more vibrancy */
  color: #ffffff; /* White text for better contrast */
  font-weight: 600;
  border: none;
  border-radius: 10px; /* Slightly more rounded corners */
  padding: 0.85rem 2rem; /* More generous padding */
  font-size: 1.05rem; /* Slightly larger font size */
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Stronger initial shadow */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); /* All properties transition smoothly */
  cursor: pointer;
  width: 100%; /* Make button full width of card content */
}
.btn-view:hover {
  background: linear-gradient(90deg, #2563eb, #7e22ce, #be185d); /* Darker, more intense hover gradient */
  color: #fff;
  transform: translateY(-3px) scale(1.01); /* More pronounced lift on hover */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35); /* Stronger hover shadow */
  /* Added subtle glow effect */
  filter: brightness(1.1);
}

.btn-view i {
  font-size: 1.15rem; /* Slightly larger icon */
}

/* Media Queries remain important for responsiveness */
@media (max-width: 1024px) {
  .card-title { font-size: 1.5rem; }
  .card-desc { font-size: 1rem; }
  .card__image { height: 180px; }
  .card { min-height: 400px; }
}

@media (max-width: 768px) { /* Added a new breakpoint for tablets */
  .main-Project { padding: 2.5rem 0.5rem; }
  .card__group { gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
  .card { padding: 1.5rem 1.2rem; min-height: 380px; }
  .card__image { height: 160px; }
  .card-title { font-size: 1.3rem; }
  .card-desc { font-size: 0.95rem; margin-bottom: 1.5rem;}
  .btn-view { font-size: 0.95rem; padding: 0.7rem 1.5rem; }
}

@media (max-width: 480px) { /* Adjusted for smaller mobile screens */
  .main-Project { padding: 2rem 0.5rem; }
  .main-Project header { margin-bottom: 2rem; }
  .main-Project h1 { font-size: 3rem; } /* Keep h1 large on small screens */
  .card__group { gap: 1.5rem; grid-template-columns: 1fr; } /* Single column on very small screens */
  .card { padding: 1.5rem 1rem; min-height: auto; } /* Auto height for content flexibility */
  .card__image { height: 180px; margin-bottom: 1rem; }
  .card-title { font-size: 1.4rem; margin-bottom: 0.5rem; }
  .card-desc { font-size: 0.9rem; margin-bottom: 1rem; }
  .btn-view { font-size: 0.9rem; padding: 0.6rem 1.2rem; }
}
</style>