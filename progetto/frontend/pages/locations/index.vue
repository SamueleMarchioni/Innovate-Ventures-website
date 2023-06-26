
<template>
    <main>

         <NuxtLink to = "/mostrelevant" class="linksyle"> 
            <div id="most_st">
               <h1> to see our top ranked projects, click here</h1>
            </div>
        </NuxtLink> 
        <h2>complete list of all our projects</h2>

        <div id = "form-container">
            <label for = "projects filter">let's choose your area of interest</label>
            <select v-model="area">
            <option value="0"> All projects</option>
            <option value="1"> Economy</option>
            <option value="2"> Tourism</option>
            <option value="3"> Health</option>
            </select>
        </div>
        
        <div id="card-container">
            <Card v-for = "location of filtered" :title = "location.name" :subtitle = "location.city" :link = "'/locations/' + location.id" />
        </div>
    
    </main>
</template>

<script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: locations } = await useFetch(useRuntimeConfig().public.serverURL + '/locations')
    
    const area = ref(0);

    const filtered = computed(() => {

        if(area.value == 0 )
            return locations.value
       
         const arr = []

        // Filtering the list
        for(let loc of locations.value) {
            if(loc.area_selection == area.value)
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
    }

    
    h1{
        color:  rgb(27, 103, 202);
    }

    h2{
        color:rgb(11, 139, 182);
    }
    
    #most_st
    {
        display: flex;
        flex-flow: column;
        padding: 10px;
        border: solid blue;
        width: fit-content;
        height: fit-content;
        background-color: rgb(245, 193, 96);
    }
    .linksyle{
        color: white;
        text-decoration: none;
    }
    #form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid blue;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;
        background-color:rgb(82, 200, 240);
        padding: 20px;
    }
</style>