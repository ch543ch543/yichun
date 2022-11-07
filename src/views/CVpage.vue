<template>
  <div class="yichun-cv">
    <a class="main-dark-color main-light-background" href="/static/yichun_cv.pdf" download><i class="fa fa-download" aria-hidden="true"></i></a>
    <pdf src="/static/yichun_cv.pdf"></pdf>
  </div>
</template>

<script>
// @ is an alias to /src
import pdf from 'vue-pdf';
export default {
  name: "CVpage",
  components: {
    pdf
  }
};
</script>

<style lang="scss">
.yichun-cv {
  padding: 0 15%;
  a {
    display: block;
    margin: 30px auto 0 auto;
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