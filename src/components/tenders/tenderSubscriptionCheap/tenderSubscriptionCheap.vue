<template>
    <div class="tenderSubscriptionCheap">
              
<Price cost = '28000' />
<div class='wrapper '>   
              <ul>
                <li>Мониторинг актуальных закупок</li>
                <li>Регистрация в ЕИС</li>
                <li>Сопровождение закупок «под ключ»:
                  <ul>
                    <li>по 44-ФЗ — до 10 шт.</li>
                     <li>по 223-ФЗ — до 5 шт.</li>
                  </ul>
                 </li>
                <li>Подача жалоб в УФАС</li>
                <li>Консультации</li>
                <li>Помощь в получении БГ</li>
              </ul>
          </div>    
    </div>
</template>


<script>
import Price from '@/components/tenders/tenderSubscription/price/price'
    export default {
        name: 'TenderSubscriptionCheap',
          components: {Price}
    }
</script>>


<style lang="css" scoped>

.tenderSubscriptionCheap{
min-width: 50%;
border-right: 1px dotted rgba(33, 64, 154, 1);
}
/* max 767 */
@media (max-width: 767px) {
  .tenderSubscriptionCheap{  
border-right: 0px;
border-bottom: 1px dotted rgba(33, 64, 154, 1);
padding-top: 4px;

  }
}

.wrapper{
  padding-right: 20px;
}

</style>
