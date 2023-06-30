<!--
    Page with the list of all the people.
    As described in the Card component, the same component was used for both person and project since they have the same structure.
-->
<template>
    <main>
        <!--
            Form used to filter the list by age.
        -->
        
        <h1>Our team</h1>
        <h2> At [Venture Capital Firm Name], our success is driven by the collective brilliance and diverse expertise of our exceptional team. Each member brings a unique set of skills, experiences, and perspectives, contributing to a dynamic and forward-thinking environment that fuels our ability to identify and support groundbreaking startups.

Our team is led by visionary leaders who have a proven track record of success in entrepreneurship, investment, and strategic guidance. With their wealth of experience, they provide invaluable insights and strategic direction, ensuring that our investment decisions align with our long-term objectives and deliver exceptional returns.</h2>
        <div id="card-container">
            <Card v-for = "person of people" :title = "person.name" :subtitle = "person.breed" :link = "'/people/' + person.id" :img_link="`_nuxt/assets/img/people/${person.name}.jpeg`" />
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
        const people = await $fetch(useRuntimeConfig().public.serverURL + "/people");
        
        return {
            people
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
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    .container {
        padding: 2px 16px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
    }

    

    
</style>