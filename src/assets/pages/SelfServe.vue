<template>
    <div>
        <AboutLaundromat/>
        <LaundromatAmenities/>
        <CustomerTestominals/>
        <AskedQuestion/>
        <FrequentQuestion/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>
import AboutLaundromat from '@/components/AboutLaundromat.vue';
import MainFooter from '@/components/MainFooter.vue';
import LaundromatAmenities from '@/components/LaundromatAmenities.vue';
import CustomerTestominals from '@/components/CustomerTestominals.vue';
import FrequentQuestion from '@/components/FrequentQuestion.vue';
import AskedQuestion from '@/components/AskedQuestion.vue';
 
export default {
    name: 'SelfServe',
    components: {
        AboutLaundromat,
        FrequentQuestion,
        AskedQuestion,
        CustomerTestominals,
        LaundromatAmenities,
        MainFooter,
          
    }
}
</script>