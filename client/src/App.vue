<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("app", ["run_myWelcome"])
  },
  mounted() {
    this.run_myWelcome();
  }
};
</script>

<style lang="scss">
// import google fonts
@import url("https://fonts.googleapis.com/css?family=Mukta:800|Mukta:400|Mukta:100|Expletus+Sans&display=swap");

//@import ".";
// import bootstrap
@import "../node_modules/bootstrap/scss/functions.scss";
@import "../node_modules/bootstrap/scss/variables.scss";
$grid-breakpoints: (
  xs: 0,
  sm: 600px,
  md: 800px,
  lg: 1000px,
  xl: 1280px
);

$container-max-widths: (
  sm: 600px,
  md: 800px,
  lg: 1000px,
  xl: 1220px
);
@import "../node_modules/bootstrap/scss/bootstrap.scss";
// GRID
div[class*="container"] {
  // border: 3px solid cyan;
}
div[class*="row"] {
  // border: 2px solid purple;
}
div[class*="col"] {
  // border: 1px solid rgb(0, 0, 0);
}

#q-app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// FONT
.font-Armata {
  font-family: "Armata", sans-serif;
}
.font-Khula-400 {
  font-family: "Khula", sans-serif;
  font-weight: 400;
}
.font-Major-Mono-Display {
  font-family: "Major Mono Display", monospace;
}
.font-Khula-800 {
  font-family: "Khula", sans-serif;
  font-weight: 800;
}
.font-Khula-600 {
  font-family: "Khula", sans-serif;
  font-weight: 600;
}
.font-Expletus {
  font-family: "Expletus Sans", cursive;
}

// FONT SIZE
.font-size-2vh {
  font-size: 2vh;
}
.font-size-12 {
  font-size: 12px;
}
.font-size-14 {
  font-size: 14px;
}
.font-size-16 {
  font-size: 16px;
}
.font-size-18 {
  font-size: 18px;
}
.font-size-20 {
  font-size: 20px;
}
.font-size-22 {
  font-size: 22px;
}
.font-size-25 {
  font-size: 25px;
}
.font-size-32 {
  font-size: 32px;
}
.font-size-35 {
  font-size: 35px;
}
.font-size-42 {
  font-size: 42px;
}

// TEXT ALIGN
.text-align-center {
  text-align: center;
}

// COLOR
.color-snow {
  color: snow;
}
.color-dark {
  color: rgb(3, 8, 8);
}
.color-dark-transparent {
  color: rgba(0, 0, 0, 0.7);
}
.color-1 {
  color: #009688;
}
.color-2 {
  color: #202630;
}
.color-3 {
  color: #57575c;
}
.color-4 {
  color: #ffffff;
}
.color-5 {
  color: #6f8498;
}
.color-6 {
  color: #ff5722;
}
.color-7 {
  color: #69747d;
}
.color-8 {
  color: #e3e4e4;
}
.color-9 {
  color: #797979;
}
.color-10 {
  color: #607d8b;
}
.color-11 {
  color: rgb(255, 255, 0);
}
.color-12 {
  color: rgba(96, 125, 139, 0.7);
}
.color-13 {
  color: #b3d7ff;
}
.color-14 {
  color: #141a1e;
}
.color-15 {
  color: #6f8498b3;
}
.color-16 {
  color: #adb5bd;
}
.color-17 {
  color: #ffc107;
}

