<template>
    <div>
        <div class="photoBlock">
            <img src="./img/faceBW.jpg" alt="">
        </div> 
    </div>
</template>



<script>
    export default {}
</script>


<style lang="css" scoped>

    .photoBlock{
        min-width: 100px;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 20px;
    }

    /* max 575 */
    @media (max-width: 575px) {
        .photoBlock{  
            text-align:left;
            padding-left: 20px;
            padding-top: 20px;
            margin-top:0px;
      }
}

    .photoBlock>img{
        height: 60px;
        border-radius: 50%;
        -webkit-box-shadow: 9px 13px 16px -9px rgba(23,33,90,1);
-moz-box-shadow: 9px 13px 16px -9px rgba(23,33,90,1);
box-shadow: 9px 13px 16px -9px rgba(23,33,90,1);
    }

</style>
