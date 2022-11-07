<template>
  <div class="main-light-background">
    <ProjectCards />
  </div>
</template>

<script>
import ProjectCards from "../components/ProjectCards.vue";

export default {
  name: "Projects",
  components: {
    ProjectCards
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
