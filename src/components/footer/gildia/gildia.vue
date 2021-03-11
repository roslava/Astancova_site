<template>


    <div class='gildia'>
                
          Член гильдии Общероссийской общественной организации «Гильдия отечественных закупщиков и специалистов по&nbsp;закупкам и&nbsp;продажам».
          <a href="http://ooogos.ru" target="_blank">www.ooogos.ru</a>
     </div>
</template>


<script>
    export default {
        
    }
</script>>


<style lang="css" scoped>

.gildia{
max-width: 300px;
margin-top: 20px;
margin-left: 20px;
margin-bottom: 20px;
color: #c0cadf;
font-size: 12px;
font-weight: 500;
line-height: 15px;
}


    /* max 1050 */
    @media (max-width: 1050px) {
        .gildia{
        max-width: 250px;
        }
    }

    /* max 992 */
    @media (max-width: 992px) {
        .gildia{  
        min-width: 40%;
        margin-top: 20px;
        margin-left: 20px;
        }
    }

    /* max 575 */
@media (max-width: 575px) {
  .gildia{  
min-width: 100%;
padding-right: 20px;
margin:0px;
margin-top: 20px;
margin-left: 0px;


  }
}

.gildia a {
    color: #2183f8;
    cursor: pointer !important;
    text-decoration: none;
    font-weight: 500;
          
}

.gildia a:hover{
    color: #66a7f3;
}

</style>