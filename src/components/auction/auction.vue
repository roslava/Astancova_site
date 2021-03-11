<template>
    <div class="auction">

             <h3>Наименование и стоимость услуг:</h3>
             <div class='wrapper'>
              <ul>
                <li>Подбор имущества (Мониторинг лотов)<span class="ampty">i</span>— <b>3000<span class="ampty">i</span>руб.</b>/месяц</li>
                <li>Анализ документации &nbsp;— <b>от&nbsp;1000&nbsp;руб.</b>*</li>
                <li>Сопровождение лота «под ключ» (подача, участие в аукционе, заключение договора) &nbsp;— <b>от&nbsp;4000&nbsp;руб.</b>*</li>
              </ul>
              </div>            
                 
    </div>
</template>


<script>
    export default {
        
    }
</script>>


<style lang="css" scoped>

.auction{
    border: 1px solid rgba(33, 64, 154, 1);
    overflow: hidden;
    border-radius: 5px;
    -webkit-box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.29); 
    box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.29);
    margin-top:40px;
    margin-bottom: 20px;

background: rgb(213,227,255);
background: linear-gradient(180deg, rgba(213,227,255,1) 0%, rgba(255,255,255,1) 27%);
}

.auction h3{
    text-transform: uppercase;
    background: rgb(32,56,144);
background: linear-gradient(105deg, rgba(32,56,144,1) 32%, rgba(37,62,185,1) 91%);
    color: #ffffff;
    font-weight: 600;
    padding: 5px 5px 5px 10px;
    margin-bottom: 20px;
    letter-spacing: 2px;
}
.wrapper{
  padding-right: 20px;
}
</style>



