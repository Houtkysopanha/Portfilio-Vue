<template>
  <div class="container">
    <div class="content">
      <div class="icon-container">
        <!-- Facebook Icon -->
        <div class="icon icon-fill">
          <a
            href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645242"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
        </div>

        <!-- Instagram Icon -->
        <div class="icon icon-enter">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>

        <!-- WhatsApp Icon -->
        <div class="icon icon-collapse">
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <!-- LinkedIn Icon -->
        <div class="icon icon-collapse">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <!-- Phone Icon -->
        <div class="icon icon-rotate">
          <a href="tel:+1234567890">
            <i class="fa fa-phone"></i>
          </a>
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
@use "sass:math";

// Variables
$icon-size: 50px;
$border-radius: 0.5; // 50% border-radius for icons
$background: #2d2c3e;
$green: #16a085;
$red: #c82647;
$orange: #eb9532;
$purple: #7e3661;
$white: #ffffff;

// General Styles
body {
  background: $background;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

.container {
  display: table;
  height: auto;
  width: 90%;
  padding-bottom: 5vh;
  margin: auto;
}

.content {
  text-align: center;
}

// Icon Container Styles
.icon-container {
  margin: 30px;
  width: 100%;
  height: $icon-size;
}

.icon {
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: $icon-size;
  height: $icon-size;
  margin: math.div($icon-size, 5);
  border-radius: math.div($icon-size * $border-radius, 1);
  overflow: hidden;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    border-radius: math.div($icon-size * $border-radius, 1);
  }

  i {
    position: relative;
    color: $white;
    font-size: math.div($icon-size, 2);
    transition: all 0.25s ease;
  }
}

// Icon Modifiers
.icon-fill {
  &::before {
    transition-duration: 0.5s;
    box-shadow: inset 0 0 0 1px $green;
  }

  &:hover::before {
    box-shadow: inset 0 0 0 $icon-size $green;
  }
}

.icon-enter {
  &::after {
    box-shadow: inset 0 0 0 1px $orange;
  }

  &::before {
    border-radius: 0;
    margin-left: -100%;
    box-shadow: inset 0 0 0 $icon-size $orange;
  }

  &:hover::before {
    margin-left: 0;
  }
}

.icon-collapse {
  &::before {
    border-radius: 0;
  }

  &:hover::before {
    box-shadow: inset 0 math.div($icon-size, 2) 0 0 $green,
      inset 0 math.div($icon-size, -2) 0 0 $green;
  }

  &::after {
    box-shadow: inset 0 0 0 1px $green;
  }
}

.icon-rotate {
  box-shadow: inset 0 0 0 1px $purple;

  &::after,
  &::before {
    border: 0px solid transparent;
  }

  &:hover::before {
    transition: border-top-width 0.3s ease, border-top-color 0.3s ease;
    border-width: $icon-size;
    border-top-color: $purple;
  }

  &:hover::after {
    transition: border-left-width 0.3s ease, border-left-color 0.3s ease;
    border-width: $icon-size;
    border-left-color: $purple;
  }

  &:hover {
    transition: background 0.001s ease 0.3s;
    background: $purple;
  }

  i {
    z-index: 1;
  }
}
</style>
