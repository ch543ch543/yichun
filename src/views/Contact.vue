<template>
  <div class='contact-container main-light-background'>
    <Contact />
  <!-- <p class="footer-class" style="color:lightslategrey">© 2022 - Yichun Tsai</p> -->
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";

export default {
  name: "contact",
  components :{
    Contact
  },

  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .contact-container {
    height: 100vh;
    width: 100%;
  }
</style>
