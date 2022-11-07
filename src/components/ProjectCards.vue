<template>
  <div class="projectcards page-growUp main-dark-background">
    <div class="container">
      <div class="left-block">
        <!-- <h2 class="content-title-font light-ele-growUp1 main-light-color">Previous Projects at work</h2>
        <p class="content-font light-ele-growUp2 main-light-color">This are my side project</p> -->
      </div>
      <div class="right-block">
        <div>
          <div class="work-block">
            <button class="works-title main-light-color title-font link-info" type="button" data-toggle="collapse" data-target="#previousWorks" aria-expanded="false" aria-controls="previousWorks">
              Main Projects I contributed in
              <p class="work-desc content-font main-light-color">These are the projects I mainly participated in when working for my previous employer.</p>
            </button>
            <div class="collapse show main-light-color" id="previousWorks">
              <div  class="accordion" id="accordion-l2" >
                <div>
                  <div id="work1">
                    <button class="accordion-button collapsed main-light-color content-title-font" data-toggle="collapse" data-target="#xevo" aria-expanded="false" aria-controls="xevo">
                      XEVO
                    </button>
                  </div>
                  <div id="xevo" class="collapse content-font" data-parent="#accordion-l2">
                    <div class="detail">XEVO is a storage management system. It allows user to manipulate and monitor NAS with GUI.<br>The user interface is built with React classic, Redux for managing users' behaviors and Ant UI design as UI library. My role was to maintain and create new front-end components for storage features and requested RESTful API to manipulate storage devices.</div> 
                    <img class="work-img" src="../assets/xevo_livedemo.png">
                    <a class="checkitout title-font main-light-background main-dark-color" target="_blank" href="http://xevo.qsan.net/">Check it out</a>
                  </div>
                </div>
                <div>
                  <div id="work2">
                    <button class="accordion-button collapsed main-light-color content-title-font" data-toggle="collapse" data-target="#xinsight" aria-expanded="false" aria-controls="xinsight">
                      XInsight
                    </button>
                  </div>
                  <div id="xinsight" class="collapse content-font" data-parent="#accordion-l2">
                    <div class="detail">XInsight is a storage central managing system, it helps users who owns more than one NAS to monitor performance of all devices on only one management system. <br>The user interface is built with React Hook, Redux for managing users' behaviors and Ant UI design as UI library. My role was to cooperate with backend developers on implementing front-back-separation development.</div> 
                    <img class="work-img" src="../assets/xinsight_demo.png">
                    <!-- <a class="checkitout title-font main-light-background main-dark-color" target="_blank" href="http://xevo.qsan.net/">Check it out</a> -->
                  </div>
                </div>
                <div>
                  <div id="work3">
                    <button class="accordion-button collapsed main-light-color content-title-font" data-toggle="collapse" data-target="#website" aria-expanded="false" aria-controls="website">
                      Website
                    </button>
                  </div>
                  <div id="website" class="collapse content-font" data-parent="#accordion-l2">
                    <div class="detail">I full-stack maintained the company's multi-language website, including the admin page, with jQuery, SQL, PHP. My role was to evalute the needs from sales and marketing team and implement database structure, backend and UI/UX design from the designer.</div>
                    <img class="work-img" src="../assets/xcalc.png">
                    <a class="checkitout title-font main-light-background main-dark-color" target="_blank" href="https://www.qsan.com/">Check it out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button class="collapsed works-title main-light-color title-font link-info" type="button" data-toggle="collapse" data-target="#personalWorks" aria-expanded="true" aria-controls="personalWorks">
              Personal Projects
              <p class="work-desc content-font main-light-color">These are my main side projects.</p>
            </button>
            <div class="collapse show main-light-color" id="personalWorks">
              <div  class="accordion" id="accordion-l3" >
                <div>
                  <div id="project1">
                    <button class="collapsed accordion-button main-light-color content-title-font" data-toggle="collapse" data-target="#reactshop" aria-expanded="false" aria-controls="reactshop">
                      React ecommerce shop
                    </button>
                  </div>
                  <div id="reactshop" class="collapse content-font" data-parent="#accordion-l3">
                    <div class="detail">This is an e-commerce website built with Next.js as back-end, React.js as front-end, customized Ant UI as design package, Sanity as CMS, stripe as payment system and deployed on Vercel. </div>
                    <div class="carousel">
                      <div id="carousel1" class="carousel slide" data-ride="carousel" style="margin-bottom:30px"> 
                        <ol class="carousel-indicators">
                          <li data-target="#carousel1" data-slide-to="0" class="active"></li>
                          <li data-target="#carousel1" data-slide-to="1"></li>
                          <li data-target="#carousel1" data-slide-to="2"></li>
                          <li data-target="#carousel1" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active" >
                            <img class="d-block " src="../assets/reactshop/reactshop-1.png" alt="First slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block" src="../assets/reactshop/reactshop-2.png" alt="Second slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block" src="../assets/reactshop/reactshop-3.png" alt="Third slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block" src="../assets/reactshop/reactshop-4.png" alt="Third slide">
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                      <a class="checkitout title-font main-light-background main-dark-color" target="_blank" href="https://e-shop-eta.vercel.app/">Check it out</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="project2">
                    <button class="accordion-button collapsed main-light-color content-title-font" data-toggle="collapse" data-target="#vueshop" aria-expanded="false" aria-controls="vueshop">
                      Vue ecommerce shop
                    </button>
                  </div>
                  <div id="vueshop" class="collapse content-font" data-parent="#accordion-l3">
                    <div class="detail">This is a practical e-commerce web app built with Vuejs and Firebase. The main features includes allowing user to edit their profile and administrator to upload new products on the admin page.</div>
                    <div class="carousel">
                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"> 
                        <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active" >
                            <img class="d-block " src="../assets/Vueshop/vue1.png" alt="First slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block" src="../assets/Vueshop/vue2.png" alt="Second slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block" src="../assets/Vueshop/vue3.png" alt="Third slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block" src="../assets/Vueshop/vue4.png" alt="Third slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block" src="../assets/Vueshop/vue5.png" alt="Third slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block" src="../assets/Vueshop/vue6.png" alt="Third slide">
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                      <a class="checkitout title-font main-light-background main-dark-color" target="_blank" href="https://vue-shop-19fa3.web.app/">Check it out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <!-- <div class="cards d-flex flex-column">
        <div class="topofcard" style="margin-bottom:150px">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="margin-bottom:70px"> 
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active" >
                <img class="d-block " src="../assets/Vueshop/vue1.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block" src="../assets/Vueshop/vue2.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block" src="../assets/Vueshop/vue3.png" alt="Third slide">
              </div>
              <div class="carousel-item">
                <img class="d-block" src="../assets/Vueshop/vue4.png" alt="Third slide">
              </div>
              <div class="carousel-item">
                <img class="d-block" src="../assets/Vueshop/vue5.png" alt="Third slide">
              </div>
              <div class="carousel-item">
                <img class="d-block" src="../assets/Vueshop/vue6.png" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="personalcard text-left " >
            <h1>Vue shop</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
            <button class="btn btn-info btn-lg"> Link </button>
          </div>
        </div>
        </div> -->
        <!-- <h2 style="text-align: left; color: rgb(38, 42, 43); border-bottom: rgb(99, 161, 163) solid;">PRACTICE PROJECTS</h2> -->
        <!-- <div class="card" style="margin-top:50px">
            <div class="rightofcard">
              <img class="practice" src="../assets/smartbrain.png" > 
            </div>
            <div class="leftofcard text-left">
              <h1>Smart Brain</h1>
              <p>
                使用Clarifai偵測人臉API<br>
                記錄使用者的操作次數<br>
                Ｔilt.js及particle.js視覺美化<br>
                使用Heroku建立使用者資料庫以及部署網頁<br>
              </p>
              <a href="https://smart-brainnnn.herokuapp.com/" target="_blank" class="btn btn-info btn-lg"> Link </a>
            </div>
          </div> -->
        <!-- <div class="card">
          <div class="rightofcard">
            <img class="practice" src="../assets/weather.png">
          </div>
          <div class="leftofcard text-left">
            <h1>Easy Ｗeather App </h1>
              <p>使用axios套件封裝async及await串接Weatherbit.io天氣API，讓使用者能自由搜尋各城市當下及未來五天的氣溫。</p>
            <a href="https://ch543ch543.github.io/weatherapp/" target="_blank" class="btn btn-info btn-lg"> Link </a>
          </div>
        </div>
        <div class="card">
          <div class="rightofcard">
            <img class="practice" src="../assets/RobotFriends.png" > 
          </div>
          <div class="leftofcard text-left">
            <h1>Robot Friends</h1>
              <p>使用state及props紀錄使用者的搜尋文字並過濾出相對應的機器人</p> 
            <a href="https://ch543ch543.github.io/reactRobot/" target="_blank" class="btn btn-info btn-lg"> Link </a>
          </div>
        </div> -->
        <!-- <div class="card">
          <div class="rightofcard">
            <img class="practice" src="../assets/nasa.png"> 
          </div>
          <div class="leftofcard text-left">
            <h1>NASA Image API Practice</h1>
              <p>串連NASA的每日天文圖片資料庫</p>
            <a href="https://ch543ch543.github.io/api_nasaphoto/" target="_blank" class="btn btn-info btn-lg"> Link </a>
          </div>
        </div>
        <div class="card">
          <div class="rightofcard">
            <img class="practice" src="../assets/fries.png"> 
          </div>
          <div class="leftofcard text-left">
            <h1>Restaurant Website (html& css)</h1>
            <p>使用html及css建立薯條餐廳官網的畫面</p>
            <a href="https://ch543ch543.github.io/fries.github/index.html" target="_blank" class="btn btn-info btn-lg"> Link </a>
        </div>
        </div>
        <div class="card">
          <div class="rightofcard">
            <img class="practice" src="../assets/todolist.png"> 
          </div>
          <div class="leftofcard text-left">
            <h1>TodoList</h1>
            <p> 使用者能自行新增、刪除以及將代辦事項標記完成。</p>
            <a href="https://ch543ch543.github.io/todolist/" target="_blank" class="btn btn-info btn-lg"> Link </a>
        </div>
        </div>
        <div class="card">
          <div class="rightofcard">
            <img class="practice" src="../assets/landingpage.png"> 
          </div>
          <div class="leftofcard text-left">
            <h1>Landing Page</h1>
            <p>MailCamp註冊及訂閱模板連結</p>
            <a href="https://ch543ch543.github.io/landingpage.zerotomaster/" target="_blank" class="btn btn-info btn-lg"> Link </a>
        </div>
        </div>-->
    </div>
  </div>
