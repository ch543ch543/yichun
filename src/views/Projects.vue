<template>
  <div class="project main-light-background">
    <Navbar current-page="work" font-color="main-light-color" />
    <ProjectCards />
  </div>
</template>

<script>
import ProjectCards from "../components/ProjectCards.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Projects",
  components: {
    ProjectCards,
    Navbar,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project {
  position: relative;
}
</style>
