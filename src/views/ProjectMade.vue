<template>
  <div class="main-Project">
    <div class="title text-center mb-10">
      <h4 style=" font-size: 2.5rem;
  font-weight: 700;
  color: #38bdf8;" data-aos="fade-up"> &lt; / Project Made &gt; </h4>
    </div>
    <div class="list-project text-center">
      <div class="row">
        <div class="col">
          <div class="p-3">
            <div class="card__group" data-aos="zoom-in-up">
              <div class="card" v-for="(card, index) in cards" :key="index">
                <div class="card__image">
                  <img :src="card.imgSrc" :alt="card.alt" />
                </div>
                <div class="card__content">
                  <h1 class="font-bold text-2xl">{{ card.title }}</h1>
                  <p class="text-gray-300 mt-2">{{ card.description }}</p>
                  <a :href="card.projectLink" target="_blank" rel="noopener noreferrer" class="btn-view">
                    <i class="fa-solid fa-eye"> <span> View Project</span></i> 
                  </a>
                </div>
              </div>
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
          imgSrc: require('/src/assets/doctor.png'),
          alt: "Doctor Services",
          title: "Doctor Services",
          description: "A service platform for doctors with booking and consultation features.",
          projectLink: "https://doctor-vue.vercel.app/"
        },
        {
          imgSrc: require('/src/assets/flower-shop.png'),
          alt: "Flower Shop",
          title: "Flower Shop",
          description: "A modern online store for flowers and gifts.",
          projectLink: "https://shop-flower-one.vercel.app/"
        },
        {
          imgSrc: require('/src/assets/calculate.png'),
          alt: "Calculator",
          title: "Calculator",
          description: "A simple yet powerful calculator app for daily use.",
          projectLink: "https://calculate-vue.vercel.app/"
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
  background-color: #1a1a1a;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title h4 {
  font-size: 3rem;
  color: #f0f0f0;
  font-weight: 700;
  letter-spacing: 1px;
}

.card__group {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background-color: #2d2d2d;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
}

.card__image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 1rem;
  background-color: #f4f6ff;
}

.card__image img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card__image img {
  transform: scale(1.1);
}

.card__content {
  color: white;
  text-align: left;
  padding-top: 1rem;
}

.card__content h1 {
  font-size: 1.5rem;
  color: #ff8a00;
}

.card__content p {
  font-size: 1rem;
  color: #cccccc;
  margin: 1rem 0;
}

.card__content a {
  color: white;
  background-color: #ff8a00;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.card__content a:hover {
  background-color: #ff6a00;
}

.card__content a i {
  margin-right: 0.5rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .card__content h1 {
    font-size: 1.25rem;
  }

  .card__content p {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .title h4 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .card__group {
    grid-template-columns: 1fr;
  }
}
</style>
