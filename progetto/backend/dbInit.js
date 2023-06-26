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
            name: "John Smith",
            breed: "Co-Founder and CEO",
            age: 40,
            description: "John Smith is a highly accomplished entrepreneur and visionary leader. With a proven track record of launching successful startups, he brings a wealth of experience to the venture. John's strategic thinking, deep industry knowledge, and ability to identify emerging trends make him an invaluable asset. As the CEO, he is responsible for setting the company's overall direction, driving growth, and fostering strategic partnerships.",
            image: "Clooney.jpeg",
        },
        {
            name: "Jane Doe",
            breed: "Chief Technology Officer,",
            age: 35,
            description: "Jane Doe is a tech-savvy innovator with a passion for leveraging technology to disrupt industries. With expertise in software development and cutting-edge technologies, she leads the company's technological initiatives. Jane's ability to translate ideas into scalable and user-friendly solutions is instrumental in developing innovative products and services. Her deep understanding of market trends and emerging technologies ensures the venture remains at the forefront of technological advancements.",
            image:"angelina.webp",
        },
        {
            name: "Sarah Thompson",
            breed: "Chief Financial Officer",
            age: 45,
            description: "Sarah Thompson is a seasoned finance professional with a strong background in investment and financial analysis. As the CFO, she oversees financial strategy, fundraising efforts, and manages the company's financial operations. Sarah's expertise in financial modeling, risk assessment, and valuation plays a crucial role in driving profitability and attracting investors. Her meticulous attention to detail and strategic financial planning ensure the venture's financial stability and growth.",
            image:"natalie.jpg",
        },
        {
            name: "Mark Johnson",
            breed: "Chief Marketing Officer,",
            age: 38,
            description: "Mark Johnson is a marketing and branding specialist known for his creative approach and deep understanding of consumer behavior. With a keen eye for market trends and a passion for building strong brands, he leads the company's marketing efforts. Mark's ability to craft compelling brand narratives, design effective marketing campaigns, and engage target customers ensures the venture's products and services resonate with the intended audience, driving customer acquisition and loyalty.",
            image:"cage.jpeg",
        },
        {
            name: "Emily Chen",
            breed: "Business Development Manager",
            age: 32,
            description: "Emily Chen is a highly motivated and results-driven professional with extensive experience in business development and strategic partnerships. Her vast network of industry contacts and strong negotiation skills make her instrumental in identifying growth opportunities and forging strategic alliances. Emily's ability to navigate complex business landscapes, build relationships, and create mutually beneficial partnerships fuels the venture's expansion and opens doors to new markets.",
            image:"dicaprio.jpeg",
        },
        {
            name: "David Rodriguez",
            breed: "Chief Operations Officer",
            age: 42,
            description: "David Rodriguez is a seasoned operations expert with a knack for optimizing processes and maximizing efficiency. With a background in supply chain management, he ensures smooth operations and seamless execution of the venture's initiatives. David's keen eye for identifying bottlenecks, streamlining workflows, and implementing scalable systems ensures the venture operates at peak performance, delivering products and services with precision and speed.",
            image:"Peter Parker.jpg",
        },
        {
            name: "Lisa Williams",
            breed: "Legal Counsel",
            age: 48,
            description: "Lisa Williams is a highly regarded legal professional specializing in corporate law and intellectual property. With her extensive experience and expertise, she protects the venture's legal interests and ensures compliance with regulatory requirements. Lisa's meticulous approach to legal matters, including contracts, patents, and trademarks, mitigates risks and safeguards the venture's assets. Her strategic guidance on legal issues allows the company to navigate complex legal landscapes with confidence.",
            image:"Clooney.jpeg",
        },
        {
            name: "Michael Brown",
            breed: "Head of Research and Development",
            age: 37,
            description: "Michael Brown is a research and development expert with a passion for innovation and a deep understanding of scientific advancements. With a strong background in product development, he leads the company's research efforts and drives the creation of cutting-edge technologies. Michael's ability to translate scientific concepts into practical applications, coupled with his strategic vision, enables the venture to stay ahead of the competition and develop groundbreaking products and solutions.",
            image:"keanu.jpeg",
         },
        {
            name: "Anna Nguyen",
            breed: "Project manager",
            age: 28,
            description: "Anna Nguyen is a highly organized and detail-oriented project manager with a knack for overseeing complex initiatives. Her strong leadership skills and ability to coordinate cross-functional teams ensure the successful execution of the venture's projects. Anna's expertise in project planning, risk management, and resource allocation allows her to deliver projects on time and within budget, driving operational efficiency and achieving key milestones.",
            image:"Clooney.jpeg",
        },
        {
            name: "Steven Lee",
            breed: "Venture advisor",
            age: 35,
            description: "Steven Lee is a seasoned investor and advisor with extensive experience in the venture capital industry. With a wealth of knowledge in strategic planning, market analysis, and scaling strategies, he provides valuable guidance to the venture. Steven's ability to identify emerging trends, assess market potential, and offer strategic insights helps the company make informed decisions and navigate the challenges of rapid growth. His network and industry connections open doors to new opportunities and potential investors.",
            image:"IdrisElba.jpeg",
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
            name: "Travel Experience Aggregator",
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

