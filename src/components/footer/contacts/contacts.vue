<template>

    <div class='contacts'>
        <!-- MAIL -->
          <img src="@/assets/SVG/_arroba.svg" alt="" class="icon">
            <span>
                <a href="mailto:astan-sasha@yandex.ru">tendernoe-soprovojdenie@astankova.ru</a>
            </span>
              <br>
        <!-- INSTA -->
          <img src="@/assets/SVG/_instagram.svg" alt="" class="icon">
            <span>
                <a href="https://www.instagram.com/astankova.aleksandra/" target="_blank">astankova.aleksandra</a>
            </span>
              <br>
        <!-- PHONE -->
          <img src="@/assets/SVG/_smartphone.svg" alt="" class="icon">
          <span>
              <a href="tel:+79899933723">8 (962) 446–06–61</a>
          </span>
          <br>
        <!-- WHATSAPP -->  
          <img src="@/assets/SVG/_whatsapp.svg" alt="" class="icon">
          <span>
              <a href="https://wa.me/+79899933723?text=Здравствуйте!%20">8 (962) 446–06–61</a>
              </span>
              <br>
                      <!-- FB -->  
          <img src="@/assets/SVG/_fb.svg" alt="" class="icon">
          <span>
              <a href="https://www.facebook.com/profile.php?id=100039205418709">facebook</a>
              </span>
              <br>
    </div>

</template>


<script>
    export default {
        
    }
</script>>
<style lang="css" scoped>

/* CONTCTS______________________ */
    .contacts{
        font-size: 17px;
        line-height: 37px;
        font-weight: 500;
        letter-spacing: 0.1px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-right: 2px #2b4580 ridge;
        border-left: 2px #2b4580 ridge;
        padding-right: 20px;
        padding-left: 20px;
    }
/* max 992 */
@media (max-width: 992px) {
  .contacts{  
     border-right: 0px;
    }
}

/* max 575 */
@media (max-width: 575px) {
.contacts{  
font-family: 'Oswald', sans-serif;
border-left: 0px;
font-size: 18px;
}
}

/* max 320 */
@media (max-width: 320px) {
.contacts{  
font-family: 'Oswald', sans-serif;
border-left: 0px;
font-size: 14px;
}
}


/* CONTCTS A______________________ */
    .contacts a {
        color: #c0cadf;
        text-decoration: none;
    }

    .contacts a:hover {
        color: #2183f8;
    }


/* ICON______________________ */
    .icon{
        height: 24px;
        margin-right: 6px;
    }

    
</style>
