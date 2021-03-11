<template>
    <div class="tenderSubscriptionExpensive">
                      
<div  v-bind:style='{ marginLeft: "30px" } ' ><PriceTitle line1 = 'Индивидуальный' line2 = 'тариф' /></div>
              <ul>
                <li>Мониторинг актуальных закупок</li>
                <li>Регистрация в ЕИС</li>
                <li>Сопровождение закупок «под ключ»<br><b>в&nbsp;неограниченном</b> количестве по 44-ФЗ и 223-ФЗ</li>
                <li>Подача жалоб в УФАС</li>
                <li>Консультации</li>
                <li>Помощь в получении БГ</li>
                <li>Просчет тендеров</li>
                  
              </ul>
        
 
    </div>
</template>


<script>
import PriceTitle  from '@/components/tenders/tenderSubscription/priceTitle/priceTitle'
    export default {
        name: 'tenderSubscriptionExpensive',
        components: {PriceTitle }}
</script>


<style lang="css" scoped>

.tenderSubscriptionExpensive{
min-width: 50%;
padding-right: 20px;

}

/* max 767 */
@media (max-width: 767px) {
  .tenderSubscriptionExpensive{  
padding-top: 20px;

  }
}

</style>
