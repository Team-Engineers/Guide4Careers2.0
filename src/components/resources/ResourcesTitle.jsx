import hero from "../../assets/images/resources/Vector2.png";
import main from "../../assets/images/resources/main2.png";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ResourcesTitle = () => {
    const cardData2 = [
        {
            title: 'Engineering',
            content: [
                'Engineering is the application of scientific principles and mathematical techniques to solve practical problems. It encompasses a wide range of specialized fields, including civil, mechanical, electrical, and computer engineering, among others.',
                'Engineers design, develop, and test various products, systems, and structures, ensuring they meet the required specifications and standards. This includes everything from small electronic devices to large infrastructure projects.',
                'Disciplines within engineering include civil engineering, which focuses on infrastructure; mechanical engineering, which involves machines and mechanical systems; electrical engineering, which deals with electrical systems; and computer engineering, which integrates computer science with electronic engineering.',
                'Engineering plays a crucial role in advancing technology and improving quality of life by developing innovative solutions to complex problems. It drives progress in various industries, including healthcare, transportation, and manufacturing.',
                'Problem-solving, critical thinking, and analytical skills are essential for engineers to diagnose issues, develop solutions, and optimize processes. These skills are fundamental to the engineering design process.',
                'Ongoing education and professional development are important in this field to keep up with technological advancements and industry standards. Engineers often pursue certifications, attend workshops, and continue learning throughout their careers.',
            ],
        },
        {
            title: 'Computer Application & IT',
            content: [
                'Computer applications and IT involve the development, implementation, and maintenance of software and hardware systems. This field is critical in supporting the digital infrastructure of organizations and ensuring efficient operation of technology.',
                'This field covers areas such as programming, databases, networking, cybersecurity, and web development. Each area requires specialized knowledge and skills to manage and optimize computer systems effectively.',
                'IT professionals play a crucial role in managing and securing an organization\'s digital infrastructure. They ensure data integrity, protect against cyber threats, and maintain the functionality of IT systems.',
                'Skills in problem-solving, logical thinking, and continuous learning are essential. IT professionals must be able to troubleshoot issues, think logically to develop solutions, and stay current with emerging technologies.',
                'IT professionals work in various industries, including software companies, financial institutions, and healthcare organizations. Their expertise is needed to develop software, manage networks, secure data, and provide technical support.',
                'Staying up-to-date with rapidly evolving technologies is crucial in this field. IT professionals must continuously learn about new programming languages, software updates, security threats, and technological innovations.',
                'Opportunities exist in roles such as software developers, cybersecurity analysts, and IT support specialists. Each role requires a unique set of skills and knowledge, offering diverse career paths within the field of IT.',
            ],
        },
        {
            title: 'Sales',
            content: [
                'Sales involves promoting and selling products or services to customers. Sales professionals engage with potential buyers to understand their needs and offer solutions that meet those needs.',
                'Effective communication, persuasion, and negotiation skills are essential for success in sales. Sales professionals must be able to clearly convey the value of their products or services, persuade customers to make a purchase, and negotiate terms that benefit both parties.',
                'Understanding customer needs and providing solutions are key aspects of the sales process. Sales professionals must listen to their customers, identify their pain points, and offer products or services that address those issues.',
                'Sales professionals may work in various industries, such as retail, technology, or pharmaceuticals. Each industry has unique sales strategies and customer bases, requiring tailored approaches to selling.',
                'Building and maintaining strong customer relationships is crucial for long-term success. Sales professionals must foster trust and loyalty by consistently meeting customer needs and providing excellent service.',
                'Sales roles may involve tasks like prospecting, presentations, closing deals, and customer support. Each stage of the sales process requires different skills and strategies to move potential customers through the sales funnel.',
                'Continuous learning and adapting to market trends and customer preferences are important. Sales professionals must stay informed about industry trends, competitor activities, and changes in customer behavior to remain effective.',
            ],
        },
        {
            title: 'Ethical Hacking',
            content: [
                'Ethical hacking involves legally testing and evaluating the security of computer systems and networks. Ethical hackers use their skills to identify vulnerabilities and weaknesses in systems, helping organizations improve their cybersecurity defenses.',
                'Ethical hackers, also known as penetration testers, simulate real-world attacks to identify vulnerabilities. They use the same techniques as malicious hackers but with the organization\'s permission and for the purpose of strengthening security.',
                'This field requires in-depth knowledge of networking, programming, and cybersecurity principles. Ethical hackers must understand how systems work, how they can be exploited, and how to protect them against attacks.',
                'Ethical hackers help organizations strengthen their cybersecurity defenses and prevent data breaches. By identifying and addressing vulnerabilities, they reduce the risk of cyber attacks and protect sensitive information.',
                'Skills in problem-solving, critical thinking, and ethical decision-making are essential. Ethical hackers must be able to think like attackers to identify vulnerabilities and use their skills responsibly to protect systems.',
                'Ongoing training and certification are important to stay up-to-date with the latest hacking techniques and tools. Ethical hackers must continually learn about new threats and security measures to remain effective.',
                'Ethical hackers work in various industries, including government agencies, consulting firms, and technology companies. Their expertise is needed to protect a wide range of systems and data from cyber threats.',
            ],
        },
        {
            title: 'Architecture',
            content: [
                'Architecture involves the planning, designing, and construction of buildings and structures. Architects create functional and aesthetically pleasing designs that meet the needs of their clients and comply with building codes.',
                'Architects must consider factors such as aesthetics, functionality, safety, and sustainability. They balance these elements to create designs that are not only beautiful but also practical and safe for occupants.',
                'This field requires creativity, technical knowledge, and an understanding of building codes and regulations. Architects must be able to envision innovative designs and ensure they comply with all relevant standards.',
                'Architects may specialize in residential, commercial, or industrial projects. Each type of project has its own unique requirements and challenges, from designing homes to planning large commercial complexes.',
                'Strong visualization skills, attention to detail, and project management abilities are essential. Architects must be able to visualize their designs, manage the details of complex projects, and oversee the construction process.',
                'Ongoing education and staying updated with new materials, technologies, and design trends are important. Architects must continually learn about advancements in building materials, construction techniques, and design trends to remain competitive.',
                'Architects work closely with clients, engineers, contractors, and other professionals throughout the design and construction process. Effective collaboration and communication are key to successfully bringing a design to life.',
            ],
        },
        {
            title: 'Law',
            content: [
                'Law is the system of rules and regulations that govern society and protect individual rights. It provides a framework for resolving disputes, enforcing rights, and maintaining order.',
                'Legal professionals, such as lawyers and judges, interpret and apply laws. They represent clients, provide legal advice, and make decisions in legal disputes.',
                'This field requires strong analytical, research, and communication skills. Legal professionals must be able to analyze complex issues, conduct thorough research, and effectively communicate their findings and arguments.',
                'Areas of law include criminal law, civil law, corporate law, and many others. Each area focuses on different types of legal issues, from criminal offenses to business transactions.',
                'Legal professionals must stay up-to-date with changes in laws and regulations. Laws can change frequently, and staying informed is crucial for providing accurate legal advice and representation.',
                'Ethical conduct, critical thinking, and attention to detail are crucial in the legal profession. Legal professionals must adhere to high ethical standards, think critically about legal issues, and pay close attention to details to avoid errors.',
                'Lawyers may work in law firms, corporations, government agencies, or as independent practitioners. Each setting offers different opportunities and challenges, from representing individual clients to advising large organizations.',
            ],
        },
        {
            title: 'Life Science & Environment',
            content: [
                'Life science and environmental studies focus on understanding living organisms, their interactions, and their impact on the environment. This knowledge is essential for addressing environmental challenges and promoting sustainability.',
                'This field includes disciplines such as biology, ecology, environmental science, and conservation. Each discipline studies different aspects of life and the environment, from cellular biology to ecosystem dynamics.',
                'Research in this area contributes to understanding and addressing environmental challenges and sustainability issues. Scientists study topics such as climate change, biodiversity, and pollution to develop solutions for a sustainable future.',
                'Skills in scientific inquiry, data analysis, and critical thinking are essential. Professionals must be able to design and conduct experiments, analyze data, and draw conclusions based on their findings.',
                'Field work, laboratory experiments, and data collection are common activities in this field. Researchers often conduct studies in natural settings, collect samples, and analyze them in the lab.',
                'Professionals in this field work in various sectors, including academia, government agencies, and environmental organizations. Their work is crucial for developing policies, educating the public, and advancing scientific knowledge.',
                'Ongoing education and staying updated with new research and technologies are important for career growth. Professionals must keep up with scientific advancements and new methodologies to remain effective in their work.',
            ],
        },
        {
            title: 'Physical Science',
            content: [
                'Physical science involves the study of non-living systems, including physics, chemistry, and earth sciences. It seeks to understand the fundamental principles that govern the natural world.',
                'This field explores the fundamental laws and principles that govern the natural world. Scientists study topics such as the properties of matter, the behavior of energy, and the forces that shape the earth.',
                'Physical scientists conduct experiments, develop theories, and analyze data to understand phenomena. They use scientific methods to test hypotheses and advance our understanding of the universe.',
                'Areas of study include mechanics, thermodynamics, quantum physics, and materials science. Each area focuses on different aspects of physical phenomena, from the motion of objects to the behavior of particles.',
                'Strong mathematical and analytical skills, as well as attention to detail, are essential. Physical scientists must be able to perform complex calculations, analyze data, and ensure their work is accurate.',
                'Physical scientists may work in research laboratories, universities, or various industries. Their work can lead to technological innovations, new materials, and a deeper understanding of the natural world.',
                'Ongoing education and staying updated with new discoveries and technologies are crucial in this field. Scientists must continually learn about new theories, techniques, and technologies to advance their research.',
            ],
        },
        {
            title: 'Merchant Navy',
            content: [
                'The merchant navy is responsible for the transportation of goods and cargo by sea. It plays a vital role in global trade, moving goods between countries and continents.',
                'Merchant mariners work on various types of ships, including cargo ships, tankers, and container vessels. Each type of ship has its own unique operations and requirements.',
                'This field requires specialized training and certifications in areas such as navigation, ship operations, and maritime regulations. Mariners must be trained in safety procedures and maritime laws to ensure safe and efficient operations.',
                'Merchant navy professionals must be physically fit and able to work in challenging maritime environments. Life at sea can be demanding, requiring physical endurance and resilience.',
                'Strong teamwork, communication, and problem-solving skills are essential for successful operations. Mariners must work closely with their crew, communicate effectively, and solve problems that arise during voyages.',
                'Merchant navy careers offer opportunities for international travel and exposure to different cultures. Mariners often visit ports around the world, experiencing diverse cultures and environments.',
                'Ongoing training and adherence to safety protocols are crucial in this field to ensure safe and efficient operations. Mariners must continually update their skills and knowledge to stay safe and compliant with regulations.',
            ],
        },
        {
            title: 'Food and Agriculture Organization',
            content: [
                'The Food and Agriculture Organization (FAO) is a specialized agency of the United Nations. Its mission is to lead international efforts to defeat hunger and improve nutrition and food security.',
                'Its primary goal is to eliminate hunger, food insecurity, and malnutrition worldwide. The FAO works to ensure that people have regular access to enough high-quality food to lead active, healthy lives.',
                'The FAO works on improving agricultural productivity, sustainable management of natural resources, and rural development. It provides support and guidance to countries to improve their agricultural practices and policies.',
                'It provides technical assistance, policy advice, and knowledge-sharing to member countries. The FAO helps countries develop strategies and implement programs to enhance their agricultural sectors.',
                'Areas of focus include crop production, fisheries, forestry, and livestock management. The FAO addresses various aspects of food production and resource management to ensure sustainable practices.',
                'The FAO promotes sustainable agriculture practices and food security initiatives. It works to balance the need for increased food production with the preservation of natural resources.',
                'Professionals in this field work on research, policy development, and project implementation related to food and agriculture. They contribute to global efforts to combat hunger and promote sustainable agricultural practices.',
            ],
        },
        {
            title: 'Aviation',
            content: [
                'Aviation involves the operation, maintenance, and management of aircraft and air transportation systems. This field is essential for connecting people and goods across long distances quickly and efficiently.',
                'This field includes various roles such as pilots, air traffic controllers, aircraft mechanics, and aviation managers. Each role plays a critical part in ensuring the safety and efficiency of air travel.',
                'Strict training, certifications, and adherence to safety regulations are essential in the aviation industry. Aviation professionals must meet rigorous standards to ensure the safety of passengers and crew.',
                'Pilots must have excellent flying skills, decision-making abilities, and a deep understanding of aerodynamics and aircraft systems. They are responsible for the safe operation of aircraft during flights.',
                'Air traffic controllers play a critical role in ensuring safe and efficient air traffic management. They coordinate the movement of aircraft in the air and on the ground to prevent collisions and manage traffic flow.',
                'Aircraft mechanics are responsible for maintaining and repairing aircraft to ensure airworthiness. They perform regular inspections, diagnose issues, and make necessary repairs to keep aircraft in safe operating condition.',
                'The aviation industry requires professionals with strong problem-solving skills, attention to detail, and a commitment to safety. Every aspect of aviation relies on meticulous planning and execution to maintain high safety standards.',
            ],
        },
        {
            title: 'Medicine',
            content: [
                'Medicine is the field dedicated to the study, diagnosis, treatment, and prevention of diseases and injuries. Medical professionals work to improve health outcomes and enhance the quality of life for individuals and communities.',
                'Medical professionals, such as doctors, nurses, and specialists, work to promote and restore human health. They provide care through diagnosis, treatment, and preventive measures.',
                'This field requires extensive education, training, and a commitment to lifelong learning. Medical professionals must stay informed about the latest research, treatments, and best practices.',
                'Areas of medicine include general practice, surgery, pediatrics, oncology, and many specialized disciplines. Each area focuses on different aspects of health and requires specific expertise.',
                'Strong scientific knowledge, critical thinking, and empathy are essential for medical professionals. They must be able to analyze complex medical information, make informed decisions, and provide compassionate care.',
                'Medical professionals must adhere to ethical principles and patient confidentiality. They are entrusted with sensitive information and must maintain the highest standards of professionalism.',
                'Opportunities exist in various settings, including hospitals, clinics, research institutions, and private practices. Medical professionals can pursue diverse career paths, from clinical practice to medical research.',
            ],
        },
        {
            title: 'Animation & Graphics',
            content: [
                'Animation and graphics involve the creation of visual content through various digital techniques and tools. This field combines art and technology to produce engaging and dynamic visuals.',
                'This field includes areas such as 2D and 3D animation, visual effects, motion graphics, and digital illustration. Each area uses different techniques and software to create visual content.',
                'Animators and graphic designers use specialized software and artistic skills to bring ideas and stories to life. They create animations, illustrations, and visual effects for various media.',
                'Strong creativity, storytelling abilities, and an understanding of design principles are essential. Professionals must be able to create visually appealing and coherent content that communicates a message or story.',
                'Animation and graphics are used in various industries, including film, television, video games, advertising, and web design. Each industry has unique demands and requires tailored visual content.',
                'Professionals in this field must stay updated with the latest software, techniques, and industry trends. The tools and methods used in animation and graphics are constantly evolving.',
                'Collaboration with other creative professionals, such as writers and directors, is often required for successful projects. Effective teamwork and communication are key to producing high-quality visual content.',
            ],
        },
        {
            title: 'Design',
            content: [
                'Design involves the creation of visual concepts and solutions for products, services, or environments. Designers work to create aesthetically pleasing and functional designs that meet user needs.',
                'This field encompasses various disciplines, such as graphic design, product design, interior design, and user experience (UX) design. Each discipline focuses on different aspects of design and requires specific skills.',
                'Designers must balance aesthetic appeal with functionality and usability. They create designs that are not only visually attractive but also practical and user-friendly.',
                'Strong visual communication skills, creativity, and an understanding of design principles are essential. Designers must be able to convey ideas clearly and create compelling visual content.',
                'Designers often work closely with clients, stakeholders, and other professionals to develop and refine their designs. Collaboration is key to ensuring that designs meet client expectations and project requirements.',
                'Staying up-to-date with design trends, technologies, and user preferences is crucial for success. Designers must continuously learn about new tools, techniques, and trends to remain competitive.',
                'Designers may work in various industries, including advertising, marketing, fashion, and technology. Each industry has unique design needs and offers different opportunities for creative professionals.',
            ],
        },
        {
            title: 'Math\'s & Statistics',
            content: [
                'Mathematics and statistics involve the study of quantitative relationships, patterns, and data analysis. These fields provide the tools and methods for understanding and solving complex problems.',
                'This field provides the foundation for many scientific and technological advancements. Mathematical principles and statistical methods are used in various disciplines to drive innovation and discovery.',
                'Areas of study include algebra, calculus, geometry, probability theory, and statistical modeling. Each area focuses on different mathematical concepts and techniques.',
                'Strong analytical and problem-solving skills, as well as attention to detail, are essential. Professionals must be able to analyze data, identify patterns, and develop solutions to complex problems.',
                'Mathematicians and statisticians contribute to research and problem-solving in various industries and disciplines. Their work supports advancements in fields such as engineering, economics, and healthcare.',
                'Applications include finance, engineering, computer science, healthcare, and scientific research. Mathematical and statistical methods are used to analyze data, develop models, and make informed decisions.',
                'Ongoing education and staying updated with new mathematical techniques and computational tools are important. Professionals must continuously learn and adapt to new methodologies and technologies.',
            ],
        },
        {
            title: 'Defense',
            content: [
                'The defense sector is responsible for protecting a nation\'s sovereignty, territorial integrity, and national interests.',
                'This field includes various roles such as military personnel, intelligence analysts, and defense contractors.',
                'Strict training, discipline, and adherence to protocols and regulations are essential in the defense sector.',
                'Military personnel must possess physical fitness, leadership skills, and the ability to operate in challenging environments.',
                'Intelligence analysts play a critical role in gathering, analyzing, and disseminating intelligence information.',
                'Defense contractors provide specialized services, equipment, and support to military and government organizations.',
                'The defense sector requires professionals with strong decision-making abilities, strategic thinking, and a commitment to national security.',
            ],
        },
    ];
    
    const { title } = useParams();
    console.log(title)
    const decodedTitle = title.replace(/_/g, ' ');

    const cardData = cardData2.find((card) => card.title === decodedTitle);
    return (
        <div>
            <div className='md:min-h-[80vh] min-h-[50vh] relative  flex justify-center items-center '>
                <img className='w-screen  md:min-h-[80vh] min-h-[55vh]  -z-0' src={hero} alt="" />
                <div className="flex mbl:flex-row flex-col  w-full px-5 md:px-20 max-w-[1280px] absolute justify-between items-center  z-10 ">
                    <div>
                        <h1 className='text-[#3D5AF1] text-2xl max-md:pt-10  mbl:pb-10 font-bold md:text-3xl max-mbl:text-center items-center'>
                            <span className="text-black ">Career Guidance</span>
                        </h1>

                    </div>
                    <img className="md:max-w-[300px] max-w-[250px] max-md:mt-10" src={main} alt="" />
                </div>
            </div>
            <div>
                {cardData && (
                    <div>
                        <div className=" mb-5">
                        
                            <h1 className={`w-full flex gap-2 items-center md:text-3xl px-5 md:px-20  text-[#3E66DF]   text-3xl font-bold  `}>
                            <Link to={"/resources"}
                            className=" text-blue-500 btn btn-sm btn-circle btn-ghost  text-2xl  hover:text-black font-bold rounded"
                        >
                            <FaArrowLeft/>
                        </Link>
                            {decodedTitle}
                        </h1>
                        <div className=" mx-14 mt-5 h-[2px] bg-[#FFCF81]"/>
                        </div>
                        <div className="px-5 md:px-20 pb-10 flex flex-col gap-2 ">
                           {cardData.content.map((point, index) => (
                            <p key={index} className="text-black text-base">
                                {point}
                            </p>
                        ))} 
                        </div>
                        
                    </div>
                )}
            </div>

        </div>
    )
}

export default ResourcesTitle
