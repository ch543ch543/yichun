<template>
  <div class="contact page-growUp main-dark-background">
    <div class="hello light-ele-growUp2 title-font main-light-color">
      Hello.
    </div>
    <div class="icon-container">
      <a
        href="https://github.com/ch543ch543"
        target="_blank"
        class="fab fa-github main-light-color light-ele-growUp1"
        @mouseover="hover1 = true"
        @mouseleave="hover1 = false"
        :class="{ active: hover1 }"
      ></a>
      <a
        href="https://www.linkedin.com/in/yichun-tsai-859278177"
        target="_blank"
        class="fab fa-linkedin main-light-color light-ele-growUp1"
        @mouseover="hover2 = true"
        @mouseleave="hover2 = false"
        :class="{ active: hover2 }"
      ></a>
      <a
        href="https://www.instagram.com/yichunvita/"
        target="_blank"
        class="fab fa-instagram main-light-color light-ele-growUp1"
        @mouseover="hover3 = true"
        @mouseleave="hover3 = false"
        :class="{ active: hover3 }"
      ></a>
      <!-- <a href="https://medium.com/@ch543ch543" target="_blank" class="fab fa-medium"
            @mouseover="hover3 = true"
            @mouseleave="hover3 = false"
            :class="{'active': hover3}">
        </a> -->
    </div>
    <span class="main-light-color content-font light-ele-growUp1"
      >ch543ch543@gmail.com <br />
      +44 7391 831547
    </span>
  </div>
</template>

<script>
export default {
  name: "contact",
  props: {
    msg: String,
  },
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  font-size: 12vh;
}
.contact {
  width: 100%;
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon-container {
  width: 50%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fab,
.fas {
  margin-left: 30px;
  margin-right: 30px;
  font-size: 40px;
}
.active {
  color: burlywood;
  text-decoration: none;
  cursor: pointer;
}
@media (max-width: 860px) {
  .icon-container {
    display: block;
    width: fit-content;
    a {
      margin: 30px;
    }
  }
}
</style>
