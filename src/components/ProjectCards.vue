<template>
  <div class="projectcards page-growUp main-dark-background">
    <div class="container">
      <div class="left-block">
        <div class="work-desc-blok">
          <h1
            class="main-light-color title-font light-ele-growUp1"
            href="#previous"
          >
            PROJECT
          </h1>
          <p class="work-desc content-font main-light-color light-ele-growUp2">
            A selective set of projects I’ve built or participated in. This is a
            mix of former employer and personal owned projects.
          </p>
        </div>
      </div>
      <div class="right-block mobile">
        <div class="projects-scroll">
          <div class="projectcard">
            <img
              src="../assets/xevo_dashboard_1.png"
              v-on:click="showMobileDetail(0)"
            />
            <div
              class="clicktoseemore main-light-background"
              v-on:click="showMobileDetail(0)"
            >
              See more
            </div>
            <a
              class="detail main-light-color"
              target="_blank"
              href="http://xevo.qsan.net/"
            >
              <div class="project-name">XEVO</div>
              <div class="project-des">
                XEVO is a storage management system. It allows user to
                manipulate and monitor NAS(Network-attached storage) with
                intuitive GUI.
              </div>
              <div class="role">
                <div>Role</div>
                <div class="bar">|</div>
                <div>Front End Developer</div>
              </div>
              <a
                class="
                  checkitout
                  title-font
                  main-light-background main-dark-color
                "
                target="_blank"
                href="https://www.qsan.com/"
                >Check it out</a
              >
            </a>
          </div>
          <div class="projectcard">
            <img
              src="../assets/xinsight_demo.png"
              v-on:click="showMobileDetail(1)"
            />
            <div
              class="clicktoseemore main-light-background"
              v-on:click="showMobileDetail(1)"
            >
              See more
            </div>
            <div class="detail main-light-color">
              <div class="project-name">XInsight</div>
              <div class="project-des">
                XInsight is a storage central managing system, it helps user to
                unify data and manage their storage system from anywhere,
                through simplified platforms and detailed system information.
              </div>
              <div class="role">
                <div>Role</div>
                <div class="bar">|</div>
                <div>Front End Developer</div>
              </div>
              <a
                class="
                  checkitout
                  title-font
                  main-light-background main-dark-color
                "
                target="_blank"
                href="https://www.qsan.com/"
                >Check it out</a
              >
            </div>
          </div>
          <div class="projectcard">
            <img
              src="../assets/qsan_website.png"
              v-on:click="showMobileDetail(2)"
            />
            <div
              class="clicktoseemore main-light-background"
              v-on:click="showMobileDetail(2)"
            >
              See more
            </div>
            <a class="detail main-light-color">
              <div class="project-name">QSAN Inc. Official Website</div>
              <div class="project-des">
                I full-stack maintained and developed the company's
                multi-language official website and the CMS. In this project, I
                evaluted the needs and involved in communications with
                colleagues from different departments in the company, and then
                coworked with UI designers to create responsive and
                user-friendly website pages
              </div>
              <div class="role">
                <div>Role</div>
                <div class="bar">|</div>
                <div>Full Stack Developer</div>
              </div>
              <a
                class="
                  checkitout
                  title-font
                  main-light-background main-dark-color
                "
                target="_blank"
                href="https://www.qsan.com/"
                >Check it out</a
              >
            </a>
          </div>
          <div class="projectcard">
            <img
              src="../assets/reactshop/reactshop-1.png"
              v-on:click="showMobileDetail(3)"
            />
            <div
              class="clicktoseemore main-light-background"
              v-on:click="showMobileDetail(3)"
            >
              See more
            </div>
            <a class="detail main-light-color">
              <div class="project-name">Personal Project</div>
              <div class="project-des">
                This is an e-commerce website built with Next.js as back-end,
                React.js as front-end, customized Ant UI as design package,
                Sanity as CMS, stripe as payment system and it's deployed on
                Vercel.
              </div>
              <div class="role">
                <div>Role</div>
                <div class="bar">|</div>
                <div>Front End Developer</div>
              </div>
              <a
                class="
                  checkitout
                  title-font
                  main-light-background main-dark-color
                "
                target="_blank"
                href="https://e-shop-eta.vercel.app/"
                >Check it out</a
              >
            </a>
          </div>
          <div class="projectcard">
            <img
              src="../assets/greensock-1.png"
              v-on:click="showMobileDetail(4)"
            />
            <div
              class="clicktoseemore main-light-background"
              v-on:click="showMobileDetail(4)"
            >
              See more
            </div>
            <a class="detail main-light-color">
              <div class="project-name">Personal Project</div>
              <div class="project-des">
                This is an e-commerce website built with Next.js as back-end,
                React.js as front-end, customized Ant UI as design package,
                Sanity as CMS, stripe as payment system and it's deployed on
                Vercel.
              </div>
              <div class="role">
                <div>Role</div>
                <div class="bar">|</div>
                <div>Front End Developer</div>
              </div>
              <a
                class="
                  checkitout
                  title-font
                  main-light-background main-dark-color
                "
                target="_blank"
                href="https://e-shop-eta.vercel.app/"
                >Check it out</a
              >
            </a>
          </div>
          <div class="projectcard">
            <img
              src="../assets/Vueshop/vue1.png"
              v-on:click="showMobileDetail(5)"
            />
            <div
              class="clicktoseemore main-light-background"
              v-on:click="showMobileDetail(5)"
            >
              See more
            </div>
            <a class="detail main-light-color">
              <div class="project-name">Personal Project</div>
              <div class="project-des">
                This is a e-commerce web app built with Vuejs and Firebase. The
                main features includes allowing user to edit their profile and
                administrator to upload new products on the admin page.
              </div>
              <div class="role">
                <div>Role</div>
                <div class="bar">|</div>
                <div>Front End Developer</div>
              </div>
              <a
                class="
                  checkitout
                  title-font
                  main-light-background main-dark-color
                "
                target="_blank"
                href="https://vue-shop-19fa3.web.app/"
                >Check it out</a
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="right-block desk" @wheel="handleScroll">
      <div class="projects-scroll">
        <div class="projectcard">
          <img src="../assets/xevo_dashboard_1.png" />
          <a
            class="detail main-light-color"
            target="_blank"
            href="http://xevo.qsan.net/"
          >
            <div class="project-name">XEVO</div>
            <div class="project-des">
              XEVO is a storage management system. It allows user to manipulate
              and monitor NAS(Network-attached storage) with intuitive GUI.
              <br />
              In this project, my role was to maintain and create new front-end
              components with React classic, implementing certain features with
              chart.js for showing memory usage and performance data in charts,
              Redux for managing states inside the application, Ant UI design
              for building styled and customized components, and RESTful API to
              request data and operate storage devices.
            </div>
            <div class="role">
              <div>Role</div>
              <div class="bar">|</div>
              <div>Front End Developer</div>
            </div>
          </a>
        </div>
        <div class="projectcard">
          <img src="../assets/xinsight_demo.png" />
          <div class="detail main-light-color">
            <div class="project-name">XInsight</div>
            <div class="project-des">
              XInsight is a storage central managing system, it helps user to
              unify data and manage their storage system from anywhere, through
              simplified platforms and detailed system information.
              <br />
              In this project, I was the only front-end developer who cooperated
              with backend developers on building Restful API to implement
              front-back-separation development. I developed the dashboard with
              React Hook, implementing certain features with chart.js for
              showing memory usage and performance data, using Redux for
              managing states inside the application, applying Ant UI design for
              building styled and customized components, and requested RESTful
              API to operate storage devices.
            </div>
            <div class="role">
              <div>Role</div>
              <div class="bar">|</div>
              <div>Front End Developer</div>
            </div>
          </div>
        </div>
        <div class="projectcard">
          <img src="../assets/qsan_website.png" />
          <a
            class="detail main-light-color"
            target="_blank"
            href="http://www.qsan.com/en/calculator"
          >
            <div class="project-name">QSAN Inc. Official Website</div>
            <div class="project-des">
              I full-stack maintained and developed the company's multi-language
              official website and the CMS page with vanilla javascript, jQuery,
              PHP and SQL. In this project, I evaluted the needs and involved in
              communications with colleagues from different departments in the
              company, and then coworked with UI designers to create responsive
              and user-friendly website pages.
              <br />The link is one of my latest works on the website. It's a
              calculator of product suggestions which helps potential clients to
              decide between different products based on their needs. I built
              the front-end, back-end and CMS for uploading products' data in
              this project.
            </div>
            <div class="role">
              <div>Role</div>
              <div class="bar">|</div>
              <div>Full Stack Developer</div>
            </div>
          </a>
        </div>
        <div class="projectcard">
          <img src="../assets/reactshop/reactshop-1.png" />
          <a
            class="detail main-light-color"
            target="_blank"
            href="https://e-shop-eta.vercel.app/"
          >
            <div class="project-name">Personal Project</div>
            <div class="project-des">
              This is an e-commerce website built with Next.js, customized Ant
              UI as design package, Sanity as CMS, stripe as payment system and
              it's deployed on Vercel.<br />
              - Functional Cart<br />
              - Functional Login/ Logout system<br />
              - Allowing administrator to upload and edit website' content in
              CMS.<br />
              - Process payment with Stipe.
            </div>
            <div class="role">
              <div>Role</div>
              <div class="bar">|</div>
              <div>Front End Developer</div>
            </div>
          </a>
        </div>
        <div class="projectcard">
          <img src="../assets/greensock-1.png" />
          <a
            class="detail main-light-color"
            target="_blank"
            href="https://ch543ch543.github.io/cine-casero/"
          >
            <div class="project-name">Personal Project</div>
            <div class="project-des">
              This is website cloned from https://www.cinecasero.uy/.<br />
              <br />Built with React.js and Greensock for animation.<br />
              <br />Photos are by me.<br />
            </div>
            <div class="role">
              <div>Role</div>
              <div class="bar">|</div>
              <div>Web Developer</div>
            </div>
          </a>
        </div>
        <div class="projectcard">
          <img src="../assets/Vueshop/vue1.png" />
          <a
            class="detail main-light-color"
            target="_blank"
            href="https://vue-shop-19fa3.web.app/"
          >
            <div class="project-name">Personal Project</div>
            <div class="project-des">
              This is an e-commerce web app built with Vue.js and Firebase.<br />
              - Functional Cart<br />
              - Allowing user to edit their profile.<br />
              - Allowing administrator to upload and edit products' content on
              the admin page.
            </div>
            <div class="role">
              <div>Role</div>
              <div class="bar">|</div>
              <div>Front End Developer</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "projectcards",
  data() {
    return {
      pic: "../assets/logo.png",
    };
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // handleScroll(event) {
    //   if (event.deltaY < 0 && event.wheelDeltaX == 0) {
    //     document.getElementsByClassName("right-block")[1].scrollLeft -= 20;
    //   } else if (event.deltaY > 0 && event.wheelDeltaX == 0) {
    //     document.getElementsByClassName("right-block")[1].scrollLeft += 20;
    //   }
    // },
    showMobileDetail(index) {
      document.getElementsByClassName("detail")[index].classList.add("show");
      document
        .getElementsByClassName("clicktoseemore")
        [index].classList.add("hide");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectcards {
  position: fixed;
  top: -20px;
  width: 100%;
  height: fit-content;
  min-height: 110vh;
}
.container {
  padding: 50px 12.5%;
  margin: 0;
  // font-size: 50px;
  display: flex;
  max-width: unset;
  width: 100%;
  height: 100vh;
  .left-block {
    width: 35%;
    position: relative;
    .work-desc-blok {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 70px;
    }
    .work-desc {
      font-size: 20px;
    }
  }
}
.right-block {
  // overflow-x: hidden;
  overflow-y: hidden;
  // -webkit-overflow-scrolling: hidden;
  // -ms-overflow-style: hidden;
  scrollbar-width: hidden;
  .role {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    .bar {
      margin: 0 30px;
    }
  }
  &.mobile {
    display: none;
    .projects-scroll {
      padding-bottom: 10vh;
    }
    .projectcard {
      text-align: left;
      margin-bottom: 50px;
      position: relative;
      width: 100%;
      img {
        width: 100%;
        height: unset;
      }
      .clicktoseemore {
        &.hide {
          display: none;
        }
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        border-radius: 100px;
        text-align: center;
        line-height: 100px;
      }
      .detail {
        &.show {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        margin: 20px 0 30px 0;
        display: none;
        width: 100%;
        height: auto;
        text-align: left;
        .project-name {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .project-des {
          font-size: 12px;
          position: unset;
          width: 100%;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .role {
          display: flex;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 15px;
          .bar {
            margin: 0 15px;
          }
        }
        .checkitout {
          text-align: center;
          margin: 10px auto;
          width: 45%;
          display: block;
          padding: 10px 20px;
          cursor: pointer;
          transition: 1s;
          border-radius: 50px;
          &:hover {
            width: 50%;
          }
        }
      }
    }
  }
  &.desk {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    .projects-scroll {
      width: fit-content;
      padding: 0 120px 0 65vw;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .projectcard {
        left: 0;
        // z-index: 1000;
        height: 529px;
        position: relative;
        img {
          height: 100%;
          margin-right: 30px;
          transition: background-color 0.5s 0.2s;
          &:hover + .detail {
            background-color: rgba(39, 34, 35, 0.85);
          }
        }
        .detail {
          position: absolute;
          display: block;
          top: 0;
          width: calc(100% - 30px);
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 5%;
          justify-content: space-around;
          text-align: left;
          background-color: rgba(39, 34, 35, 0);
          opacity: 0;
          transition: background-color 0.5s 0.2s, opacity 0.5s 0.2s;
          &:hover {
            background-color: rgba(39, 34, 35, 0.85);
            opacity: 1;
          }
          .project-name {
            font-size: 40px;
            font-weight: bold;
          }
          .project-des {
            font-weight: 700;
          }
        }
      }
    }
    @keyframes mask {
      0% {
        mask-image: linear-gradient(
          rgba(39, 34, 35, 0.75),
          rgba(39, 34, 35, 0.75)
        );
        mask-size: 0px 0px;
      }
      100% {
        mask-image: linear-gradient(
          rgba(39, 34, 35, 0.75),
          rgba(39, 34, 35, 0.75)
        );
        mask-size: 100% 100%;
      }
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
@media (max-width: 860px) {
  .projectcards {
    justify-content: flex-start;
    padding-top: 10%;
  }
  .right-block {
    &.mobile {
      display: block;
    }
    &.desk {
      display: none;
    }
    position: unset;
  }
  .container {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 20px 0 15%;
    .left-block {
      .work-desc-blok {
        position: unset;
        .work-desc {
          font-size: 16px;
        }
      }
      width: 100%;
      margin-top: 0;
    }
  }
}
</style>
