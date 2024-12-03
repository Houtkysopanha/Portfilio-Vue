<template>
  <div class="main-contact">
    <header class="mb-10">
      <h1 class="text-4xl text-center">GET IN TOUCH</h1>
    </header>
    <div class="Box">
      <div class="row row-cols-1 g-0 text-center">
        <div class="col-sm-12 col-md-6 bg-box1">
          <img src="../assets/contact.png" alt="Contact" />
        </div>
        <div class="col-sm-12 p-5 col-md-6 bg-box2">
          <div class="header">
            <p class=" text-3xl">Please contact us.</p>
            <hr>
          </div>
        <form action="">
          <div class="fullname p-3">
            <input class="p-3" type="text" name="" placeholder="Full Name" id="">
          </div>
          <div class="email p-3">
            <input class="p-3" type="text" name="" placeholder="Your Email" id="">
          </div>
          <div class="phone p-3">
            <input class="p-3" type="text" name="" placeholder="Phone Number" id="">
          </div>
          <div class="comment p-3">
            <textarea class="p-3 " name="textarea" placeholder="Comment" id=""></textarea>
          </div>
           <div class="submit p-3">
            <button class="p-3 bg-slate-600" type="submit">Submit</button>
           </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // For demonstration, log the form data
      console.log("Form Submitted: ", this.formData);

      // You can send the data to an API or perform other actions here
      alert("Your message has been sent!");
      this.resetForm();
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
  background: #3f3f46;
  border-radius: 20px;
}

input{
  border-radius: 30px;
}
textarea{
  border-radius: 30px;
  width: 100%;
  height: 10vh;
}
.submit button{
  border-radius: 30px;
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