// BACKGROUND COLOR
.b-color-snow-transparent {
  background-color: rgba(0, 0, 0, 0.3);
}
.b-color-dark-transparent {
  background-color: rgba(0, 0, 0, 0.7);
}
.b-color-snow {
  background-color: snow;
}
.backgroundColor-none {
  background-color: transparent;
}
.backgroundColor-1 {
  background-color: rgb(0, 150, 136);
}
.backgroundColor-2 {
  background-color: #202630;
}
.backgroundColor-3 {
  background-color: #57575c;
}
.backgroundColor-4 {
  background-color: #ffffff7c;
}
.backgroundColor-5 {
  background-color: #6f8498;
}
.backgroundColor-6 {
  background-color: #ff5722;
}
.backgroundColor-7 {
  background-color: #69747d;
}
.backgroundColor-8 {
  background-color: #e3e4e4;
}
.backgroundColor-9 {
  background-color: #797979;
}
.backgroundColor-10 {
  background-color: #607d8b;
}
.backgroundColor-11 {
  background-color: rgb(255, 255, 0);
}
.backgroundColor-12 {
  background-color: rgba(96, 125, 139, 0.5);
}
.backgroundColor-13 {
  background-color: #b3d7ff;
}
.backgroundColor-14 {
  background-color: #141a1e;
}
.backgroundColor-15 {
  background-color: #6f8498b3;
}
.backgroundColor-16 {
  background-color: #adb5bd;
}
.backgroundColor-17 {
  background-color: #ffc107;
}

// WIDTH
.width-400 {
  width: 400px;
}
.width-384 {
  width: 384px;
}
.width-350 {
  width: 350px;
}
.width-380 {
  width: 380px;
}
.width-35 {
  width: 35px;
}
.width-85 {
  width: 85px;
}
// min-width
.min-width-250 {
  min-width: 250px;
}
// max-width
.max-width-400 {
  max-width: 400px;
}
.max-width-384 {
  max-width: 384px;
}
.max-width-960 {
  max-width: 960px;
}
.max-width-1300 {
  max-width: 1300px;
}

// HEIGHT
.height-10vh {
  height: 5vh;
}
.height-20vh {
  height: 20vh;
}
.height-36vh {
  height: 36vh;
}
.height-41vh {
  height: 41vh;
}
.height-45vh {
  height: 45vh;
}
.height-50vh {
  height: 50vh;
}
.height-60vh {
  height: 60vh;
}
.height-100vh {
  height: 100vh;
}
.height-1 {
  height: 1px;
}
.height-20 {
  height: 20px;
}
.height-26 {
  height: 26px;
}
.height-45 {
  height: 45px;
}
.height-40 {
  height: 40px;
}
.height-42 {
  height: 42px;
}
.height-177 {
  height: 177px;
}
.height-200 {
  height: 200px;
}
.height-55 {
  height: 55px;
}
.height-65 {
  height: 65px;
}
.height-80 {
  height: 80px;
}
.height-85 {
  height: 85px;
}
.height-142 {
  height: 142px;
}
.height-587 {
  height: 587px;
}
// min-height
.min-height-45 {
  min-height: 45px;
}
.min-height-65 {
  min-height: 65px;
}
.min-height-85 {
  min-height: 85px;
}
.min-height-105 {
  min-height: 105px;
}
.min-height-121 {
  min-height: 121px;
}
.min-height-150 {
  min-height: 150px;
}
.min-height-667 {
  min-height: 667px;
}

//OVERFLOW
.overflow-overlay {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}

// PADDING
// padding-none
.padding-none {
  padding: 0;
}
.padding-all-5 {
  padding: 5px;
}
.padding-right-none {
  padding-right: 0;
}
.padding-right-8 {
  padding-right: 8px;
}
// padding-horizontal
.padding-horizontal-0 {
  padding-left: 0;
  padding-right: 0;
}
.padding-horizontal-3 {
  padding-left: 3px;
  padding-right: 3px;
}
.padding-horizontal-5 {
  padding-left: 5px;
  padding-right: 5px;
}
.padding-horizontal-10 {
  padding-left: 10px;
  padding-right: 10px;
}
.padding-horizontal-14 {
  padding-left: 14px;
  padding-right: 14px;
}
.padding-horizontal-25 {
  padding-left: 25px;
  padding-right: 25px;
}
// padding-vertical
.padding-vertical-25 {
  padding-top: 25px;
  padding-bottom: 25px;
}
.padding-vertical-3 {
  padding-top: 3px;
  padding-bottom: 3px;
}
.padding-vertical-5 {
  padding-top: 5px;
  padding-bottom: 5px;
}
// padding-top
.padding-top-3 {
  padding-top: 3px;
}
.padding-top-5 {
  padding-top: 5px;
}
.padding-top-9 {
  padding-top: 9px;
}
.padding-top-10 {
  padding-top: 10px;
}
.padding-top-15 {
  padding-top: 15px;
}
.padding-top-18 {
  padding-top: 18px;
}
.padding-top-20 {
  padding-top: 20px;
}
.padding-top-20 {
  padding-top: 20px;
}
.padding-top-25 {
  padding-top: 25px;
}
.padding-top-30 {
  padding-top: 30px;
}
.padding-top-35 {
  padding-top: 35px;
}
.padding-top-40 {
  padding-top: 40px;
}
.padding-top-44 {
  padding-top: 44px;
}
.padding-top-50 {
  padding-top: 50px;
}
.padding-top-80 {
  padding-top: 80px;
}
// padding-bottom
.padding-bottom-5 {
  padding-bottom: 5px;
}
.padding-bottom-10 {
  padding-bottom: 10px;
}
// padding-left
.padding-left-10 {
  padding-left: 10px;
}
// padding-right
.padding-right-10 {
  padding-right: 10px;
}

