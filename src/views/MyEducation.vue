<template>
  <div class="mian-myeduc">
    <div class="container">
      <div class="title text-center">
        <h2>My Education</h2>
        <div class="intriduce">
        
        </div>
      </div>
      <div class="content">
        <div class="row mb-2">
          <div class="col-6 p-2 col-md-4 box1">
            <div class="image">
                <img  style="height: 200px; width: 100%;" src="../assets/High School .png" alt="">
            </div>
        </div>
          <div div class="col-md-8 p-3 box2">
            <div class="name-schol">
                <h4 class="">HIGHT SCHOOL GRADUATED</h4>
                <div class="describe">
                    <p>At TAING KRASANG HIGHT SCHOOL</p>
                    <p>2017-2019 | Graduated from Grade 9 National Education Program</p>
                    <p>2020-2023 | Graduated from Grade 12 National Education Program  </p>
                </div>
            </div>
        </div>
        </div>
        <div class="row mb-2">
          <div class="col-6 p-2 col-md-4 box1">
            <div class="image">
                <img  style="height: 200px; width: 100%;" src="../assets/Image RUPP.webp" alt="">
            </div>
        </div>
          <div div class="col-md-8 p-2 box2">
            <div class="name-schol">
                <h4>BATCERLOR OF INFORMATION TECHNOLOGY</h4>
                <div class="describe">
                    <p>At Royal University Of Phnom Penh</p>
                    <p>Major | Computer Scient </p>
                    <p>Currently, Year2 of BATCERLOR OF INFORMATION TECHNOLOGY</p>
                    <p>2024-2028</p>
                </div>
            </div>
        </div>
        </div>


        <div class="row">
          <div class="col-6 p-2 col-md-4 box1">
            <div class="image">
                <img  style="height: 200px; width: 100%;" src="../assets/Logo Instinct.jpg" alt="">
            </div>
        </div>
          <div div class="col-md-8 p-2 box2">
            <div class="name-schol">
                <h4>WEBDEVELOPER OF INSTINCT INSTITUTE</h4>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyEducation",
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
}
.box1{
    border-right: 4px solid black;
}
.describe {
    line-height: 0.7;
}
.name-schol{
    margin-top: 30px;
}
</style>
