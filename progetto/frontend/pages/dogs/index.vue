<!--
    Page with the list of all the dogs.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <!--
            Form used to filter the list by age.
        -->
        
        <h1>OUR TEAM</h1>
        <h2> we are a team of people who invest in the future</h2>
        <div id="card-container">
            <Card v-for = "dog of dogs" :title = "dog.name" :subtitle = "dog.breed" :link = "'/dogs/' + dog.id" :img_link="`_nuxt/assets/img/people/${dog.name}.jpeg`" />
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
        const dogs = await $fetch(useRuntimeConfig().public.serverURL + "/dogs");
        
        return {
            dogs
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

    h1{
        color:  rgb(27, 103, 202);
    }

    h2{
        color:rgb(11, 139, 182);
    }


    
</style>