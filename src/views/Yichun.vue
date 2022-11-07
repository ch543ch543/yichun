<template>
  <div class="yichun page-growDown">
    <div class="container">
      <div class="intro-block">
        <p class="title-font dark-ele-growUp1">
          YICHUN TSAI
        </p>
        <p class="content-font dark-ele-growUp2">
          FRONT END DEVELOPER
          <br><br>
          WORK PERMIT: <br>TIER 5 (expire in Aug. 2024)
        </p>
      </div>
      <div class="button-block page-fadeIn title-font">
        <router-link to="/about" class="link-info main-dark-color">ABOUT</router-link>
        <!-- <router-link to="/cv" class="link-info main-dark-color">CV</router-link> -->
        <router-link to="/work" class="link-info main-dark-color">WORK</router-link>
        <router-link to="/contact" class="link-info main-dark-color">CONTACT</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "yichun",
    props: {
      msg: String,
      
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.yichun {
  // background: url(https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80) no-repeat center center fixed;
  // background-size: cover;
  background-color: #eee7e1;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    .intro-block {
      width: 30%;
      padding-top: 20%;
      p {
        text-align: left;
        width: fit-content;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    .button-block {
      width: 70%;
      .link-info {
        display: block;
        position: relative;
        font-size: 12vw;
        line-height: 0.95em;
        text-align: left;
        margin: auto;
        width: 100%;
        background-color: transparent;
        border-color: transparent;
        transition: 2s;
        &:hover {
          text-decoration: none;
          font-style: italic;
          animation: moveRight 1s ease-in-out infinite;
          color: #27272a;
        }
      }
    }
  }
}

@keyframes moveRight {
    0% {
        left: 0;
    }
    100% {
        left: 10px;
    }
}

@media (max-width: 860px) {
  .yichun {
    height: fit-content;
    min-height: 100vh;
    .container {
      height: fit-content;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 0;
      padding: 10%;
      // text-align: center;
      .intro-block {
        width: 100%;
        padding-top: 0;
        margin-bottom: 30px;
      }
      .button-block {
        .link-info {
          margin-bottom: 10px;
          font-size: 17vw;
        }
      }
    }
  }
}
</style>
