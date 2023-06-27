<template>
    <div class="card">
        <span class="title">{{ title }}</span>
        <NuxtLink :to = "link" ><button>Open description</button></NuxtLink>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'link'
        ]
    }
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        padding: 1px;
        width: 100%;
        height: 250px;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        width: fit-content;
        height: fit-content;
    }

    .title
    {
        font-size: 1.5em;
        font-weight: bold;
    }

    .button {
    background-color: #198991;
    border: 1px solid #198991;
    border-radius: 3px;
    color: #231e39;
    padding: 10px 25px;
}
    
</style>