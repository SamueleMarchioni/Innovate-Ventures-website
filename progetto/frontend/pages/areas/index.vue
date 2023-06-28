<!--

import CardArea from '~/components/CardArea.vue';
    Page with the list of all the dogs.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
       
        <h1> Areas of investment</h1>
        <h2>
            At [Venture Capital Firm Name], we are driven by a strong belief in the power of innovation and the transformative potential of visionary entrepreneurs. With a deep understanding of the dynamic landscape of the investment world, we have carefully chosen our areas of investment to strategically position ourselves for long-term success and impactful returns.
            We recognize that focusing our efforts on specific sectors allows us to develop a deep expertise and a comprehensive understanding of the unique challenges and opportunities within those industries. This focused approach enables us to identify and support the most promising startups, providing them with the necessary resources, guidance, and capital to thrive and disrupt their respective markets.
        </h2>

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

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
        text-align: center;
    
    }




</style>