<template>
    <section class="certifications">
      <h2>Certifications</h2>
      <div class="certifications-list">
        <div
          class="certification-card"
          v-for="certification in certifications"
          :key="certification.id"
        >
          <img
            v-if="certification.image"
            :src="certification.image"
            :alt="certification.title"
            class="certification-image"
          />
          <h3>{{ certification.title }}</h3>
          <p>{{ certification.organization }}</p>
          <p v-if="certification.issueDate">Issued: {{ certification.issueDate }}</p>
          <a v-if="certification.link" :href="certification.link" target="_blank">
            View Certificate
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "MyCettification",
    data() {
      return {
        certifications: [
          {
            id: 1,
            title: "Certified Vue.js Developer",
            organization: "Vue School",
            issueDate: "Jan 2024",
            link: "https://example.com/vue-cert",
            image: "https://example.com/vue-cert-image.png",
          },
          {
            id: 2,
            title: "Web Development Bootcamp",
            organization: "Udemy",
            issueDate: "Dec 2023",
            link: "https://example.com/udemy-cert",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .certifications {
    padding: 2rem;
    background: #f9f9f9;
  }
  
  .certifications-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .certification-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    background: white;
    width: calc(33.333% - 1rem);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .certification-card img {
    max-width: 100%;
    border-radius: 4px;
  }
  
  .certification-card h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }
  
  .certification-card p {
    margin: 0.25rem 0;
    color: #555;
  }
  
  .certification-card a {
    color: #007bff;
    text-decoration: none;
  }
  </style>
  