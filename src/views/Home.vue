<template>
  <div class="home">
    <Yichun />
  </div>
</template>

<script>
// @ is an alias to /src
import Yichun from "../components/Yichun.vue";
export default {
  name: "Home",
  components: {
    Yichun
  }
};
</script>

<style>
.home {
  height: 100%;
}
</style>