<template>
  <div class="main-contact">
    <header>
      <h1 class="text-4xl text-center">
        GET IN TOUCH
      </h1>
    </header>
    <div class="Box">
      <div class="row row-cols-1 g-0 text-center">
        <div class="col-sm-12 col-md-6 bg-box1">
          <img src="../assets/contact.png" alt="Contact" />
        </div>
        <div class="col-sm-12 col-md-6 bg-box2">
          <form class="form" @input="validateInput">
            <div class="section" :class="{ invalid: errors.name }">
              <input
                class="input"
                type="text"
                name="name"
                id="name"
                v-model="formData.name"
                placeholder="Your name"
                required
              />
              <label class="label" for="name">Your name</label>
              <div class="error">{{ errors.name }}</div>
            </div>

            <div class="section" :class="{ invalid: errors.email }">
              <input
                class="input"
                type="email"
                name="email"
                id="email"
                v-model="formData.email"
                placeholder="Email address"
                required
              />
              <label class="label" for="email">Email address</label>
              <div class="error">{{ errors.email }}</div>
            </div>

            <div class="section" :class="{ invalid: errors.phone }">
              <input
                class="input"
                type="text"
                name="phone"
                id="phone"
                v-model="formData.phone"
                placeholder="Phone"
                required
              />
              <label class="label" for="phone">Phone</label>
              <div class="error">{{ errors.phone }}</div>
            </div>

            <div class="section" :class="{ invalid: errors.textarea }">
              <textarea
                class="input"
                name="textarea"
                id="textarea"
                v-model="formData.textarea"
                placeholder="Comment"
                rows="4"
                required
              ></textarea>
              <label class="label" for="textarea">Comment</label>
              <div class="error">{{ errors.textarea }}</div>
            </div>

            <input class="input submit" type="submit" value="Submit" @click.prevent="submitForm" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    name: 'ContactPage',
    data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        textarea: '',
      },
      errors: {
        name: '',
        email: '',
        phone: '',
        textarea: '',
      },
    };
  },
  methods: {
    validateInput(event) {
      const { name, validationMessage } = event.target;
      this.errors[name] = validationMessage;
    },
    submitForm() {
      if (Object.values(this.errors).some((error) => error !== '') || 
          Object.values(this.formData).some((field) => field === '')) {
        alert('Please fix the errors before submitting.');
      } else {
        alert('Form submitted successfully!');
        console.log(this.formData); // Process form data as needed
      }
    },
  },
}
</script>
<style scoped>
/* Main Container */
.main-contact {
  background: black;
  width: 100%;
  padding: 1rem;
  margin: 0;
  margin-bottom: 50px;
}

/* Form Container */
.Box {
  max-width: 100%;
  width: 90%;
  margin: auto;
  border: 1px solid #3f3f46;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}

.bg-box1 img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.bg-box2 {
  padding: 1rem;
}

form {
  margin-top: 10px;
}

.section {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Input Fields */
.input {
  font-family: inherit;
  font-size: 1rem;
  color: inherit;
  border-radius: 7px;
  padding: 0.7rem 1rem;
  border: none;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  outline: 1px solid var(--line);
}

.input:focus {
  outline: 1px solid var(--line-active);
}

.input[type='submit'] {
  cursor: pointer;
  max-width: 200px;
}

/* Labels */
.label {
  margin: 0.5rem 0;
  text-align: left;
  width: 100%;
}

/* Responsive Adjustments */
@media screen and (min-width: 768px) {
  .Box {
    /* grid-template-columns: 1fr 1fr; */
    gap: 2rem;
  }

  form {
    margin: 0;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
