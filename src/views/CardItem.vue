<template>
    <div class="card">
      <div class="card__image">
        <img :src="imageSrc" :alt="altText" />
      </div>
      <div class="card__content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <a href="#">
          Learn more
          <i class="fa-solid fa-chevron-right icon"></i>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      altText: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Paste the CSS specific to the card component here */
  .card {
    --var-opacity: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 0.5rem;
    display: grid;
    grid-template-rows: auto 38%;
    padding: 0.5rem;
    overflow: hidden;
    transition: grid-template-rows 300ms ease-in-out;
    box-shadow: 0 16px 12px -8px #1e1e1e1e;
  }
  
  .card__image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: inherit;
    background-color: #f4f6ff;
    position: relative;
  }
  
  .card__content {
    padding: 1rem;
  }
  
  .card__content h1 {
    margin-top: 0.75rem;
    font-weight: 600;
    font-size: 1.5rem;
  }
  
  .card__content p {
    margin-top: 1rem;
    font-size: 0.95rem;
    color: #777;
    line-height: 1.45rem;
  }
  
  .card__content a {
    display: flex;
    width: fit-content;
    gap: 0.25rem;
    align-items: center;
    margin-top: 1.25rem;
    text-decoration: none;
    font-weight: 600;
    color: #ad49e1;
    font-size: 0.9rem;
  }
  </style>
  