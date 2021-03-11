<template>
<header>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 p-0">
        <div class="header-container">
          <div class="aa-header">
          </div>

        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/custom-styles.scss";

header {
  background-color: $color_dark-lue;
}

.header-container {
  display:block;
  min-width: 100%;
  max-width: 100%;
  background-color: #20409a;
  margin-top: 0
}

.aa-header {
  display: block;
  max-width: 1366px;
  min-height: 300px;
  background-image: url("../../assets/img/technical/bg_header.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:  contain;
}

@media (max-width: 1199px) {
  .aa-header {
    min-height: 250px;
    max-height: 250px;
    background-size: cover;
  }
}

@media (max-width: 991px) {
  .aa-header {
      min-height: 190px;
      max-height: 190px;
      background-size: contain;
  }
}

@media (max-width: 767.98px) {
  .aa-header {
      min-height: 140px;
      max-height: 140px;
      background-size: contain;
    }
}

@media (max-width: 555px) {
  .aa-header {
      min-height: 100px;
      max-height: 100px;
      background-size: contain;
  }
}

</style>
