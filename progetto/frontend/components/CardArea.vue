<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - link: link to the page description
-->
<template>
    <div class="card">
        <div class="image-container">
            <img class="img" :src="imm_link" alt="problemi"/>
        </div>
        <span class="title">{{ title }}</span>
        <NuxtLink :to = "link" class="linkstyle" >see more information</NuxtLink>
    </div>
    
</template>


<script setup>
    const props = defineProps(['title', 'link','imm_link'])   
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        padding: 2px;
        width: 100px;
        height: 100px;
    }
    
    .img
    {
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        width: auto;
        margin: auto;
        aspect-ratio: 1/1;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        padding: 10px;
        border: #231e39;
        width: fit-content;
        height: fit-content;
        align-items:center;
    }

    .title {
    margin: 10px 0;
}

.subtitle {
    margin: 5px 0;
    text-transform: uppercase;
}

 .linkstyle{
        color: #03bfcb;
}

</style>