<template>
    <div>
        <MainContact/>
        <MainFooter/>
        <router-view/>
    </div>
</template>
<script>

import MainFooter from '@/components/MainFooter.vue';
import MainContact from '@/components/MainContact.vue';
export default {
    name: 'FAQ',
    components: {
        MainContact,
        MainFooter,

    },
};
</script>

<style>
/* Add styles here if needed */
</style>