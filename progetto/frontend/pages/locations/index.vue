
<template>
    <main>

        <div class="titolo"> 
        <h1>OUR PROJECTS</h1>
        </div> 
        <h2>
            Our venture capital firm aims to support and nurture innovative ideas, drive market disruption, and contribute to the growth and development of impactful businesses, by investing in projects within these sectors:
            <li> <u>Market Potential:</u> We have identified these sectors as having significant market potential and opportunities for growth. By investing in projects within these sectors, we aim to capitalize on the demand for innovative solutions and services that cater to the evolving needs of consumers and businesses.</li>
            <li><u>Disruption and Innovation</u>: We are drawn to projects that bring disruptive and innovative ideas to their respective industries. These projects leverage advanced technologies, such as AI, machine learning, and blockchain, to transform traditional business models and processes, creating new opportunities and efficiencies.</li>
            <li><u>Addressing Key Challenges</u>: The projects we have chosen tackle key challenges and pain points within their industries. Whether it's revolutionizing financial services, optimizing supply chain management, enhancing the travel experience, or improving healthcare outcomes, these projects aim to address pressing issues and create value for their target markets.</li>
            <li><u>Sustainability and Social Impact</u>: We recognize the growing importance of sustainability and social impact in today's business landscape. Therefore, we have selected projects that align with sustainable practices, such as clean energy solutions and eco-friendly tourism initiatives. Additionally, projects within the health sector focus on improving access to healthcare services and enhancing the well-being of individuals.</li>
            <li><u>Experienced and Passionate Teams</u>: A critical factor in our investment decision is the quality and expertise of the teams behind these projects. We look for visionary entrepreneurs and experienced professionals who are passionate about their industries and have a track record of execution and success.</li>
        </h2>

        <NuxtLink to = "/mostrelevant" class="lin"> 
            <div id="most_st">
               <h1> to see our top ranked projects, click here</h1>
            </div>
        </NuxtLink> 

        <div id = "form-container">
            <label for = "projects filter"><h3>By area of interest</h3></label>
            <select v-model="area">
            <option value="0"> All projects</option>
            <option value="1"> Economy</option>
            <option value="2"> Tourism</option>
            <option value="3"> Health</option>
            </select>
        </div>
        
        <div id="card-container">
            <CardLoc v-for = "location of filtered" :title = "location.name" :subtitle = "location.city" :link = "'/locations/' + location.id" :img_link="`_nuxt/assets/img/projects/${location.name}.jpeg`" :button="false"/>
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
        gap: 7px;
    }

    
    .titolo{
        margin-top: 10px;
        color:  rgb(27, 103, 202);
    }

    h2{
        color:rgb(27, 103, 202);
        text-align: left;
        margin:1%;
        gap:2px;
    }
    
    #most_st
    {
        display: flex;
        flex-flow: column;
        padding: 10px;
        border: 2px solid rgb(27, 103, 202);
        width: fit-content;
        height: fit-content;
        background-color: rgb(82, 200, 240);
        border-radius: 10px;
    }
    .lin{
        color: white;
        text-decoration: none;
    }

    .lin:hover{
        color: grey;
    }
    #form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid rgb(27, 103, 202);
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        color: rgb(14, 43, 161);
        gap: 20px;
        background-color:rgb(82, 200, 240);
        padding: 20px;
        font-size:18pt;
    }
</style>