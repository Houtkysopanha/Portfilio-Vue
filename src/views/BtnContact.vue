<template>
    <div class="wrapper">
      <div class="link_wrapper">
        <a href="#">Contact Me</a>
        <div class="icon">
            <i class="fa-brands fa-telegram"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BtnContacts',
  };
  </script>
  
  <style scoped>
  .link_wrapper {
    position: relative;
    display: inline-block;
  }
  
  a {
    display: block;
    width: 250px;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    text-decoration: none;
    background: #333;
    border-radius: 30px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 3px solid #333;
    transition: all 0.35s;
  }
  
  .icon {
    width: 50px;
    height: 50px;
    /* border: 3px solid transparent; */
    border-radius: 50%;
    position: absolute;
    /* transform: rotate(45deg); */
    right: -25px;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; /* Initially hidden */
    transition: all 0.35s;
  }
  
  .icon i {
    transform: rotate(-45deg);
    color: linear-gradient(to right, rgb(99, 102, 241), rgb(139, 92, 246), rgb(236, 72, 153));
    font-size: 30px;
    transition: all 0.35s;
    margin-left: 6px;
    margin-bottom: 3px;
  }
  
  .link_wrapper:hover a {
    width: 200px;
    border: 3px solid rgb(99, 102, 241);
    background: transparent;
    color: rgb(139, 92, 246);
  }
  
  .link_wrapper:hover .icon {
    border: 3px solid rgb(236, 72, 153);
    right: 58%;
    opacity: 1; 
  }
  </style>
  