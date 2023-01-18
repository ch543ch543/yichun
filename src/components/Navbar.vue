<template>
  <div class="nav">
    <div class="nav-item" v-if="currentPage !== 'home'">
      <router-link to="/" class="link-info" :class="fontColor"
        >HOME</router-link
      >
    </div>
    <div class="nav-item" v-if="currentPage !== 'about'" :class="fontColor">
      <router-link to="/about" class="link-info" :class="fontColor"
        >ABOUT</router-link
      >
    </div>
    <div class="nav-item" v-if="currentPage !== 'work'" :class="fontColor">
      <router-link to="/work" class="link-info" :class="fontColor"
        >WORK</router-link
      >
    </div>
    <div class="nav-item" v-if="currentPage !== 'contact'" :class="fontColor">
      <router-link to="/contact" class="link-info" :class="fontColor"
        >CONTACT</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    currentPage: String,
    fontColor: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  position: fixed;
  z-index: 1000;
  bottom: 40px;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .nav-item {
    transform: rotate(-0.25turn);
    margin-bottom: 60px;
    font-size: 12px;
  }
}
@media (max-width: 860px) {
}
</style>
