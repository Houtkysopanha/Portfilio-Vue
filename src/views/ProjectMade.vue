<template>
  <div class="main-Project">
    <div class="title text-center mb-10">
      <h4 class="text-4xl">Project Made</h4>
    </div>
    <div class="list-project text-center">
      <div class="row ">
        <div class="col">
          <div class="p-3 ">
            <div class="card__group">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <div class="card__image">
        <img :src="card.imgSrc" :alt="card.alt" />
      </div>
      <div class="card__content">
        <br>
        <h1 class=" font-bold">{{ card.title }}</h1>
        <br>
        <p>{{ card.description }}</p>
        <br>
        <a :href="card.projectLink" target="_blank" rel="noopener noreferrer">
                 <i class="fa-solid fa-eye icon"> <span> View Project</span></i>
                  
                </a>
      </div>
    </div>
  </div>
          </div>
        </div>
       
    </div>
        <!-- second row -->


      <!-- <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 d-flex justify-content-evenly ">
       
        
       
      </div> -->
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
          imgSrc: require('/src/assets/doctor.png'),
          alt: "furniture__img",
          title: "Doctor Services",
          description: "Clean lines, neutral colors, and functional forms create a serene and stylish space.",
          projectLink: "https://doctor-vue.vercel.app/" // Replace with your deployed project URL
        },
        {
          imgSrc: require('/src/assets/flower-shop.png'),
          alt: "furniture__img",
          title: "Shop-Flower",
          description: "Clean lines, neutral colors, and functional forms create a serene and stylish space.",
          projectLink: "https://shop-flower-one.vercel.app/" // Replace with your deployed project URL
        },
        {
          imgSrc: require('/src/assets/calculate.png'),
          alt: "furniture__img",
          title: "Calculate",
          description: "Clean lines, neutral colors, and functional forms create a serene and stylish space.",
          projectLink: "https://calculate-vue.vercel.app/" // Replace with your deployed project URL
        },
      ]
    };
  }
};
</script>
<style scoped>
.main-Project {
  width: 100%;
  height: auto;
  background-color: black;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: white;
}

.title h4 {
  font-size: 2rem;
}

.card__group {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 2fr); /* Default to one column */
  width: 100%;
  max-width: 1200px; /* Limit width for large screens */
  margin: 0 auto;
}

.card {
  --var-opacity: 0;
  background-color: transparent;
  border: 1.5px solid whitesmoke;
  border-radius: 0.5rem;
  display: grid;
  grid-template-rows: auto 38%;
  padding: 1rem;
  overflow: hidden;
  transition: grid-template-rows 300ms ease-in-out;
  box-shadow: 0 16px 12px -8px rgba(30, 30, 30, 0.1);
}

.card:hover {
  grid-template-rows: auto 50%;
  --var-opacity: 1;
}

.card__image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
  background-color: #f4f6ff;
}

.card__image img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.card__content {
  color: white;
  text-align: left;
}

.card__content h1 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card__content p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.card__content a {
  color: whitesmoke;
  background-color: pink;
  border-radius: 8px;
  width: 40%;
  padding: 5px;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}
.card__content a :hover{
  background-color: lightpink;
  transition: 0.3s;
}

/* .card__content a .icon {
  margin-left: 0.5rem;
} */

/* Responsive design */
@media (max-width: 1024px) {
  .card__group {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .title h4 {
    font-size: 1.75rem;
  }

  .card__content h1 {
    font-size: 1.1rem;
  }

  .card__content p {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .card__group {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .title h4 {
    font-size: 1.5rem;
  }

  .card__content h1 {
    font-size: 1rem;
  }

  .card__content p {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .card__group {
    grid-template-columns: 1fr;
  }

  .title h4 {
    font-size: 1.25rem;
  }

  .card__content h1 {
    font-size: 0.9rem;
  }

  .card__content p {
    font-size: 0.75rem;
  }

  .card__content a {
    font-size: 0.75rem;
  }
}
</style>
