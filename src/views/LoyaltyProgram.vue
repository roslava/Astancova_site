<template>

  <main-layout>


    <div class="article justify article__bg-light-blue bg-customer3">
      <div class="container">
        <div class="row bg-white">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="text-area">


           <BenefitsHeader />
           <BenefitsBody />
           <Details />





            </div>
          </div>
        </div>
      </div>
    </div>


  </main-layout>

</template>


<script>
// @ is an alias to /src
import MainLayout from '@/layout/MainLayout'
import BenefitsHeader from '@/components/benefits/benefitsHeader/benefitsHeader'
import BenefitsBody from '@/components/benefits/benefitsBody/benefitsBody'
import Details from '@/components/benefits/details/details'
export default {
  name: 'LoyaltyProgram',
  components: {
    MainLayout, BenefitsHeader, BenefitsBody, Details
  }
}
</script>

<style lang="scss">

@import "@/assets/scss/variables.scss";
@import "@/assets/scss/custom-styles.scss";

</style>
