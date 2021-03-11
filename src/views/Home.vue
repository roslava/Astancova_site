<template>
<main-layout>

  <!-- ============================================================================ -->
  <!-- INTRO BLOCK STARTS HERE -->

  <div class="article justify bg-color__light-gray">
    <div class="container">
      <div class="row bg-white">
        <div class="col-12 p-0">

          <div class="intro">


            <div class="p-4 justify-content-end">
              <img src="@/assets/img/technical/portret-big.jpg" alt="" class="intro__portret-img rounded-circle">
            </div>

            <div class="intro__title">
              <span class="intro__title-select">Александра Астанкова</span><br>
              Эксперт по государственным<br>и коммерческим закупкам.<br>Руководитель Удаленного<br> тендерного отдела<br>Александры Астанковой. 
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- INTRO BLOCK ENDS HERE -->
  <!-- ============================================================================ -->

  <!-- QUOTE BLOCK STARTS HERE -->
<!-- .col-	.col-sm-	.col-md-	.col-lg-	  d-md-none-->
  <div class="article justify bg-color__light-gray-d">
    <div class="container">
      <div class="row bg-color__light-blue">
        <div class="quote">
          <div class="col-lg-2 col-md-2 col-sm-1 "></div>
          <div class="col-lg-4 p-lg-0 col-md-4 p-md-0 col-sm-12 p-sm-5 pl-5  pt-5">
            <img src="@/assets/img/technical/coop.svg" alt="" class="quote__svg fluid">
          </div>
          <div class="col-lg-5 pt-lg-5 col-md-5 pt-md-5 col-sm-12 pt-sm-0 pb-sm-5  px-sm-5  px-sm-5 pl-5 py-5">
            <img src="@/assets/img/technical/figure-frame.jpg" alt="" class="quote__frame   fluid">
          </div>
          <div class="col-1 fluid"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- QUOTE BLOCK ENDS HERE -->
  <!-- ============================================================================ -->
 <div class="article justify bg-color__light-gray-dd bg-customer4">
   <div class="container">
     <div class="row bg-white">
       <div class="col-12 p-0">
 <support />
 </div>
  </div>
  </div>
 </div>
  <!-- ============================================================================ -->
  <!-- advantages BLOCK HERE -->

  <div class="article justify bg-color__light-gray-d">
    <div class="container">
      <div class="row bg-white">
        <div class="col-12 p-0">
          <div class="advantages">

            <h1>Преимущества работы&nbsp;со&nbsp;мной:</h1>

            <ol>
              <li><span class="base-txt__500">Индивидуальный подход к клиенту. </span></li>
              <li><span class="base-txt__500">Оптимальный набор инструментов для достижения поставленных целей.</span></li>
              <li><span class="base-txt__500">Надежность, профессионализм, внимательность, инициативность.</span></li>
              <li><span class="base-txt__500">Работа по фиксированной стоимости услуг (без %).</span></li>
            </ol>

          </div>
        </div>
      </div>
    </div>
  </div>










</main-layout>
</template>


<script>
// @ is an alias to /src
import MainLayout from '@/layout/MainLayout';
import support from '@/components/support/support'
export default {
  name: 'Home',
  components: {
    MainLayout, support
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/custom-styles.scss";


// INTRO =================================

.intro {
  display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
    -webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;
    -webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;
    -webkit-box-align: center;-ms-flex-align: center;align-items: center;
    background-image: url("../assets/img/technical/intro-bg.jpg");
    background-repeat: no-repeat;
    background-color: white;
    -ms-flex-wrap: wrap;flex-wrap: wrap;
    min-height: 322px;

    &__title {
        font-size: 25px;
        line-height: 29px;
        font-weight: 500;
        text-align: left;
        color: $color_dark-gray;

        &-select {
            font-weight: 700;
        }
    }

    &__portret-img {
        height: 192px;
        width: 192px;
        border: solid #FFFFFF 3px;
        -webkit-box-shadow: 6px 11px 19px -5px rgba(163, 161, 163, 0.92);
        -moz-box-shadow: 6px 11px 19px -5px rgba(163, 161, 163, 0.92);
        box-shadow: 6px 11px 19px -5px rgba(163, 161, 163, 0.92);
    }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
    .intro {
      -webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-webkit-flex-direction: column;
-ms-flex-direction: column;
        background-size: cover;

        &__portret-img {
            margin-top: 40px;
        }

        &__title {
            font-size: 20px;
            text-align: center;
            margin-bottom: 50px;
            line-height: 25px;
        }
    }
}


// QUOTE =================================

.quote {

    min-width: 100%;
    display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
    -webkit-box-align: center;-ms-flex-align: center;align-items: center;
    // background-color: #c2cbe2;
    background: left / contain url("../assets/img/technical/flag.png") no-repeat , linear-gradient(2deg, rgba(152,166,210,1) 0%, rgba(199,212,252,1) 10%, rgba(229,240,254,1) 37%, rgba(195,204,225,1) 68%, rgba(163,218,255,1) 100%);
    
    -ms-flex-wrap: wrap;flex-wrap: wrap;
   
 

    &__svg {
        width: 100%;
        height: auto;
    }

    &__frame {
        width: 90%;
        height: auto;
        -webkit-box-shadow: 10px 13px 22px -5px rgba(30, 57, 89, 0.63);
        -moz-box-shadow: 10px 13px 22px -5px rgba(30, 57, 89, 0.63);
        box-shadow: 10px 13px 22px -5px rgba(30, 57, 89, 0.63);
    }
}



// ADVANTAGES =================================

.advantages {

  display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
    -webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;
    justify-content: flex-start;
    -webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;
    background-color: #FFFFFF;
    -ms-flex-wrap: wrap;flex-wrap: wrap;
    padding: 60px 113px;
    box-sizing: border-box;
   
    
    background:  rgb(163,185,255);
background: right / contain url("../assets/img/technical/flag-left.png") no-repeat, linear-gradient(2deg, rgba(163,185,255,1) 0%, rgba(199,212,252,1) 10%, rgba(229,240,254,1) 37%, rgba(183,215,255,1) 88%, rgba(163,218,255,1) 100%);

}

.advantages h1{
 color: rgba(33, 64, 154, 1)
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {

.advantages {
  background-image: url("../assets/img/technical/sky.png");
  background-position: right;
  background-size: cover;
  padding: 30px;
}

}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {

  .advantages {
    background-image: url("../assets/img/technical/sky.png");
    background-position: right;
    background-size: cover;
  }



}


.bg-customer4 {
	background-color: #ccdaf0;
	background-image: url("../assets/img/technical/bg_customer4.png");
	background-attachment: fixed;
	background-size: cover;
	background-position: bottom;
}







// @media===========================================================

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {}
</style>
