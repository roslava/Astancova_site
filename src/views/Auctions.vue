<template>
<main-layout>


  <div class="article justify article__bg-light-gray bg-customer3">
    <div class="container">
      <div class="row bg-white">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-color__white">
          <div class="text-area">



        <h1>Сопровождение торгов по банкротству<br>и арестованному имуществу.<br> 
Выкуп и аренда государственного<br>и муниципального имущества.</h1>

<Auction />
<h5>*Стоимость зависит от объёма и сложности подготовки пакета документов.</h5>









          </div>
        </div>

        <div class="picture">
        <img src="../assets/img/technical/auction.jpg" class="img-fluid" alt="">

        </div>


      </div>
    </div>
  </div>



</main-layout>
</template>


<script>
// @ is an alias to /src
import MainLayout from '@/layout/MainLayout';
import Auction from '@/components/auction/auction';
export default {
  name: 'Auctions',
  components: {
    MainLayout, Auction
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/custom-styles.scss";
</style>
