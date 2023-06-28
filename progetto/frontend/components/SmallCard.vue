<!--
    Smaller card to display information in the information page. The difference with the card component is that there is no image here.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->

<template>
    <div class="cardina">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <NuxtLink :to = "link" ><button>Go to the page</button></NuxtLink>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'subtitle',
            'link'
        ]
    }
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        padding: 2px;
        width: 250px;
        height: 250px;
    }

    .cardina
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        width: fit-content;
        height: fit-content;
        border:3px solid #03bfcb;
        background-color: #231e39;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);

        
    }

    .title
    {
        font-size: 2em;
        font-weight: bold;
    }

    

</style>