<template>
    <div>
        <washingFold/>
        <LaundromatAmenities/>
        <CustomerTestominals/>
        <LaundryMachines2/>
        <AskedQuestion/>
        <FrequentQuestion/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>
import MainFooter from '@/components/MainFooter.vue';
import LaundryMachines2 from '@/components/LaundryMachines2.vue';
import LaundromatAmenities from '@/components/LaundromatAmenities.vue';
import CustomerTestominals from '@/components/CustomerTestominals.vue';
import FrequentQuestion from '@/components/FrequentQuestion.vue';
import AskedQuestion from '@/components/AskedQuestion.vue';
import washingFold from '@/components/washingFold.vue';
 
export default {
    name: 'WashDry',
    components: {
        LaundryMachines2,
        FrequentQuestion,
        washingFold,
        AskedQuestion,
        CustomerTestominals,
        LaundromatAmenities,
        MainFooter,
    }
}
</script>