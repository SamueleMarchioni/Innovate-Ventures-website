import { loremIpsum } from "lorem-ipsum"

export default async (models) => {

    const areaModel = [
        {
            name: "Economy",
            number: 1,
            description: " A venture capital firm that invests in the economy focuses on supporting innovative startups and businesses that have the potential to drive economic growth. These investments often target companies operating in sectors such as technology, finance, manufacturing, and energy. The firm seeks out entrepreneurs with disruptive ideas or technologies that can create new markets, generate employment opportunities, and contribute to overall economic development. Investments in this area often involve funding early-stage startups, providing growth capital to expanding businesses, or participating in mergers and acquisitions."
        },
        {
            name: "Tourism",
            number: 2,
            description: " In the tourism sector, a venture capital firm seeks opportunities to invest in companies that are revolutionizing the travel and hospitality industry. This includes startups and businesses involved in travel technology, online booking platforms, accommodation services, destination management, and experience-based tourism. The firm looks for innovative solutions that enhance the travel experience, improve operational efficiency, and tap into emerging trends like sustainable tourism and personalized travel services. Investments in this area may support the development of new travel platforms, tourism infrastructure, or disruptive technologies that transform the way people explore and engage with the world."
        },
        {
            name: "Health",
            number: 3,
            description: " Investing in the health sector involves supporting startups and companies that are at the forefront of medical innovation, healthcare technology, and biotechnology. The venture capital firm seeks opportunities in areas such as digital health, telemedicine, medical devices, pharmaceuticals, and healthcare services. The focus is on investing in solutions that improve patient outcomes, enhance access to healthcare, lower costs, and address pressing challenges in the healthcare industry. Investments may target early-stage companies conducting groundbreaking research, developing cutting-edge medical technologies, or providing innovative healthcare services that have the potential to revolutionize the delivery of care."
        }
    ]

    const area0 = await models.Area.create(areaModel[0])
    const area1 = await models.Area.create(areaModel[1])
    const area2 = await models.Area.create(areaModel[2])

    const dogModel = [
        {
            name: "Tony Stark",
            breed: "Co-Founder",
            age: 55,
            description: "He co-founded Oltre after a journey in the social sector started in 2002 with the establishment of Fondazione Oltre, the first Italian Venture Philanthropy foundation. Previously, he worked for 20 years in the Venture Capital and Private Equity sector, as co-founder of B&S Private Equity and General Manager of Finnova, the first VC company in Italy.",
        },
        {
            name: "Bruce Wayne",
            breed: "Co-Founder",
            age: 38,
            description: "Bruce has over 15 years of experience in impact investing. He participated in the establishment and growth of this venture capital, where he followed the birth of the main companies financed by the company. He started his career in investment banking in Jp Morgan, Microcredito Lombardo and in the financial management of Gruppo Rinascente.",
            },
        {
            name: "Peter Parker",
            breed: "Chief Financial Officer",
            age: 45,
            description: "With a background in finance and extensive experience in investment banking, Peter brings a strong understanding of financial analysis and valuation to the table.",
            },
        {
            name: "Steven Strange",
            breed: "Business Development Manager",
            age: 40,
            description: "An industry expert with a vast network of contacts, Steven can leverage her connections to open doors and facilitate strategic partnerships for the venture.",
            },
        {
            name: "Diana Prince",
            breed: "Chief Technology Officer",
            age: 40,
            description: " An expert in technology and innovation, Jane has worked with various startups and has a keen eye for promising opportunities in emerging markets.",
            },
        {
            name: "Maria Hill",
            breed: "Chief Operations Officer",
            age: 32,
            description: "With a background in operations and supply chain management, Maria can provide valuable insights on optimizing processes and ensuring operational efficiency.",
            },
        {
            name: "Natasha Romanov",
            breed: "Head of Research and Development",
            age: 30,
            description: "With a strong background in research and development, Natasha brings expertise in product development and innovation, ensuring the venture stays ahead of the competition.",
            },
        {
            name: "Barry Allen",
            breed: "Project Manager",
            age: 42,
            description: "An experienced project manager, Barry can oversee the implementation of the venture's initiatives and ensure timely execution of key milestones",
             },
        {
            name: "Wanda Maximof",
            breed: "Chief Marketing Officer",
            age: 28,
            description: "As a marketing and branding specialist, Wanda can provide valuable insights on positioning the venture and reaching target customers effectively.",
             },
        {
            name: "Wade Wilson",
            breed: "Legal Counsel",
            age: 35,
            description: "A seasoned legal professional specializing in corporate law and intellectual property, Wade can offer guidance on legal matters and protect the venture's assets.",
        }
    ]
    
    const dog0 = await models.Dog.create(dogModel[0])
    const dog1 = await models.Dog.create(dogModel[1])
    const dog2 = await models.Dog.create(dogModel[2])
    const dog3 = await models.Dog.create(dogModel[3])
    const dog4 = await models.Dog.create(dogModel[4])
    const dog5 = await models.Dog.create(dogModel[5])
    const dog6 = await models.Dog.create(dogModel[6])
    const dog7 = await models.Dog.create(dogModel[7])
    const dog8 = await models.Dog.create(dogModel[8])
    const dog9 = await models.Dog.create(dogModel[9])

    const locationModel = [
        {
            name: "FinTech Revolution",
            city: "Economy",
            areaId: area0.id,
            dogId : dog0.id,
            description: "An early-stage startup developing a cutting-edge financial technology platform that disrupts traditional banking services by providing seamless digital banking solutions, advanced analytics, and personalized financial management tools.",
            most : 1,
            area_selection : 1
        },
        {
            name: "Clean Energy Innovators",
            city: "Economy ",
            areaId: area0.id,
            dogId : dog1.id,
            description: "A growth-stage company focused on renewable energy solutions, developing advanced solar panel technology and energy storage systems that increase efficiency and affordability, paving the way for a more sustainable future.",
            most : 0,
            area_selection : 1
        },
        {
            name: "Smart Manufacturing",
            city: "Economy ",
            areaId: area0.id,
            dogId : dog2.id,
            description: "A technology-driven startup that applies artificial intelligence and automation to optimize manufacturing processes, increasing productivity and reducing costs for industries ranging from automotive to electronics.",
            most : 0,
            area_selection : 1
        },
        {
            name: "E-commerce Disruptor",
            city: "Economy ",
            areaId: area0.id,
            dogId : dog3.id,
            description: "A rapidly growing e-commerce platform that leverages AI and machine learning algorithms to personalize the online shopping experience, improving product recommendations, and enhancing customer satisfaction.",
            most : 0,
            area_selection : 1
        },
        {
            name: "Supply Chain Optimization",
            city: "Economy ",
            areaId: area0.id,
            dogId : dog4.id,
            description: "A mature-stage company revolutionizing supply chain management through the use of blockchain technology, enabling transparent and secure transactions, enhancing traceability, and minimizing operational inefficiencies.",
            most : 1,
            area_selection : 1
        },
        {
            name: "Travel Experience Aggregator:",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog5.id,
            description: "An early-stage startup building a comprehensive online platform that aggregates unique travel experiences from various local providers, offering travelers a one-stop-shop for discovering and booking authentic and immersive experiences worldwide.",
            most : 1,
            area_selection : 2
        },
        {
            name: "Sustainable Accommodation",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog6.id,
            description: "A growth-stage company that focuses on eco-friendly accommodations, leveraging innovative construction techniques and renewable energy sources to develop sustainable hotels and resorts in popular tourist destinations.",
            most : 0,
            area_selection : 2
        },
        {
            name: "Adventure Tourism Tech",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog7.id,
            description: "A technology startup that develops a mobile app connecting adventure enthusiasts with local adventure tour operators, offering seamless booking, real-time itinerary updates, and safety features for adrenaline-fueled experiences.",
            most : 0,
            area_selection : 2
        },
        {
            name: "Virtual Travel Experiences",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog8.id,
            description: "A mature-stage company specializing in virtual reality (VR) travel experiences, offering individuals the opportunity to explore iconic landmarks and destinations from the comfort of their homes, providing an immersive and accessible travel alternative.",
            most : 0,
            area_selection : 2
        },
        {
            name: "Destination Management Platform",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog9.id,
            description: "An innovative platform that combines data analytics, AI, and personalized recommendations to assist destination management organizations in attracting tourists, optimizing marketing strategies, and enhancing visitor experiences.",
            most : 1,
            area_selection : 2
        },
        {
            name: "Telemedicine Platform",
            city: "Health ",
            areaId: area2.id,
            dogId : dog0.id,
            description: "An early-stage startup developing a telemedicine platform that connects patients with healthcare providers, enabling remote consultations, digital prescriptions, and remote monitoring, improving access to healthcare services.",
            most : 1,
            area_selection : 3
        },
        {
            name: "Personalized Medicine Diagnostics",
            city: "Health ",
            areaId: area2.id,
            dogId : dog1.id,
            description: "A growth-stage company leveraging genetic testing and data analysis to provide personalized diagnostic solutions, helping doctors tailor treatments to individual patients and optimize healthcare outcomes.",
            most : 0,
            area_selection : 3
        },
        {
            name: "AI-Driven Drug Discovery",
            city: "Health ",
            areaId: area2.id,
            dogId : dog2.id,
            description: "A technology-driven startup using artificial intelligence and machine learning algorithms to accelerate the drug discovery process, analyzing vast amounts of data and identifying potential drug candidates for various diseases.",
            most : 0,
            area_selection : 3
        },
        {
            name: "Digital Mental Health",
            city: "Health ",
            areaId: area2.id,
            dogId : dog3.id,
            description: "A mature-stage company offering digital mental health solutions, including mobile apps and online therapy platforms, providing accessible and personalized mental health support to individuals globally.",
            most : 0,
            area_selection : 3
        },
        {
            name: "Wearable Health Monitoring",
            city: "Health",
            areaId: area2.id,
            dogId : dog4.id,
            description: "An innovative company developing wearable devices that track and monitor vital signs, enabling individuals to proactively manage their health, detect anomalies, and share data with healthcare professionals for timely interventions.",
            most : 0,
            area_selection : 3
        }

    ]

    await models.Location.bulkCreate(locationModel)
}
