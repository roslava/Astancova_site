<template>
    <div class="benefitsBody">
        <div class='undertitle'>
            Привилегии участников комьюнити
        </div>

        <div class='wrapper'>

<!-- 1 -->
        <div class='item'>
            <div class='itemContent'>
                <div class='round'><div>1</div></div>
<p>При заключении договора<br>на оказание услуг<br>и соблюдения правил начисляются виртуальные<br>АА коины.</p>
            </div>
        </div>
<!-- 2 -->
        <div class='item'>
            <div class='itemContent'>
                <div class='round'><div>2</div></div>
                <p>Сопровождение закупок «под ключ»<br>вне очереди</p>
            </div>
        </div>
<!-- 3 -->
        <div class='item'>
            <div class='itemContent'>
                <div class='round'><div>3</div></div>
                 <p>Получение консультаций<br>вне очереди</p>
            </div>
        </div>
<!-- 4 -->
        <div class='item'>
            <div class='itemContent'>
                <div class='round'><div>4</div></div>
<p>Уведомление<br>об истечении сроков действия ЭЦП</p>
            </div>
        </div>
<!-- 5 -->
        <div class='item'>
            <div class='itemContent'>
                <div class='round'><div>5</div></div>
<p>Участие<br>в информационных группах<br>с ежедневным обновлением актуальных отраслевых новостей.</p>
            </div>
        </div>        

</div>



    </div>
</template>


<script>
    export default {}
</script>>


<style lang="css" scoped>
.benefitsBody{
    display: block;
    border-radius: 12px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.32); 
box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.32);
text-align: center;
margin-bottom: 40px;
padding-bottom: 0px;
background-image: url("./img/wwww.jpg");
background-color: rgba(0,0,0,0.32);
background-attachment: fixed;
background-size: cover;

}



.wrapper{
    display: flex;
    min-width: 100%;
    padding: 10px;
    justify-content: center;
    /* align-content: center; */
    /* align-items: center; */
    /* justify-items: center; */
}
/* max 1199 */
@media (max-width: 1199px) {
  .wrapper{  

flex-wrap: wrap;
  }
}

.item{
min-width: 20%;
/* border: solid black 1px; */
padding:10px;
margin: 0;
/* background-color: crimson; */

}


/* max 1199 */
@media (max-width: 1199px) {
  .item{  
min-width: 33%;
max-width: 33%;

  }
}

/* max 767 */
@media (max-width: 767px) {
  .item{  
min-width: 50%;
max-width: 50%;

  }
}

/* max 500 */
@media (max-width: 500px) {
  .item{  
min-width: 100%;
max-width: 100%;

  }
}

.itemContent{
   font-family: 'Oswald', sans-serif;
   text-transform: uppercase;
   font-size: 16px;
    border-left: solid rgba(160, 160, 160, 0.5) 3px;
    border-top: solid rgba(201, 200, 200, 0.5) 3px;
    border-bottom: solid rgba(33, 64, 154, .7) 3px;
    border-right: solid rgba(33, 64, 154, .5) 3px;
    min-height: 100%;
    text-align: center;
    padding: 16px 10px 0px 10px;
    border-radius: 7px;
    color: #3c3d3f;
background: rgb(221,227,246);
background: linear-gradient(330deg, rgba(221,227,246,1) 0%, rgba(255,255,255,1) 27%, rgba(255,255,255,1) 69%, rgba(228,255,206,1) 100%);

}


/* max 767 */
@media (max-width: 767px) {
  .itemContent p{  
margin-bottom: 8px;
font-size: 19px;
  }
}

.itemContent p{
    margin-top: 10px;
}

.undertitle{
    padding-left: 20px;
   padding-right: 20px;
    text-transform: uppercase;
    padding-top: 20px;
    font-weight: 600;
    font-size: 25px;
    color: #ffffff;
}


.round{
    position: relative;
    margin: 0 auto;
    border-radius: 50%;
    min-height: 50px;
    min-width: 50px;
    max-height: 50px;
    max-width: 50px;
    background: rgb(0, 0, 0);
background-image: url("./img/wwww.jpg");
background-attachment: fixed;
background-size: cover;
}

.round div{
    color: #05d308;
    /* color: #1c851d; */
    
    font-weight: 500;
    font-size: 22px;;
    position: absolute;
    left: 40%;
    top:13%;
}



</style>