</template>
  
<script>
  // import ProjectPics from './ProjectPics';

  export default {
    name: "projectcards",
    components:{
      // ProjectPics
    },
    data(){
      return{
        pic: "../assets/logo.png",
      }
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .projectcards {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container {
      padding: 30px 0 30px 50px;
      margin: 0;
      // font-size: 50px;
      display: flex;
      max-width: unset;
      width: 100%;
      height: 100%;
      .left-block {
        margin-top: 30%;
        flex-direction: row;
        width: 0%;
      }
      .right-block {
        width: 100%;
        height: 100%;
        overflow: scroll;
        .works-title {
          font-size: 3vw;
        }
        .work-block {
          margin-bottom: 50px;
        }
        .work-img {
          width: 50%;
          margin: 10px auto;
          display: block;
        }
        button {
          background-color: transparent;
          width: 100%;
          border: none;
          outline: none;
        }
        .card {
          flex-direction: column;
        }
        .detail {
          margin-left: 20px;
          width: 90%;
        }
        .link-info {
          display: block;
          position: relative;
          line-height: 0.95em;
          text-align: left;
          margin: 20px auto;
          width: 100%;
          background-color: transparent;
          border-color: transparent;
          transition: 2s;
          &:hover {
            text-decoration: none;
            font-style: italic;
            animation: moveRight 1s ease-in-out infinite;
          }
          p {
            line-height: 1.5em;
          }
        }
        .accordion {
          margin: 20px 20px;
          .accordion-button:after {
            font-family: 'FontAwesome';  
            content: "\f068";
            float: right; 
          }
          .accordion-button.collapsed:after {
              content: "\f067"; 
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
        .carousel {
          margin: 20px;
          width: 80%;
          margin: auto;
          margin-top: 10px;
          margin-bottom: 20px;
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
    .card {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border-color: transparent;
      margin-top: 100px;
      margin-bottom: 100px;
    }
    .leftofcard {
      width: 40%;
      margin-left: 40px;
    }
    .leftofcard a {
      width: 75px;
    }
    img.d-block {
      max-width: 100%;
      width: auto;
      height: auto;
      object-fit: cover;
      margin-left: auto; 
      margin-right: auto;
    }
    img.practice {
        width: 500px;
      }

    .leftofcard h1, .personalcard h1{
      font-size: 0.8em;
    }

    .leftofcard p, .personalcard p{
      font-size: 0.3em;
      }
    
    .cards 
    p {
      width: 100%;
    }
    li {
      padding: 5px;
    }
    
    @media (max-width: 860px) {
      .projectcards {
        height: fit-content;
        min-height: 100vh;
        justify-content: flex-start;
        padding-top: 10%;
      }
      .container {
        flex-direction: column;
        justify-content: flex-start;
        padding: 20px 10%;
        .left-block {
          width: 100%;
          margin-top: 0;
        }
        .right-block {
          width: 100%;
          overflow: hidden;
          .works-title {
            font-size: 6vw;
          }
          .accordion {
            margin-left: 0;
          }
        }
      }
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border-color: transparent;
        margin-top: 150px;
        margin-bottom: 150px;
      }
      .leftofcard {
        width: 100%;
        margin-top: 5px;
        margin-left: 0px;
      }
      p { 
        width: 100%;
      }
      img.practice {
        width: 90%;
      }
      .leftofcard h1, .personalcard h1{
        font-size: 0.8em;
      }
      .leftofcard p, .personalcard p{
        font-size: 0.3em;
      }
      .cards h2{
        font-size:  2rem;
      }

    } 
  </style>
  