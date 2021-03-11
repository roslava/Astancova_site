<template>
    
          <div class="support">
          <div class="title">Тендерное сопровождение<br>Вашей компании «под ключ»</div>
            <div class="cells-wrapper">

<div v-for="(item, index) in items" :key="index" class="cell">
 <img :src="item.img"  alt="">
 <div class="under-title"> {{item.title}}</div>
</div>
</div>
</div>
     


</template>

<script>

import round_N01 from './img/round_N01.png'
import round_N02 from './img/round_N02.png'
import round_N03 from './img/round_N03.png'
import round_N04 from './img/round_N04.png'
import round_N05 from './img/round_N05.png'

    export default {
        data (){
            return{
                items: [
                        { id:'_01', title:'44 – ФЗ', img:round_N01 },
                        { id:'_02', title:'223 – ФЗ', img:round_N02 },
                        { id:'_03', title:'Коммерческие тендеры', img:round_N03 },
                        { id:'_04', title:'Банкротство, арестованное имущество', img:round_N04 },
                        { id:'_05', title:'Выкуп и аренда государственного имущества', img:round_N05 }
                    ]
            }
        }
    }
</script>>


<style lang="css" scoped>

.support {
    padding: 20px 20px;
    color: #ffffff;
    text-transform: uppercase;
    background: linear-gradient(90deg, rgba(33,47,121,.8) 35%, rgba(71,159,228,.8) 100%, rgba(2,0,36,1) 244394%), url("../../assets/img/technical/logo-part.png") no-repeat;
    
 
    }



    /* max 768 */
    @media (max-width: 768px) {
      .support{
 background-size: cover;
  background-position: center;
      }
    }


 /* TITLE ___________________________________________ */
    .title {
        font-size: 25px;
        line-height: 33px;
        font-weight: 700;
        text-align: center;
        margin: 30px 0;
    }
    
    /* max 1200 */
    @media (max-width: 1200px) {
      .title {
          font-size: 23px;
          line-height: 32px;
      }
    }


 /* UNDER-TITLE ___________________________________________ */
    .under-title {
      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      margin:0 auto;
      padding: 10px 0 0 0;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      letter-spacing: 1px;
      width: 90%;
    }
    /* max 1200 */
    @media (max-width: 1200px) {
      .under-title {
      font-size: 16px;
      line-height: 21px;
      }
    }

    /* max 992 */
    @media (max-width: 992px) {
      .under-title {
      font-size: 14px;
      line-height: 21px;
      width: 97%;
      }
    }

    /* max 768 */
    @media (max-width: 768px) {
      .under-title {
      font-size: 17px;
      line-height: 25px;
      width: 90%;
      }
    }

    /* max 495 */
    @media (max-width: 495px) {
      .under-title {
      font-size: 17px;
      line-height: 25px;
      width: 100%;
      }
    }


 /* CELLS-WRAPPER___________________________________________ */
    .cells-wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;/* меняем при адаптиве */
    }

    /* max 768 */
    @media (max-width: 768px) {
      .cells-wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      }
    }

 /* CELL___________________________________________ */

    .cell {
      /* делим 100% на количество горизонтальных блоков
      результат будет значением для min-width и max-width  */
        min-width:20%;
        max-width: 20%;
        text-align: center;
        padding-bottom: 10px;
        margin: 0 auto;
  }

    /* max 768 */
    @media (max-width: 768px) {
      .cell {
        min-width:200px;
        text-align: center;
       padding-bottom: 30px;
      }
    }
    /* max 495 */
    @media (max-width: 495px) {
      .cell {
        min-width:150px;
        text-align: center;
       padding-bottom: 30px;
       }
    }

 /* CELL IMG___________________________________________ */
.cell img {
width: 85%;
margin-bottom: 8px;
-webkit-box-shadow: 10px 10px 19px -3px rgba(76,104,161,1);
box-shadow: 10px 10px 19px -3px rgba(76,104,161,1);
border-radius: 50%;
}
    


/* max 495 */
@media (max-width: 495px) {
.cell img {
max-width:160px;
}
}
</style>
