<!--
    Page description for a single person.
    As described in the SmallCard component, the same component was used for both person and project since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group">
            <img v-bind:src="getSrc(area.name)" />
            <div id = "data-container">
                <p class = "data"> <span>{{ area.name }}</span></p>
            </div>
        </div>
        <p id = "description" v-html = "newLineOnFullStop(area.description)"></p>

        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->
        <div id = "person-card-container">
            <SmallCard v-for = "project of area.projects" :link = "'/projects/' + project.id" :title = "project.name" :subtitle = "project.city"/>
        </div>
    </main>
</template>

<script setup>
    
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: area } = await useFetch(useRuntimeConfig().public.serverURL + '/areas/' + id)
    
    const getSrc = (name) => {
      const path = `/assets/img/${name}.jpeg`;
      const modules = import.meta.globEager("/assets/img/*.jpeg");
      return modules[path].default;
    };

</script>

<style>
    img {
    width: 300px;
    height: 300px;
    margin: 1%;
    }
   

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    
    .info-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .data {
        font-weight: bolder;
        font-size: 20pt;
        color:rgb(27, 103, 202);

    }

    .data span {
        font-weight: 100;
        font-size: 20pt;
        color:  rgb(27, 103, 202);
        
    }

    #description {
        padding: 0 20px 0 20px;
        font-size: 18pt;
        color: rgb(14, 144, 161);
        justify-content: center;
     
    }
</style>