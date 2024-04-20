<template>
    <div>
        <OrderDetail/>
        <FrequentQuestion/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>

import MainFooter from '@/components/MainFooter.vue';
import FrequentQuestion from '@/components/FrequentQuestion.vue';
import OrderDetail from '@/components/OrderDetail.vue';
export default {
    name: 'YourOrder',
    components: {
        FrequentQuestion,
        OrderDetail,
        MainFooter,

    },
};
</script>

<style>
/* Add styles here if needed */
</style>