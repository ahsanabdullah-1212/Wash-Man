<template>
    <div>
        <HeroSection />
        <LaundromatComponent/>
        <LaundryMachines/>
        <LaundromatAmenities/>
        <AboutWeb/>
        <CustomerTestominals/>
        <RecentBlogs/>
        <AskedQuestion/>
        <FrequentQuestion/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>
 import AboutWeb from '@/components/AboutWeb.vue';
import HeroSection from '@/components/HeroSection.vue';
import MainFooter from '@/components/MainFooter.vue';
import LaundromatComponent from '@/components/LaundromatComponent.vue';
import LaundromatAmenities from '@/components/LaundromatAmenities.vue';
import CustomerTestominals from '@/components/CustomerTestominals.vue';
import RecentBlogs from '@/components/RecentBlogs.vue';
import FrequentQuestion from '@/components/FrequentQuestion.vue';
import AskedQuestion from '@/components/AskedQuestion.vue';
import LaundryMachines from '@/components/LaundryMachines.vue';
export default {
    name: 'LandingPage',
    components: {
        AboutWeb,
        FrequentQuestion,
        AskedQuestion,
        RecentBlogs,
        CustomerTestominals,
        LaundromatAmenities,
        HeroSection,
        LaundromatComponent,
        MainFooter,
        LaundryMachines,
    },
};
</script>

<style>
/* Add styles here if needed */
</style>