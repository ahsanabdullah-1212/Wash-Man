<template>
    <div>
        <NavReviews/>
        <FrequentQuestion/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>
import FrequentQuestion from '@/components/FrequentQuestion.vue';
import NavReviews from '@/components/NavReviews.vue';
import MainFooter from '@/components/MainFooter.vue';
 
export default {
    name: 'TestiMonials',
    components: {
        NavReviews,
        FrequentQuestion,
        MainFooter,
    }
}
</script>