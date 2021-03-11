<template>
    <div class="PriceTitle ">
       
       <div class='wrapper'>
           <div class='cost'>{{line1}}</div>
           <div class='cost'>{{line2}}</div><span class='aster'>***</span>
       </div> 
    </div>
</template>


<script>
    export default {
        props: ['line1', 'line2']
    }
</script>>


<style lang="css" scoped>

.PriceTitle {
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
    left: -36%;
    top:25%;
    text-align: center;
}

.cost{
 font-family: 'Oswald', sans-serif;
 font-size: 21px;
 text-align: center;
 font-weight: 500;
 color: #ffffff;
 line-height: 33px;
 text-shadow: 2px 1px 5px rgba(105,151,6,0.92);
 background-color: rgba(105,151,6,0.92);
 display: inline-block;
 text-transform: uppercase;
 padding-left: 7px;
 padding-right: 7px;
 border-radius: 4px;
 margin-top: -4px;
 }

.rub{
  font-size: 20px;  
}
.month{
    font-size: 16px; 
}

.aster{
    font-size: 17px;
    font-weight: 600;
    margin-left: 3px;
    color: rgb(82, 117, 15);
    letter-spacing: 1px;
    
    
}
</style>
