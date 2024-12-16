<template>
  <div class="container">

    <div id="social-platforms" style="display: flex;">

<a class="btn btn-icon btn-facebook" href="https://www.facebook.com/houtkyso.panha.9/" target="_blank"> <i class="fa-brands fa-facebook"></i><span>Facebook</span></a>
<a class="btn btn-icon btn-twitter" href="https://www.linkedin.com/in/hout-ky-sopanha-8597852ba/" target="_blank"> <i class="fa-brands fa-linkedin"></i><span>LinkedIn</span></a>
<a class="btn btn-icon btn-googleplus" href="tel: +855 99 654 752" target="_blank"><i class="fa-solid fa-phone"></i><span>Call</span></a>
<a class="btn btn-icon btn-pinterest" href="https://www.instagram.com/houtkysopanha/" target="_blank"><i class="fa-brands fa-instagram"></i><span>instagram</span></a>
<a class="btn btn-icon btn-linkedin" href="https://wa.me/099654752" target="_blank"><i class="fa-brands fa-square-whatsapp"></i><span>Whatsapp</span></a>
</div>



  </div>
</template>

<script>
export default {
  name: "BtnSocial",
};
</script>

<style scoped lang="scss">



.btn {
  clear:both;
  white-space:nowrap;
  font-size:.4em;
  display:flex;
  border-radius:5px;
  // box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.35);
  // margin:2px;
  -webkit-transition:all .5s;
  -moz-transition:all .5s;
  transition:all .5s;
  // overflow:hidden
}

.btn:hover {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.45);
}

.btn:focus {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.4);
}

.btn > span,.btn-icon > i {
  float:left;
  padding:13px;
  -webkit-transition:all .5s;
  -moz-transition:all .5s;
  transition:all .5s;
  line-height:1em
}

.btn > span {
  padding:14px 18px 16px;
  white-space:nowrap;
  color:#FFF;
  background:#b8b8b8
}

.btn:focus > span {
  background:#9a9a9a
}

.btn-icon > i {
  border-radius:5px 0 0 5px;
  position:relative;
  width:13px;
  text-align:center;
  font-size:1.25em;
  color:#fff;
  background:#212121
}

.btn-icon > i:after {
  content:"";
  border:8px solid;
  border-color:transparent transparent transparent #222;
  position:absolute;
  top:13px;
  right:-15px
}

.btn-icon:hover > i,.btn-icon:focus > i {
  color:#FFF
}

.btn-icon > span {
  border-radius:0 5px 5px 0
}

/*Facebook*/
.btn-facebook:hover > i,.btn-facebook:focus > i {
  color:#3b5998
}

.btn-facebook > span {
  background:#3b5998
}

/*Twitter*/
.btn-twitter:hover > i,.btn-twitter:focus > i {
  color:#55acee
}

.btn-twitter > span {
  background:#55acee
}

/*Google*/
.btn-googleplus:hover > i,.btn-googleplus:focus > i {
  color:#dd4b39
}

.btn-googleplus > span {
  background:#dd4b39
}

/*Pinterest*/
.btn-pinterest:hover > i,.btn-pinterest:focus > i {
  color:#cb2028
}

.btn-pinterest > span {
  background:#cb2028
}

/*LinkedIn*/
.btn-linkedin:hover > i,.btn-linkedin:focus > i {
  color:#007bb6
}

.btn-linkedin > span {
  background:#007bb6
}

/* Responsive Styles */
@media (max-width: 768px) {
  #social-platforms {
    flex-direction: column; /* Stack buttons vertically */
    align-items: start; /* Center buttons */
  }

  .btn {
    width: 30%; /* Full-width buttons */
    justify-content: start;
    align-items: start; /* Center align text/icon */
  }

  .btn > span {
    font-size: 0.9em; /* Slightly smaller font */
    padding: 10px 12px;
  }

  .btn-icon > i {
    font-size: 1em; /* Reduce icon size */
  }
}

@media (max-width: 468px) {
  .btn {
    font-size: 0.8em; /* Reduce button text size */
  }

  .btn > span {
    padding: 8px 10px;
  }

  .btn-icon > i {
    font-size: 0.9em;
  }
}
</style>
