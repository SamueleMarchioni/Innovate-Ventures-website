<!--
    Page description for a single person.
    As described in the SmallCard component, the same component was used for both person and project since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group-person">
            
            <div>
                <img id="person-imm" v-bind:src="getSrc(person.name)" />
            </div>
            
            <div id = "data-container-person">
                <p class = "data-person"><b>Name:</b> <span>{{ person.name }}</span></p>
                <p class = "data-person"><b>Role:</b> <span>{{ person.breed }}</span></p>
                <p class = "data-person"><b>Age:</b> <span>{{ person.age }}</span></p>
            </div>
        </div>
        
        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->

        <p id = "description-person" v-html = "newLineOnFullStop(person.description)"></p>

      
         <h1 id="proj-person">Projects supervised:</h1>
         
         <div id = "person-card-container">
            <SmallCard v-for = "project of person.projects" :link = "'/projects/' + project.id" :title = "project.name" :subtitle = "project.city"/>
        </div>
    </main>
</template>

<script setup>
    
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: person } = await useFetch(useRuntimeConfig().public.serverURL + '/people/' + id)
    
    const getSrc = (name) => {
      const path = `/assets/img/people/${name}.jpeg`;
      const modules = import.meta.globEager("/assets/img/people/*.jpeg");
      return modules[path].default;
    };

</script>

<style>
    
    .info-group-person{
        display: grid; 
        align-items: top;
        grid-template-columns: 1fr 1fr;
        column-gap: 100px;
        margin-top:2%;
    }

    .data-person{
        font-size: 33px;
        text-align: left;
        margin-left:3%;
        color:#03bfcb;
    }

    #person-imm{
        max-width: 400px;
        max-height: 400px;
        aspect-ratio: 1/1;
    }
    
    #description-person {
        padding: 0 20px 0 20px;
        font-size: 18pt;
        color: #03bfcb;
        text-align: center;
        font-style: italic;
        align-items: top;
        
    }
    #proj-person{
        color:  rgb(235, 134, 98);
        font-size: 25pt;
    }

    
</style>