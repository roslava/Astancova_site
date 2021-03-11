<template>
    <div class='navMob'>
        <div class='item'><router-link to="/">Главная</router-link></div>
        <div class='item'><router-link  id='baseLineCorr_02' to="/TenderSupport">Тендерное сопровождение</router-link></div>
        <div class='item '><router-link  id='baseLineCorr_01' to="/Auctions">Имущественные торги</router-link></div>
        <div class='item'><router-link to="/LoyaltyProgram">Программа лояльности</router-link></div>
        <div class='item'><router-link to="/reviews">Отзывы</router-link></div>
    </div>
</template>

<script>
    export default {
 
    }
</script>

<style scoped lang="css">

@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url("https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2") format('woff2');
}

.navMob{
    min-width: 100%;
    display: block;
    padding: 0;
    
}



.item{
    box-sizing: border-box;
    min-height: 60px;
    max-height: 60px;
    min-width: 100%;
   
}








    .item a {
        color: #c3cce1;
        font-size: 19px;
        font-weight: 500;
        text-decoration: none;
        letter-spacing: 1px;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 55px;
       font-family: 'Oswald', sans-serif;
        margin: 0;
        transition-delay: 0.1s;
        min-width: 100%;
        min-height: 60px;
    border-bottom: 1px black solid;
        display: block;
        padding: 0;
    }

   

    

     .item a:hover {
            color:  #ffffff;
            background: #293350;
        } 

    .router-link-exact-active, router-link-active {
        font-weight: 500;
        background: #263c79;
        color:  #ffffff;
    }
    

    .router-link-exact-active, router-link-active :hover {
            color: #ffffff;
            background: #263c79;
            
        }













@media (min-width: 768px) {
    .navMob{
      display: none;
    }
}


#baseLineCorr_01{
   padding-top: 1px;
   min-height: 60px;
   max-height: 60px;
}

#baseLineCorr_02{
   padding-top: 1px;
   min-height: 60px;
   max-height: 60px;
}

</style>