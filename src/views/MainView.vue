<template>
    <div class="main">
        <main_page></main_page>
    </div>
</template>

<script>
import main_page from '@/components/main_page.vue';


import cookies from "vue-cookies";
export default {
    name: 'MainPage',
    components: {
        main_page
    },
    mounted() {
        if (cookies.get(`token`) === null) {
            this.$router.push(`/`);
        }

    }
}
</script>