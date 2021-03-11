<template>
    <div class="tenderSubscription">
             <h3>Абонентское сопровождение</h3>
                <div class='wrapper'>
                    <TenderSubscriptionCheap />
                    <TenderSubscriptionExpensive />
                </div>  
    </div>
</template>


<script>
import TenderSubscriptionCheap from '@/components/tenders/tenderSubscriptionCheap/tenderSubscriptionCheap'
import TenderSubscriptionExpensive from '@/components/tenders/tenderSubscriptionExpensive/tenderSubscriptionExpensive' 
    export default {
        name: 'TenderSubscription',
        components: {
        TenderSubscriptionCheap,
        TenderSubscriptionExpensive,
  }
    }
</script>>


<style lang="css" scoped>

.tenderSubscription{
    border: 1px solid rgba(33, 64, 154, 1);
    padding-bottom: 20px;
    overflow: hidden;
    border-radius: 5px;
    -webkit-box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.29); 
    box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.29);
    margin-bottom: 20px;
margin-top:40px;
background: rgb(213,227,255);
background: linear-gradient(180deg, rgba(213,227,255,1) 0%, rgba(255,255,255,1) 60%);
}

.wrapper{
    display:flex;
}
/* max 767 */
@media (max-width: 767px) {
  .wrapper{  
display: block;

  }
}

.tenderSubscription h3{
    text-transform: uppercase;
    background: rgb(32,56,144);
background: linear-gradient(105deg, rgba(32,56,144,1) 32%, rgba(37,62,185,1) 91%);
    color: #ffffff;
    font-weight: 600;
    padding: 5px 5px 5px 10px;
    margin-bottom: 20px;
    letter-spacing: 2px;
}

</style>
