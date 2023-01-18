<template>
  <div class="yichun-cv">
    <a
      class="main-dark-color main-light-background"
      href="./static/yichuntsai_cv.pdf"
      download
      ><i class="fa fa-download" aria-hidden="true"></i
    ></a>
    <pdf
      src="./static/yichuntsai_cv.pdf"
      style="width: 90%; margin: auto"
    ></pdf>
  </div>
</template>

<script>
// @ is an alias to /src
import pdf from "vue-pdf";
export default {
  name: "CVpage",
  components: {
    pdf,
  },
};
</script>

<style lang="scss">
.yichun-cv {
  padding: 0 0 60px 0;
  a {
    display: block;
    margin: 30px auto 30px auto;
    border-radius: 50px;
    padding: 0 30px;
    width: 100px;
    transition: 1s;
    &:hover {
      width: 150px;
    }
  }
}
</style>