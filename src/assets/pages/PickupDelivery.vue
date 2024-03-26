<template>
    <div>
        <pickupSchedule/>
        <DeliveryCharges/>
        <CustomerTestominals/>
        <JoinFamily/>
        <RecentBlogs/>
        <FrequentQuestion/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>
import RecentBlogs from '@/components/RecentBlogs.vue';
import JoinFamily from '@/components/JoinFamily.vue';
import DeliveryCharges from '@/components/DeliveryCharges.vue';
import MainFooter from '@/components/MainFooter.vue';
import pickupSchedule from '@/components/pickupSchedule.vue';
import CustomerTestominals from '@/components/CustomerTestominals.vue';
import FrequentQuestion from '@/components/FrequentQuestion.vue';
 
export default {
    name: 'PickupDelivery',
    components: {
        RecentBlogs,
        DeliveryCharges,
        JoinFamily,
        pickupSchedule,
        FrequentQuestion,
        CustomerTestominals,
        MainFooter,
    }
}
</script>