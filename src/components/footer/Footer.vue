<template>
<footer>
  <div class='footer bg-blue'>
    
    <!--
    Обертка wrapperPCN нужна для
    того чтобы при адаптивном
    изменении менялось направление — flex-direction
    -->
    <div class='wrapperPCN'>

      <div class='wrapperPC'>
        <photoBlock /> 
        <contacts /> 
      </div>

      <navy /> 
    </div>

    <!--
    Обертка wrapperGC нужна для
    того чтобы при адаптивном
    изменении менялось направление — flex-direction
    -->
    <div class = 'wrapperGC'>
    <gildia /> 
    <cooperation /> 
    </div>

  </div>
<legal />
</footer>
</template>

<script>
import photoBlock from './photoBlock/photoBlock'
import contacts from './contacts/contacts'
import navy from './navy/navy'
import gildia from './gildia/gildia'
import cooperation from './cooperation/cooperation'
import legal from './legal/legal'
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  components: {
    photoBlock, contacts, navy, gildia, cooperation, legal
  }
}


</script>


<style scoped lang="css" >


footer {
    display:block;
    background-color: #3c3d3f;
    min-width: 100%;
}





/* CLASS FOOTER_________________ */
.footer{
max-width: 1140px; 
margin: 0 auto; 
display: -webkit-box; 
display: -ms-flexbox; 
display: flex; 
-webkit-box-orient: horizontal; 
-webkit-box-direction: normal; 
-ms-flex-direction: row; 
flex-direction: row; /* это свойство поменяется на column при меньшей ширине   */ 
}





/* max 992 */
@media (max-width: 992px) {
.footer{  
display: block;  
}
}



/* WRAPPER PCN ______________________ */
.wrapperPCN{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}




/* max 992 */
@media (max-width: 992px) {
.wrapperPCN{  
width: 100%;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content:flex-start;
border-bottom: 2px #2b4580 ridge;
}
}





/* max 710 */
@media (max-width: 710px) {
.wrapperPCN{  
display:block;
}
}





/* WRAPPER PC ______________________ */
.wrapperPC{
display:-webkit-box;  
display:-ms-flexbox;  
display:flex;
}



/* max 710 */
@media (max-width: 710px) {
.wrapperPC{  
border-bottom: 2px #2b4580 ridge;
}
}



/* max 575 */
@media (max-width: 575px) {
.wrapperPC{  
display:block;
}
}



/* WRAPPER GC ______________________ */
.wrapperGC{
box-sizing: border-box;
display:-webkit-box; 
display:-ms-flexbox; 
display:flex; 
-webkit-box-orient:vertical; 
-webkit-box-direction:normal; 
-ms-flex-direction:column; 
flex-direction:column;
}



/* max 992 */
@media (max-width: 992px) {
.wrapperGC{  
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
flex-direction:row;
padding-right:0px ;
width: 100%;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
}
}





/* max 575 */
@media (max-width: 575px) {
  .wrapperGC{  
display:block;
padding-bottom: 20px;
padding-left: 20px;
  }
}

/* BG-BLUE  ______________________ */
.bg-blue {
  
  
	background-color: #294382;
	background-image: url("../../assets/img/technical/blueBg.png");
	background-attachment: fixed;
	background-size: cover;
	background-position: bottom;
}
/* max 1200 */
    /* max 992 */
    /* max 768 */
    /* max 495 */
    @media (max-width: 495px) {
    
    }
</style>
