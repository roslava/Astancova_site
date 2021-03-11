<template>
<main-layout>


  <div class="article justify article__bg-light-gray bg-customer3">
    <div class="container">
      <div class="row bg-white">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-color__white">
          <div class="text-area">
            <div class="base-txt__400">
           
              <h1>Тендерное сопровождение Вашей компании «под ключ» в закупках по 44 – ФЗ, 223 – ФЗ, в коммерческих закупках.</h1> 

                <TenderOnetime />
                <TenderSubscription />


              <h5
              v-bind:style='{
                lineHeight: "20px",
                fontSize: "14px"
                } '>* Стоимость зависит от объёма и сложности подготовки пакета документов.<br>
              ** При покупке от 3-х месяцев.<br>
              *** Стоимость рассчитывается индивидуально.</h5>

            </div>
          </div>
        </div>

        <div class="picture">
        <img src="../assets/img/technical/banner3.jpg" class="img-fluid" alt="">

        </div>


      </div>
    </div>
  </div>



</main-layout>
</template>


<script>
// @ is an alias to /src
import MainLayout from '@/layout/MainLayout'

import TenderOnetime from '@/components/tenders/tenderOnetime/tenderOnetime'
import TenderSubscription from '@/components/tenders/tenderSubscription/tenderSubscription'
export default {
  name: 'TenderSupport',
  components: {
    MainLayout,
    TenderOnetime,
    TenderSubscription
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/custom-styles.scss";
</style>
