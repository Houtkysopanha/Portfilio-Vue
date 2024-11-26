<template>
    <div class="main-contact">
        <header>
            <h1 class="text-4xl text-center">
                GET IN TOUCH
            </h1>
        </header>
        <div class="Box">
            <div class="row g-0 text-center">
      <div class="col-sm-6 col-md-6 bg-box1">
        <img src="../assets/contact.png" alt="">
    </div>
      <div class="col-6 col-md-6 bg-box2 ">
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
        v-model="formData.password"
        placeholder="Password"
        required
      />
      <label class="label" for="password">Phone</label>
    </div>  
    <div class="section" :class="{ invalid: errors.textarea }">
      <input
        class="input"
        type="textarea"
        name="textarea"
        id="textarea"
        v-model="formData.textarea"
        placeholder="Comment"
        required
      />
      <label class="label" for="name">Comment</label>
      <div class="error">{{ errors.name }}</div>
    </div>

    <div class="error">{{ errors.password }}</div>
    <input class="input" type="submit" value="Submit" @click.prevent="submitForm" />
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
.main-contact {
   background: black;
   height: auto;
   width: 100%;
   padding: 0;
   margin: 0;
   margin-bottom: 50px;
}
.Box{
    text-align: center;
    width: 1400px;
    height: auto;
    border: 1px solid #3f3f46;
    margin: auto;
    border-radius: 10px;
}
.bg-box1 {
    border: 1px solid #3f3f46;
    border-radius: 10px;
}
img{
    margin: auto;
    width: 500px;
}
.bg-box2{
    margin: auto;
}
:root {
  --bg: hsla(210, 90%, 30%, 1);
  --text: rgba(255, 255, 255, 0.9);
  --line: rgba(255, 255, 255, 0.3);
  --line-active: rgba(255, 255, 255, 0.8);
  --error: hsla(0, 100%, 70%, 1);
}


form{
    margin-top: 10px;
}
.section {
  margin-bottom: 1.5rem;
  display: grid;
  align-items: center;
}

.input {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 7px;
  padding: 0.7rem 1rem;
  /* background-color: transparent; */
  border: none;
  width: 35rem;
  margin: auto;
  box-sizing: border-box;
  outline: 1px solid var(--line);
}

.input:focus {
  outline: 1px solid var(--line-active);
}

.input[type='submit'] {
  cursor: pointer;
}

.label {
  background-color: var(--bg);
  justify-self: start;
  transition-property: transform, padding, font-size;
  transition-duration: 0.3s;
  margin: 0 1rem;
  pointer-events: none;
}

.label,
.input {
  grid-column-start: 1;
  grid-row-start: 1;
}

.input:focus ~ .label,
.input:not(:placeholder-shown) ~ .label {
  transform: translateY(-124%);
  font-size: 0.8rem;
  padding-left: 0.2rem;
  padding-right: 22.2rem;
}

.section ::placeholder {
  color: transparent;
}

.invalid .input {
  outline: 1px solid var(--error);
}

.invalid .label {
  color: var(--error);
}

.error {
  margin-top: 0.5rem;
  color: var(--error);
}
</style>