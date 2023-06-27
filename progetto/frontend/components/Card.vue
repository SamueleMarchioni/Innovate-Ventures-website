<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->
<template>
    <div class="card">
        <div class="image-container">
            <img class="img" :src="img_link" alt="problemi"/>
        </div>
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <NuxtLink :to = "link" class="linkstyle" >see more information</NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'subtitle', 'link','img_link'])   
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        padding: 2px;
        width: 100px;
        height: 150px;
    }

     
    .card {
    background-color: #7ab3c5;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    color: #395ff3;
    padding-top: 30px;
    position: relative;
    width: 350px;
    max-width: 100%;
    text-align: center;
    height:auto;
    align-items: center;
}
    .card .img {
    border: 1px solid #0364cb;
    border-radius: 50%;
    padding: 7px;
    }

    * {
    box-sizing: border-box;
}


.title {
    margin: 10px 0;
    color: rgb(27, 103, 202);
}

.subtitle {
    margin: 5px 0;
    text-transform: uppercase;
    color: rgb(14, 90, 161);
}

 .linkstyle{
        color: rgb(229, 89, 38);
}

</style>