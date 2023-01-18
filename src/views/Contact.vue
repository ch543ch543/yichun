<template>
  <div class="contact-container main-light-background">
    <Navbar current-page="contact" font-color="main-light-color" />
    <Contact />
    <!-- <p class="footer-class" style="color:lightslategrey">© 2022 - Yichun Tsai</p> -->
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "contact",
  components: {
    Contact,
    Navbar
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact-container {
  height: 100%;
  position: relative;
}
</style>
