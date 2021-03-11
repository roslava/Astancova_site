<template>
<div>
  <div class="container-justify bg-color__dark-gray">
    <div class=" bg-color__soft-black  p-0">
     
       
          <div class="aa-nav">



<NavDesktop />



<div class="hide_me_on_dectops">
            <transition name="fade" mode="out-in">
              <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
              <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
            </transition>
</div>


            <transition name="fade">
              <div v-if="show">
                <NavMob />
              </div>
            </transition>

          </div>


        
      
    </div>
  </div>




</div>
</template>

<script>
import NavDesktop from '@/components/nav/navDesktop/navDesktop.vue'
import NavMob from '@/components/nav/navMob/navMob.vue'
export default {
  name: 'Nav-desctop',
  data() {
    return {show: false}
  },
  components: {
    NavDesktop,
    NavMob
  }

}
</script>


<style lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/custom-styles.scss";
@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url("https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2") format('woff2');
}




.hide_me_on_dectops{
  box-sizing: border-box;
  display:-webkit-box;display:-ms-flexbox;display:flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  align-content: stretch;
  height: 60px;
 
}




.aa-nav {
    height: 30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    overflow-y: hidden;
   padding: 0;

    a {
        color: #c3cce1;
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 33px;
        
        font-family: 'Oswald', sans-serif;
        margin: 0 20px;
        transition-delay: 0.1s;

        &:hover {
            color: $color_white;
            background: #293350;
        }
    }

    .router-link-exact-active,
    router-link-active {
        font-weight: 500;
        background: #263c79;
        color: $color_white;
        line-height: 33px;

        &:hover {
            color: $color_white;
            background: $color_dark-lue-70;
        }
    }

}

// @media===========================================================

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {


    .hide_me_on_dectops{
      display:flex;
          }


}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {





    .hide_me_on_dectops{
      display: flex !important;
       border-bottom: 1px black solid;
      
    }

    .aa-nav {
        text-align: center;
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
        -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow-y: visible;
        height: auto;
    }

@media (max-width: 767px) {
  .aa-nav{
 min-width: 100%;
  }
 
}








    .material-icons {
        color: $color_light-gray;
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 40px;
        line-height: 55px;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
       
    }

}






// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .hide_me_on_dectops{
    display:none;
      }


    .aa-nav {
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        a {
            font-size: 14px;
            line-height: 33px;
            padding: 0 0px;
            margin: 0 0px;
        }
    }

}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {

    .aa-nav {
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        a {
            font-size: 17px;
            line-height: 33px;
            padding: 0 0px;
            margin: 0 0px;
        }
    }


    }



    @media (max-width: 992px) {

    .aa-nav {
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        a {
            font-size: 12px;
            line-height: 33px;
            padding: 0 11px;
            margin: 0 5px;
        }
    }


    }










    .hide_me_on_dectops{
      display:none;
          }

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
