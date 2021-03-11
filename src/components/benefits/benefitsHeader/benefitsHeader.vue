<template>
    <div class="benefitsHeader">
    <div class='selectBlack'>   
 Работа с Удалённым тендерным отделом<br>Александры Астанковой —</div>
 <div class='unselect'>
 не только качественное и профессиональное<br>участие в тендерах, но еще и...
 </div>
 <div class='select'>возможность вступления<br>в закрытый клуб участников закупок —</div>
 <div class='selectBig bg-blue'>«Комьюнити Александры Астанковой»</div>
<div class='coin' ><img src="./img/coin.gif" alt=""></div>

    </div>
</template>


<script>
    export default {}
</script>>


<style lang="css" scoped>

.benefitsHeader{
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 15px;
    /* margin-bottom: 20px; */
}

.selectBlack{
    color:#3c3d3f;
}

/* max 450*/
@media (max-width: 450px) {
  .selectBlack{  
font-size: 27px;
line-height: 40px;
margin-top: 30px;
margin-bottom: 5px;
  }
}

@media (max-width: 350px) {
  .selectBlack{  
font-size: 27px;
line-height: 38px;
margin-top: 30px;
margin-bottom: 5px;

  }
}

.select{
    color: #1c851d;
}


/* max 450*/
@media (max-width: 450px) {
  .select{  
font-size: 27px;
line-height: 40px;
margin-top: 5px;
margin-bottom: 5px;
  }
}

/* max 350*/
@media (max-width: 350px) {
  .select{  
font-size: 30px;
line-height: 40px;
max-width: 270px;
margin-top: 5px;
margin-bottom: 5px;
  }
}



.selectBig{
    color: rgb(255, 255, 255);
    letter-spacing: 1px;
    font-size: 45px;
    border-radius: 5px;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 13px;
    padding-bottom: 16px;

margin-top:10px;
text-shadow: 2px 2px 5px #44488C;
line-height: 53px;
}
/* max 350*/
@media (max-width: 350px) {
  .selectBig{  
font-size: 30px;
line-height: 40px;
max-width: 270px;
  }
}

.unselect{
    color: #3c3d3f;
    font-size: 20px;
    margin-top: 15px;
margin-bottom: 15px;
}

/* max 450*/
@media (max-width: 450px) {
  .unselect{  
font-size: 16px;
line-height: 20px;
margin-top: 15px;
margin-bottom: 15px;
  }
}

/* max 350*/
@media (max-width: 350px) {
  .unselect{  
font-size: 16px;

  }
}

.coin{
    max-width: 200px;
    margin:0 auto;
    padding-top:34px ;
}
.coin img{
    width: 100%;
}

.bg-blue {
background-color: #1a0026;
background-color: #362fa5;
background-image: url("./img/wwww1.jpg");
background-attachment: fixed;
background-size: 100%;
}

/* max 500*/
@media (max-width: 500px) {
  .bg-blue{  
background-size: cover;
background-image: url("./img/wwww.jpg");
  }
}

</style>