// MARGIN
.margin-none {
  margin: 0;
}
// margin-vertical
.margin-vertical-0 {
  margin-top: 0;
  margin-bottom: 0;
}
.margin-vertical-5 {
  margin-top: 5px;
  margin-bottom: 5px;
}
.margin-vertical-8 {
  margin-top: 8px;
  margin-bottom: 8px;
}
.margin-vertical-15 {
  margin-top: 15px;
  margin-bottom: 15px;
}
// margin-horizontal
.margin-horizontal-5 {
  margin-left: 5px;
  margin-right: 5px;
}
.margin-horizontal-10 {
  margin-left: 10px;
  margin-right: 10px;
}
.margin-horizontal-15 {
  margin-left: 15px;
  margin-right: 15px;
}
// margin-bottom
.margin-bottom-0 {
  margin-bottom: 0;
}
// margin-left
.margin-left-8 {
  margin-left: 8px;
}
// margin-top
.margin-top-0 {
  margin-top: 0;
}
.margin-top-10 {
  margin-top: 10px;
}
.margin-top-65 {
  margin-top: 65px;
}
.margin-top-minus60 {
  margin-top: -60px;
}

// FONT STYLE
.font-italic {
  font-style: italic;
}
.font-bold {
  font-weight: bold;
}
.font-normal {
  font-weight: normal;
}

// LETTER SPACING
.letter-spacing-1 {
  letter-spacing: 1px;
}
.letter-spacing-2 {
  letter-spacing: 2px;
}
.letter-spacing-3 {
  letter-spacing: 3px;
}

// TEXT POSITION
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}

// TEXT DECORATION
.text-decor-underline {
  text-decoration: underline;
}
.text-decor-none {
  text-decoration: none;
}

// BORDER
.border-none {
  border: transparent;
}
.border-1 {
  border: 1px solid transparent;
}
.border-black-1 {
  border: 1px solid rgb(0, 0, 0);
}
.border-dark-4 {
  border: 4px solid rgba(0, 0, 0, 0.7);
}
.border-dark-3 {
  border: 3px solid rgba(0, 0, 0, 0.7);
}
.border-dark-5 {
  border: 4px solid #141a1e;
}

// border-radius
.border-radius-10 {
  border-radius: 10px;
}
.border-radius-15 {
  border-radius: 15px;
}
.border-radius-20 {
  border-radius: 20px;
}
.border-radius-100 {
  border-radius: 100%;
}

// border-bottom
.border-bottom-1 {
  border-bottom: 1px solid #009688;
}
.border-bottom-2 {
  border-bottom: 2px solid #009688;
}
.border-bottom-5 {
  border-bottom: 2px solid #efefef;
}

// FORM STYLE
textarea:focus,
input:focus {
  outline: none;
}
.form-control:focus {
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: #009688;
}
.form-control-error {
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #ff5722;
}

// CURSOR
.cursor-pointer {
  cursor: pointer;
}
@media only screen and (max-width: 799px) {
  .h-md-100 {
    height: 100%;
  }
}
</style>

