<!--

import CardArea from '~/components/CardArea.vue';
    Page with the list of all the dogs.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
       
        <h1> here you can find our areas of investement</h1>
        <div id="card-container">
            <CardArea v-for = "area of areas" :title = "area.name" :link = "'/areas/' + area.id" :imm_link="`_nuxt/assets/img/${area.name}.jpeg`" />
        </div>
    </main>
</template>

<script>
    /*
        The defineNuxtComponent gets us access to the asyncData property.
        This is the first function that is called by nuxt when the page is called.
        We can use this to pre-load the data to make it available to the user.
    */
    export default defineNuxtComponent({
    async asyncData() {
        // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
        const areas = await $fetch(useRuntimeConfig().public.serverURL + "/areas");
        
        return {
            areas
        }
    }
})
</script>

<style>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }
    .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .card {
        margin-left: -10px;
        transition: margin-left 200ms;
    }

    .card:hover+card{
        margin-left: -1px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

</style>