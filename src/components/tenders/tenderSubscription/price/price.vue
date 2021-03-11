<template>
    <div class="price">
       
       <div class='wrapper'>
           <div class='cost'>
           {{cost}} <br>
          <div class='rub'> 
              руб.
        </div>
        <div class='month'>
        в месяц**
        </div>
        </div>
       </div> 
    </div>
</template>


<script>
    export default {
        props: ['cost']
    }
</script>>


<style lang="css" scoped>

.price{
    min-width: 130px;
    max-width: 130px;
    min-height: 130px;
    max-height: 130px;

background: rgb(124,189,3);
background: linear-gradient(180deg, rgba(124,189,3,1) 0%, rgba(138,201,3,1) 74%, rgba(198,201,3,1) 100%);
    
    border-radius: 50%;
    margin:20px;
    position: relative;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(177,197,235,1); 
box-shadow: 5px 5px 15px 5px rgba(177,197,235,1);
border: solid 10px #eef4ff;

    -moz-transform: rotate(-7deg); /* Для Firefox */
    -ms-transform: rotate(-7deg); /* Для IE */
    -webkit-transform: rotate(-7deg); /* Для Safari, Chrome, iOS */
    -o-transform: rotate(-7deg); /* Для Opera */
    transform: rotate(-7deg);


}
.wrapper{
    position: absolute;
    left: 19%;
    top:17%;
}

.cost{
 font-family: 'Oswald', sans-serif;
 font-size: 27px;
 text-align: center;
 font-weight: 500;
 color: #ffffff;
 line-height: 24px;
 text-shadow: 2px 1px 5px rgba(105,151,6,0.92);
}

.rub{
  font-size: 20px;  
}
.month{
    font-size: 16px; 
}
</style>
