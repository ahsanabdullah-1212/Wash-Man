<template>
    <div>
        <AskedQuestion/>
        <FrequentQuestion/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>

import MainFooter from '@/components/MainFooter.vue';
import FrequentQuestion from '@/components/FrequentQuestion.vue';
import AskedQuestion from '@/components/AskedQuestion.vue';
export default {
    name: 'FAQ',
    components: {
        FrequentQuestion,
        AskedQuestion,
        MainFooter,

    },
};
</script>

<style>
/* Add styles here if needed */
</style>