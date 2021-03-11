<template>
    <div class="navy">
            
                <div class="item"><router-link to="/">Главная</router-link></div>
                <div class="item"><router-link to="/TenderSupport">Тендерное<br>сопровождение</router-link></div>
                <div class="item"><router-link to="/Auctions">Имущественные<br>торги</router-link></div>
                <div class="item"><router-link to="/LoyaltyProgram">Программа<br>лояльности</router-link></div>
                <div class="item"><router-link to="/reviews">Отзывы</router-link></div>
    </div>
</template>


<script>
    export default {
 
    }
</script>


<style lang="css" scoped>

.navy{
    margin-top: 20px;
    margin-left:0px;
    margin-right:0px;
    margin-bottom: 20px;
  padding-left: 20px !important;
    border-right: 2px #2b4580 ridge;
    padding-right: 20px;
    color: cornsilk;
     /* background-color: red; */
}

/* max 992 */
@media (max-width: 992px) {
  .navy{  
   border-right: 0px;
   border-left: 2px #2b4580 ridge;
   padding-left: 0px;
   margin-right: 0px;
   padding-right: 0px
   }
}

/* max 710 */
@media (max-width: 710px) {
  .navy{  
display:flex;
flex-direction: row;
border-right: 0px;
border-left: 0px;
padding-left: 0px;
padding-top: 10px;

  }
}

/* max 575 */
@media (max-width: 575px) {
  .navy{  
display:block;
max-width: 70%;
 margin-left:0px;
  }
}

.navy a{
    color: #c0cadf;
    text-decoration: none; 
          
}

.navy a:hover{
    color: #2183f8;
           
}



.item{
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    margin-bottom: 11px;
    background-color: red;
    background:none;
    padding-left: 0px;
    max-width: 50%;
   
    
}
/* max 710 */
@media (max-width: 710px) {
  .item{  
margin-right: 30px;
max-width: 50%;
  }
}



</style>
