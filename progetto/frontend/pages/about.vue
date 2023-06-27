<!--
    About us page
-->
<template>
    <!--
        Instead of having the two structures written directly on the page, it was preferred to use components as they had the same layout.
        This also allows to have a much cleaner and easy to read 'code'
    -->
    <main>
        

        <TextImage description = "[Venture Capital Firm Name] is a leading venture capital firm dedicated to supporting and empowering early-stage and high-growth companies on their journey to success. With a passion for innovation and a commitment to nurturing entrepreneurial talent, we strive to make a lasting impact on the businesses we invest in and the industries they operate in. " :isReverse = true image="_nuxt/assets/img/uuu.webp"/>
        <h1> About Healtcare</h1>
        <TextImage description = "With a deep understanding of the unique challenges and opportunities in the healthcare sector, our experienced team of investment professionals brings together a wealth of expertise, industry knowledge, and a robust network of strategic partners. We strive to identify and partner with exceptional entrepreneurs who are developing groundbreaking technologies, transformative therapies, digital health solutions, and disruptive business models." image="_nuxt/assets/img/Health.jpeg" /> 
        <h1> About Economy</h1>
        <TextImage description="At [Venture Capital Firm Name], we believe that innovation is the key driver of economic growth. We actively seek out companies with disruptive business models, groundbreaking technologies, and novel approaches that have the potential to transform industries and create sustainable value. By investing in these visionary enterprises, we play a vital role in fueling economic expansion, driving job creation, and fostering entrepreneurial ecosystems." :isReverse=true image="_nuxt/assets/img/Economy.jpeg"></TextImage>
        <h1> About Tourism</h1>
        <TextImage description="Our investment philosophy is centered around supporting companies across various segments of the tourism industry, including travel technology, accommodations, experiences, destination marketing, and sustainable tourism initiatives. By partnering with innovative businesses in these areas, we aim to drive positive change, boost economic growth, and contribute to the overall development of the tourism ecosystem." image="_nuxt/assets/img/Tourism.jpeg"></TextImage>
    </main>
</template>

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .h1 {
        color: aqua;
    }
</style>