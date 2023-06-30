<template>
    <main>
       
        <h1> have a look on our top ranked projects</h1>

        <div id="card-container">
            <CardLoc v-for = "project of filtered" :title = "project.name" :subtitle = "project.city" :link = "'/projects/' + project.id" :img_link="`_nuxt/assets/img/projects/${project.name}.jpeg`" />
        </div>
       
    </main>
</template>

<script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: projects } = await useFetch(useRuntimeConfig().public.serverURL + '/projects')
    
    const filtered = computed(() => {
       
         const arr = []

        // Filtering the list
        for(let loc of projects.value) {
            if(loc.most == 1)
                arr.push(loc)
        }

        // Returning the filtered list
        return arr
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

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    .form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }

    </style>