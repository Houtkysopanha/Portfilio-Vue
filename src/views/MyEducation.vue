<template>
  <div class="mian-myeduc">
    <div class="container">
      <div class="title mb-10  text-center">
        <h1>&lt; / Education &gt;</h1>
      </div>
      <div class="content">
        <div class="row mb-2 ">
          <div class="col-6 p-2 col-md-4 box1">
            <div class="image">
                <img  style="height: 210px; width: 100%; border-radius: 5px;" src="../assets/High School .png" alt="">
            </div>
        </div>
          <div div class="col-md-8 p-3 box2">
            <div class="name-schol">
                <h4 class="">HIGHT SCHOOL GRADUATED</h4>
                <div class="describe">
                    <p>At TAING KRASANG HIGHT SCHOOL</p>
                    <p>2017-2019 | Graduated from Grade 9 National Education Program</p>
                    <p>2020-2023 | Graduated from Grade 12 National Education Program  </p>
                    <p class="message">Completed</p>
                </div>
            </div>
        </div>
        </div>
        <div class="row mb-2">
          <div class="col-6 p-2 col-md-4 box1">
            <div class="image">
                <img  style="height: 210px; width: 100%;" src="../assets/Logo Instinct.jpg" alt="">
            </div>
        </div>
          <div div class="col-md-8 p-3 box2">
            <div class="name-schol">
                <h4>FRONTEND DEVELOPER</h4>
            </div>
            <div class="describe">
                    <p>At Instinct Institute</p>
                    <p>Short Course</p>
                    <p>Apr,06 - Jun,22 of 2024</p>
                    <p class="message">Completed</p>
                </div>
        </div>
        </div>

        <div class="row ">
          <div class="col-6 p-2 col-md-4 box1">
            <div class="image">
                <img  style="height: 210px; width: 100%;" src="../assets/Image RUPP.webp" alt="">
            </div>
        </div>
          <div div class="col-md-8 p-3 box2">
            <div class="name-schol">
                <h4>BATCERLOR OF INFORMATION TECHNOLOGY</h4>
                <div class="describe">
                    <p>At Royal University Of Phnom Penh</p>
                    <p>Major | Computer Scient </p>
                    <p>Currently, Year2 of BATCERLOR OF INFORMATION TECHNOLOGY</p>
                    <div class="">
                      <p>2024-2028 | <span class="message">
                        Pursuing
                      </span></p>
                    
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
// import Message from 'primevue/message';
export default {
  name: "MyEducation",
  components:{
    // Message, 
  }
};
</script>
<style scoped>

.mian-myeduc {
  width: 100%;
  height: 850px;
  background: black;
}
.box1, .box2{
    background:#3f3f46 ;
    border-radius: 5px;
}
.box1{
    border-right: 4px solid black;

}
/* .describe {
    line-height: 0.7;
} */
/* .name-schol{
    margin-top: 30px;
} */
.message{
  /* border: 1px solid;  */
  width: 16%; 
  /* padding: 5px;  */
  /* text-align: center;  */
  border-radius: 5px;
  color: rgb(75, 139, 75);
  font-weight: 500;
}
</style>
