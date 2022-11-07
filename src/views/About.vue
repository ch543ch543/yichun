<template>
  <div class="about-container main-dark-background">
    <div class="about page-growDown main-light-background">
      <a name='about'>
          <h1 class="title title-font main-dark-color dark-ele-growUp2">About</h1>
          <div data-aos="fade-up" data-aos-duration="1500">
            <div class="content" >
              <!-- <img class="yichun" src="../assets/yichun3.jpg"> -->
                <p>I’ve been working as a front-end web developer for one and half years and now seek a new position in the UK with my tier 5 visa. 
                  During my first job as a digital marketing associate, I built the interest of creating visually appealing websites/ software interfaces and consequently I taught myself JavaScript, HTML, CSS, Vue and React with open resources online.
In my past experience, I sharpened my technical skills mostly on React Hook, React class, jQuery and Less. 
                  <br>If you feel interested, welcome to give my portfolio a look, and looking forward to talk to you soon!
                </p>
                <router-link to="/yichun-cv"><a class="main-dark-background main-light-color title-font" target="_blank" href="#">My CV</a></router-link>
            </div>
          </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {
  }
};
</script>

<style scoped lang="scss">
.about {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 10vw;
    text-align: left;
    margin: 0 100px;
  }
}
.container {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 0px;
  padding-right: 0px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
  padding-left: 30px;
  padding-right: 30px;
  p {
    width: 60%;
    text-align: left;
  }
  a {
    display: block;
    border-radius: 30px;
    width: 150px;
    padding: 10px 20px;
    transition: 1s;
    &:hover {
      width: 200px;
    }

  }
}
.yichun {
  margin-right: 50px;
  margin-left: 50px;
}
a {
  width: 100%;
}
p {
width: 60%
}
img {
  width: 20%;
  border: 10px solid #9dc5c2;
}
h1 {
  font-size: 200%;
}
@media (max-width: 860px) {
  .about {
    padding: 0 20%;
    .title {
      width: fit-content;
      margin: 0 0 20px 0;
    }
  }
  .content {
    padding: 0;
    p {
      width: 100%;
    }
  }
}

</style>