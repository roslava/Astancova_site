<template>
    <div class="cooperation">
          <img src="./coop_footer.svg" alt="">  

    </div>
</template>


<script>
    export default {
        
    }
</script>>


<style lang="css" scoped>

.cooperation{
    min-width: 330px;
    max-width: 400px;
    margin-left:20px;
}

    /* max 1070 */
    @media (max-width: 1070px) {
        .cooperation{
        min-width: 230px;
        margin-top:15px;
        margin-left:0px;
        margin-right: 20px;
        }
    }

/* max 575 */
@media (max-width: 575px) {
  .cooperation{  
width: 50%;
padding: 20px 20px 0 0;

  }
}


</style>
