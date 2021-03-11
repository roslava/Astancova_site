<template>
<div class="page-wrapper">
  <div class="content">

    <Header />
    <Nav />

    <main class="justify">

        <slot></slot>

    </main>

  </div>

  <Footer />

</div>
</template>


<script>
import Header from '@/components/header/Header.vue'
import Nav from '@/components/nav/Nav.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  name: 'MainLayout',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header, Nav, Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "@/assets/scss/variables.scss";
@import "@/assets/scss/custom-styles.scss";

</style>
