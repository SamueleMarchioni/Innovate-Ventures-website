<!--
     Home page
-->
<template>
    <main>

        <img id = "main-img" src = "~/assets/img/uuu.webp" />

    <h1>
    XYZ VENTURE CAPITAL
    </h1>

    <h3>
        "XYZ Venture Capital is a leading investment firm specializing in funding and nurturing early-stage and growth-stage startups. With a proven track record of successful investments and a deep understanding of emerging technologies and market trends, we provide strategic capital and invaluable guidance to help promising entrepreneurs turn their innovative ideas into thriving businesses.

        At XYZ Venture Capital, we believe in supporting visionary founders who are passionate about disrupting industries and solving complex challenges. Our experienced team of investment professionals brings a wealth of industry expertise and a vast network of connections to help our portfolio companies accelerate their growth and achieve their full potential.

        We take a hands-on approach to investing, actively partnering with entrepreneurs to provide strategic guidance, operational support, and access to our extensive network of industry experts, mentors, and corporate partners. We tailor our support to the unique needs of each portfolio company, assisting with business strategy, market expansion, talent acquisition, and fundraising, among other key areas.

        Our investment focus spans across sectors such as technology, healthcare, consumer products, fintech, and clean energy, among others. We seek out companies with disruptive business models, defensible intellectual property, and strong growth potential. By leveraging our deep industry knowledge and rigorous due diligence process, we identify high-potential investment opportunities that align with our investment thesis and have the potential to generate significant returns.

        At XYZ Venture Capital, we not only invest capital but also foster a collaborative and vibrant ecosystem where entrepreneurs can learn from one another, share best practices, and access resources that fuel their success. We believe in building long-term partnerships based on trust, integrity, and shared goals.

        Join us on this exciting journey of innovation and entrepreneurship as we work together to shape the future and create lasting value for our investors, portfolio companies, and the broader community."
    </h3>
            
       

        <NuxtLink to = "/mostrelevant" class="linksyle"> 
            <div id="most_st">
               <h1> to see our top ranked projects, click here</h1>
            </div>
        </NuxtLink> 
        


    </main>
</template>

<style>
    #main-img {
    width: 30%;
    max-width: 1000px;
    height: auto;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #most_st
    {
        display: flex;
        flex-flow: column;
        padding: 10px;
        border: solid blue;
        width: fit-content;
        height: fit-content;
        background-color: rgb(96, 240, 245);
    }
    .linksyle{
        color: white;
        text-decoration: none;
    }
</style>