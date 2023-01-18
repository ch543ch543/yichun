<template>
  <div class="about-container main-dark-background">
    <section class="about page-growDown main-light-background">
      <Navbar current-page="about" font-color="main-dark-color" />
      <div class="about-content" name="about">
        <h1 class="title title-font main-dark-color dark-ele-growUp2">About</h1>
        <!-- <span class="hover-btn main-dark-background">
          <svg
            viewBox="0 0 62 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z"
            />
          </svg>
        </span> -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="content">
            <!-- <img class="yichun" src="../assets/yichun3.jpg"> -->
            <p>
              Hi! I'm a front-end web developer from Taiwan now based in London!
              I have a background in statistics, while, a beautiful mistake, I
              started my career as a digital marketing associate and built the
              interest of creating visually appealing websites/ applications so
              then consequently taught myself different tools for building them.
              <br /><br />During the past two years, I sharpened my technical
              skills mostly on Javascript, React Hook, CSS preprocessor(SASS/
              SCSS) and jQuery. I worked with designers and product managers to
              build design and user-friendy focused responsive websites/
              applications. <br /><br />
              In work, I am a dedicated and passionate developer who is
              committed to producing high-quality work and continuously learning
              and improving. In my free time, I enjoy practicing yoga and taking
              and editing photos to build my own aesthetic. And now, I am
              excited to continue my professional growth in the UK and bring my
              skills and experience to a new role.<br /><br />
              If you are interested, I welcome you to view my CV/ portfolio, and
              I look forward to hearing from you soon.
            </p>
            <!-- <router-link to="/yichun-cv"
              ><a
                class="main-dark-background main-light-color title-font"
                target="_blank"
                href="#"
                >My CV</a
              ></router-link
            > -->
          </div>
        </div>
      </div>
    </section>
    <section class="overlay-content main-dark-background">
      <Navbar current-page="about" font-color="main-light-color" />
      <div class="about-content" name="about">
        <h1 class="title title-font main-light-color light-ele-growUp2">
          About
        </h1>
        <!-- <span class="hover-btn2 main-dark-background">
          <svg
            viewBox="0 0 62 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z"
            />
          </svg>
        </span> -->
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class="content">
            <!-- <img class="yichun" src="../assets/yichun3.jpg"> -->
            <p class="main-light-color">
              Hi! I'm a front-end web developer from Taiwan now based in London!
              I have a background in statistics, while, a beautiful mistake, I
              started my career as a digital marketing associate and built the
              interest of creating visually appealing websites/ applications so
              then consequently taught myself different tools for building them.
              <br /><br />During the past two years, I sharpened my technical
              skills mostly on Javascript, React Hook, CSS preprocessor(SASS/
              SCSS) and jQuery. I worked with designers and product managers to
              build design and user-friendy focused responsive websites/
              applications. <br /><br />
              In work, I am a dedicated and passionate developer who is
              committed to producing high-quality work and continuously learning
              and improving. In my free time, I enjoy practicing yoga and taking
              and editing photos to build my own aesthetic. Now, I am excited to
              continue my professional growth in the UK and bring my skills and
              experience to a new role.<br /><br />
              If you are interested, I welcome you to view my CV/ portfolio, and
              I look forward to hearing from you soon.
            </p>
            <!-- <router-link to="/yichun-cv"
              ><a
                class="main-light-background main-dark-color title-font"
                target="_blank"
                href="#"
                >My CV</a
              ></router-link
            > -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import gsap from "gsap";

export default {
  name: "About",
  components: { Navbar },
  mounted() {
    const span = document.querySelector(".hover-btn2");
    const overlay = document.querySelector(".overlay-content");
    if (window) {
      window.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        gsap.to(overlay, {
          "--x": `${x}%`,
          "--y": `${y}%`,
          duration: 0.3,
          ease: "sine.out",
        });
      });
    }
    if (span) {
      span.addEventListener("click", () => {
        overlay.classList.toggle("is-open");
      });
    }
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 10vw;
  text-align: left;
  margin: 0 100px;
}
.about {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.about-content {
  padding: 0 20px 0 5%;
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
}
.overlay-content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: circle(100px at var(--x, 50%) var(--y, 50%));
  transition: clip-path 100ms;
}

span {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
}

svg {
  margin: 1em;
  fill: white;
}

.yichun {
  margin-right: 50px;
  margin-left: 50px;
}
a {
  width: 100%;
}
p {
  width: 60%;
}
img {
  width: 20%;
  border: 10px solid #9dc5c2;
}

@media (max-width: 860px) {
  .overlay-content {
    display: none;
  }
  .about {
    padding: 10% 10%;
    height: fit-content;
    min-height: 100vh;
    .title {
      width: fit-content;
      margin: 0 0 20px 0;
    }
  }
  .about-content {
    .content {
      padding: 0;
      p {
        width: 100%;
      }
      a {
        margin-left: -10px;
      }
    }
  }
}
</style>