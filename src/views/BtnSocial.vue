<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="rounded-social-buttons">
  <a class="social-button facebook" href="https://www.facebook.com/houtkyso.panha.9/" target="_blank"><i class="fab fa-facebook-f"></i></a>
  |
  <a class="social-button instagram" href="https://t.me/houtKysopanha" target="_blank"><i class="fab fa-telegram"></i></a>
  |
  <a class="social-button twitter" href="https://www.linkedin.com/in/hout-ky-sopanha-8597852ba/" target="_blank"><i class="fab fa-linkedin"></i></a>
  |
  <a class="social-button youtube" href="https://www.instagram.com/houtkysopanha/" target="_blank"><i class="fab fa-instagram"></i></a> 
  

</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnSocial",
};
</script>

<style scoped lang="scss">
textarea {
  resize: none;
}

.text {
  color: white;
  font-size: 10px;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-30%, -30%);
  -ms-transform: translate(-30%, -30%);
  white-space: nowrap;
}

.svg-inline--fa {
  vertical-align: -0.1em;
}

.rounded-social-buttons {
  text-align: center;
}

.rounded-social-buttons .social-button {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 3rem;
  height: 3.1rem;
  border: 0.1rem solid transparent;
  padding: 0;
  text-decoration: none;
  text-align: center;
  color: #fefefe;
  font-size: 1.5625rem;
  font-weight: normal;
  line-height: 2em;
  border-radius: 1.6875rem;
  transition: all 0.5s ease;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
}

.rounded-social-buttons .social-button:hover,
.rounded-social-buttons .social-button:focus {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.rounded-social-buttons .fa-twitter,
.fa-facebook-f,
.fa-linkedin,
.fa-youtube,
.fa-instagram {
  font-size: 25px;
}

.rounded-social-buttons .social-button.facebook {
  background: #3b5998;
}

.rounded-social-buttons .social-button.facebook:hover,
.rounded-social-buttons .social-button.facebook:focus {
  color: #3b5998;
  background: #fefefe;
  border-color: #3b5998;
}

.rounded-social-buttons .social-button.twitter {
  background: #55acee;
}

.rounded-social-buttons .social-button.twitter:hover,
.rounded-social-buttons .social-button.twitter:focus {
  color: #55acee;
  background: #fefefe;
  border-color: #55acee;
}

.rounded-social-buttons .social-button.linkedin {
  background: #007bb5;
}

.rounded-social-buttons .social-button.linkedin:hover,
.rounded-social-buttons .social-button.linkedin:focus {
  color: #007bb5;
  background: #fefefe;
  border-color: #007bb5;
}

.rounded-social-buttons .social-button.youtube {
  background: #bb0000;
}

.rounded-social-buttons .social-button.youtube:hover,
.rounded-social-buttons .social-button.youtube:focus {
  color: #bb0000;
  background: #fefefe;
  border-color: #bb0000;
}

.rounded-social-buttons .social-button.instagram {
  background: #125688;
}

.rounded-social-buttons .social-button.instagram:hover,
.rounded-social-buttons .social-button.instagram:focus {
  color: #125688;
  background: #fefefe;
  border-color: #125688;
}

.rounded-social-buttons .social-button.rss {
  background: #ee802f;
}

.rounded-social-buttons .social-button.rss:hover,
.rounded-social-buttons .social-button.rss:focus {
  color: #ee802f;
  background: #fefefe;
  border-color: #ee802f;
}

</style>
