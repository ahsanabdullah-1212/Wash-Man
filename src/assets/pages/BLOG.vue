<template>
    <div>
        <BlogWeb/>
        <FrequentQuestion/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>
 import BlogWeb from '@/components/BlogWeb.vue';
import MainFooter from '@/components/MainFooter.vue';
import FrequentQuestion from '@/components/FrequentQuestion.vue';
export default {
    name: 'PickupDelivery',
    components: {
        BlogWeb,
        FrequentQuestion,
        MainFooter,
    }
}
</script>