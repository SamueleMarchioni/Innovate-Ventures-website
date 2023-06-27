<!--
    Page description for a single dog.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group">
            <img v-bind:src="getSrc(dog.name)" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ dog.name }}</span></p>
                <p class = "data">Role: <span>{{ dog.breed }}</span></p>
                <p class = "data">Age: <span>{{ dog.age }}</span></p>
            </div>
        </div>
        
        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->

        <p id = "description" v-html = "newLineOnFullStop(dog.description)"></p>

      
         <h1 id="proj">projects supervised:</h1>
         
         <div id = "dog-card-container">
            <SmallCard v-for = "location of dog.locations" :link = "'/locations/' + location.id" :title = "location.name" :subtitle = "location.city"/>
        </div>
    </main>
</template>

<script setup>
    
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: dog } = await useFetch(useRuntimeConfig().public.serverURL + '/dogs/' + id)
    
    const getSrc = (name) => {
      const path = `/assets/img/people/${name}.jpeg`;
      const modules = import.meta.globEager("/assets/img/people/*.jpeg");
      return modules[path].default;
    };

</script>

<style>
    img {
    width: 300px;
    height: 400px;
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
        color:  rgb(11, 139, 182);
        
    }

    #description {
        padding: 0 20px 0 20px;
        font-size: 15pt;
        color: rgb(14, 144, 161);
        
     
    }
    #proj{
        color:  rgb(235, 134, 98);
        font-size: 20pt;
    }

    
</style>