<template>
    <div class="navDesctop">
        <router-link to="/">Главная</router-link>
        <router-link to="/TenderSupport">Тендерное сопровождение</router-link>
        <router-link to="/Auctions">Имущественные торги</router-link>
        <router-link to="/LoyaltyProgram">Программа лояльности</router-link>
        <router-link to="/reviews">Отзывы</router-link>
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

.navDesctop {
    
    height: 30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    overflow-y: hidden;
}

.navDesctop a {
        font-family: 'Oswald', sans-serif;
       font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 33px;
        padding: 0 10px;
        /* color: $color_light-blue; */
        margin: 0 20px;
        transition-delay: 0.1s;


}



    .router-link-exact-active, router-link-active {
        font-weight: 500;
       /* color: $color_white; */
        line-height: 33px;
        
    }

    .router-link-exact-active, router-link-active:hover {
            /* color: $color_white;
           background: $color_dark-lue-70; */
    }





.navDesctop a:hover{
/* color: $color_white;
background: $color_dark-lue-30; */
}

@media (max-width:1200px) {

    .navDesctop a {
       font-size: 16px;
       margin: 0;
    }
}

@media (max-width:991px) {

    .navDesctop a {
       font-size: 15px;
       letter-spacing: 0px;
       
    }
}



@media (max-width: 767.98px) {

    .navDesctop  {
        display: none;
    }
}

</style>