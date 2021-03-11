<template>
  <div id="app">
    <router-view/>
  </div>
</template>





<style lang="scss">
@import "@/assets/scss/clear.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/custom-styles.scss";





ul{
  padding-left: 15px;
  line-height: 28px;
}

li{
    margin-left: 0;
}

ul li {
    list-style: none; /* Убираем исходные маркеры */
    background: url(./assets/img/technical/SVG/chevron.png) no-repeat 10%; /* Параметры фона */
    background-size: 10px;
    background-position: left 5px top 4px  ;
    padding-left: 24px;

   }

   li ul li{
       list-style: none; /* Убираем исходные маркеры */
       background: url(./assets/img/technical/SVG/chevron-gray.png) no-repeat 10%;
       background-size: 10px;
       background-position: left 5px top 4px  ;
       padding-left: 24px;


      }

      ol{
        counter-reset: myCounter;
          margin-left: 20px;

      }
      ol li{
        list-style: none;
        list-style-type: decimal;
        color: $color_accent;
        font-weight: 700;
        padding-left: 2px;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        line-height: 29px;
        }


      ol li span {
    color: $color_soft-black;
    font-weight: normal;

   }











// Все стили в custom-styles.scss

</style>
