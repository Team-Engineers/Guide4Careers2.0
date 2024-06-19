import React, { useState } from 'react';
import img1 from "../../assets/images/session/1.png"
import img2 from "../../assets/images/session/2.png"
import img3 from "../../assets/images/session/3.png"
import img4 from "../../assets/images/session/4.png"
import img5 from "../../assets/images/session/1.png"
import { FaArrowLeft } from "react-icons/fa";

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [appointmentDetails, setAppointmentDetails] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const boxes = [
        {
            id: 1,
            title: 'Mass Communication',
            content: (
                <>
                    <h1 className='font-bold text-xl'>Mass Communication</h1>

                    <p className='text-base'>Mass communication is the process of transmitting information through various media channels to large and diverse audiences. It involves the creation and dissemination of messages designed to reach a broad public.</p>
                    <ul className="md:mt-4 md:mx-14  mt-1 mx-4flex flex-col gap-3 text-base list-disc ">
                        <li>Media channels: These are the tools used to transmit messages, such as television, radio, newspapers, magazines, the internet, social media, and even billboards.</li>
                        <li>Large audiences: Mass communication targets a vast number of people, reaching them simultaneously or over a short period.</li>
                        <li>Diverse audiences: The audience for mass communication can be heterogeneous, encompassing people from different backgrounds, cultures, and demographics.</li>
                        <li>One-way communication: Traditionally, mass communication has been a one-way street, with information flowing from a sender (media organization) to a receiver (the audience). However, the rise of social media has blurred these lines to some extent.</li>
                        <li>Content creation: Mass communication involves the production of various content formats, including news reports, documentaries, advertisements, entertainment programs, and educational materials.</li>
                    </ul>
                    <p className="mt-4 text-base">The study of mass communication examines the processes, effects, and social implications of information dissemination through mass media. It explores topics such as media ownership, media ethics, audience behavior, and the impact of media on society.</p>
                </>
            ),
            img: img1,
            color: "#B6CBFC"
        },
        {
            id: 2,
            title: 'English Honors',
            content: (
                < div className=''>
                    <h1 className='font-bold text-xl'>English Honors</h1>

                    <p className='text-base'>English Honors is a specialized undergraduate program that focuses on an in-depth study of the English language, literature, and related fields. Here are some key points about this program:</p>
                    <ul className="md:mt-4 md:mx-14  mt-1 mx-4flex flex-col gap-3 text-base list-disc ">
                        <li>Rigorous curriculum: The English Honors program typically involves a more rigorous and challenging curriculum compared to a regular English major.</li>
                        <li>Advanced coursework: Students take advanced-level courses in areas such as literary theory, criticism, linguistics, and specialized literary periods or genres.</li>
                        <li>Research opportunities: The program often includes opportunities for independent research, culminating in an honors thesis or capstone project.</li>
                        <li>Smaller class sizes: Honors courses tend to have smaller class sizes, allowing for more individualized attention and engaging discussions.</li>
                        <li>Faculty mentorship: Students in the English Honors program work closely with faculty mentors who guide them through coursework and research projects.</li>
                    </ul>
                    <p className="mt-4  text-base">Completing an English Honors program can prepare students for various careers in fields such as education, publishing, journalism, law, and academia, or for further graduate studies in English or related disciplines.</p>
                </div>
            ),
            img: img2,
            color: "#FCF1D3"
        },
        {
            id: 3,
            title: 'Liberal Arts',
            content: (
                <>
                    <h1 className='font-bold text-xl'>Liberal Arts</h1>

                    <p className='text-base'>Liberal Arts is a broad-based educational approach that emphasizes critical thinking, effective communication, and a well-rounded understanding of various disciplines. Here are some key aspects of a Liberal Arts education:</p>
                    <ul className="md:mt-4 md:mx-14  mt-1 mx-4flex flex-col gap-3 text-base list-disc ">
                        <li>Interdisciplinary studies: Students explore a wide range of subjects across the humanities, social sciences, natural sciences, and arts.</li>
                        <li>Analytical and communication skills: Emphasis is placed on developing strong analytical, critical thinking, writing, and communication abilities.</li>
                        <li>Cultural and historical perspectives: Students gain exposure to diverse cultural and historical perspectives, fostering a deeper understanding of different societies and contexts.</li>
                        <li>Flexibility and versatility: A Liberal Arts education provides a versatile foundation that prepares students for a variety of careers or graduate programs.</li>
                        <li>Lifelong learning: The focus is on cultivating intellectual curiosity and a love for learning that extends beyond the classroom.</li>
                    </ul>
                    <p className="mt-4 text-base">Graduates with a Liberal Arts degree often pursue careers in fields such as education, law, journalism, business, government, non-profit organizations, or continue their studies in specialized graduate programs.</p>
                </>
            ),
            img: img3,
            color: "#F7CDAD"
        },
        {
            id: 4,
            title: 'Graphic Designing',
            content: (
                <>
                    <h1 className='font-bold text-xl'>Graphic Designing</h1>

                    <p className='text-base'>Graphic Design is a creative field that combines art, technology, and communication to convey messages and ideas through visual means. Here are some key aspects of Graphic Design:</p>
                    <ul className="md:mt-4 md:mx-14  mt-1 mx-4flex flex-col gap-3 text-base list-disc ">
                        <li>Visual communication: Graphic designers use typography, images, color, and layout to create visually appealing and effective designs that communicate specific messages or concepts.</li>
                        <li>Branding and marketing: Graphic designers play a crucial role in developing and maintaining brand identities, creating logos, packaging, advertising materials, and other marketing collaterals.</li>
                        <li>Digital and print media: Designs can be created for various mediums, including websites, mobile apps, print publications, product packaging, and environmental graphics.</li>
                        <li>Problem-solving skills: Graphic designers must understand their clients' needs and objectives, and use their creative skills to find innovative and effective design solutions.</li>
                        <li>Software proficiency: Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign) is essential for modern graphic designers.</li>
                    </ul>
                    <p className="mt-4 text-base">Graphic designers can find employment in advertising agencies, design studios, publishing houses, corporate marketing departments, or work as freelancers or entrepreneurs.</p>
                </>
            ),
            img: img4,
            color: "#E8FFF8"
        },
        {
            id: 5,
            title: 'Architecture',
            content: (
                <>
                    <h1 className='font-bold text-xl'>Architecture</h1>
                    <p className='text-base'>Architecture is the art and science of designing and constructing buildings, structures, and environments that serve both functional and aesthetic purposes. Here are some key points about studying Architecture:</p>
                    <ul className="md:mt-4 md:mx-14  mt-1 mx-4flex flex-col gap-3 text-base list-disc ">
                        <li>Design principles: Students learn fundamental design principles, including spatial organization, form, and aesthetics, as well as building codes and regulations.</li>
                        <li>Technical skills: Architectural education includes courses in construction methods, materials, structural engineering, and building systems (such as HVAC, plumbing, and electrical).</li>
                        <li>Sustainability and environmental considerations: Emphasis is placed on designing energy-efficient, environmentally-friendly, and sustainable buildings and communities.</li>
                        <li>Computer-aided design (CAD): Students gain proficiency in using CAD software and other digital tools for architectural design and visualization.</li>
                        <li>History and theory: Study of architectural history, theory, and cultural influences helps students understand the context and evolution of the built environment.</li>
                    </ul>
                    <p className="mt-4 text-base">After completing an architectural degree, graduates can pursue careers as architects, urban planners, interior designers, construction managers, or continue their studies at the graduate level.</p>
                </>
            ),
            img: img5,
            color: "#EBFCFF"
        },
    ];

    const timeslots = [
        { value: '10:00 AM', label: '10:00 AM' },
        { value: '12:00 PM', label: '12:00 PM' },
        { value: '2:00 PM', label: '2:00 PM' },
        { value: '4:00 PM', label: '4:00 PM' },
        { value: '6:00 PM', label: '6:00 PM' },
        { value: '8:00 PM', label: '8:00 PM' },
        { value: '10:00 PM', label: '10:00 PM' },
    ];

    const handleTabChange = (tabIndex) => {
        closePopup();
        setActiveTab(tabIndex);

    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDetails = Object.fromEntries(formData.entries());
        setAppointmentDetails(formDetails);
        setActiveTab(3);
    };

    const handleBoxClick = (content) => {
        setPopupContent(content);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPopupContent('');
    };

    return (
        <div className='mt-20  w-full'>
            <h1 className='font-bold text-4xl px-10'>My Plan</h1>
            <div className="flex md:p-10 md:m-8 m-3 p-3 rounded-2xl border-2 bg-[#FFE6EF]  min-h-fit items-center justify-center flex-col">
                <div className="mb-4 font-bold md:text-xl flex w-full justify-between">
                    <button
                        className={`py-2 ${activeTab === 1
                            ? ' text-[#BD6E89]'
                            : ''
                            }`}
                        onClick={() => handleTabChange(1)}
                    >
                        Session 1
                        <div className={` absolute pt-1 mt-1 transition-all duration-500 h-[3px] w-[80px] bg-[#BD6E89] rounded-2xl ${activeTab === 1
                            ? ' h-[3px] w-[40px]'
                            : 'h-0 w-0'
                            }`} />
                    </button>
                    <button
                        className={`py-2 ${activeTab === 2
                            ? ' text-[#BD6E89]'
                            : ''
                            }`}
                        onClick={() => handleTabChange(2)}
                    >

                        Session 2
                        <div className={` absolute pt-1 mt-1 transition-all duration-500 h-[3px] w-[80px] bg-[#BD6E89] rounded-2xl ${activeTab === 2
                            ? ' h-[3px] w-[40px]'
                            : 'h-0 w-0'
                            }`} />
                    </button>
                    <button
                        className={`     py-2 ${activeTab === 3
                            ? ' text-[#BD6E89]'
                            : ''
                            }`}
                        onClick={() => handleTabChange(3)}
                    >

                        Session 3
                        <div className={` absolute pt-1 mt-1 transition-all duration-500 h-[3px] w-[80px] bg-[#BD6E89] rounded-2xl ${activeTab === 3
                            ? ' h-[3px] w-[40px]'
                            : 'h-0 w-0'
                            }`} />
                    </button>
                </div>
                {!showPopup && (
                    <div className='min-h-[500px] flex flex-col justify-center items-center w-full '>
                        {activeTab === 1 && (
                            <div className=' md:pr-20'>
                                <h1 className='text-xl font-bold'>Summary Plan</h1>
                                <h1 className='font-bold my-5'>Hello User,</h1>
                                <h1 className='mb-4 font-medium'>We hope that you had an Insightful session With cur experts. As discussed In the session, Varun, you can
                                    look at various career options such as Media & Communication, English Hons, Liberal Arts, Graphic
                                    Designing and Architecture.</h1>
                                <div className=" grid grid-cols-2 md:grid-cols-3 justify-center   items-center gap-4">
                                    {boxes.map((box) => (
                                        <div
                                            key={box.id}
                                            style={{ background: box.color }}
                                            className=" p-4 rounded  max-w-[200px] mb-10 flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => handleBoxClick(box.content)}
                                        > <img src={box.img} alt="" />
                                            <h3 className="font-bold max-sm:text-sm max-md:my-2 mb-2">{box.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        )}
                        {activeTab === 2 && (
                            <div className="w-full ">
                                <h1 className='font-bold text-lg md:text-2xl mx-3 max-md:text-center md:mx-8 mb-4'>Book an Appointment with Counsellor</h1>
                                <form onSubmit={handleFormSubmit} className="bg-white shadow-md md:w-[60%] mx-auto rounded-xl px-3 md:px-8 pt-6 pb-8 mb-4">
                                    <h2 className="text-2xl font-bold text-center mb-4">Book Appointment</h2>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                            Name *
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="Full Name"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                            Email Address *
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="example@gmail.com"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                                            Time *
                                        </label>
                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="time"
                                            name="time"
                                            required
                                        >
                                            <option value="">Select a time slot</option>
                                            {timeslots.map((slot) => (
                                                <option key={slot.value} value={slot.value}>
                                                    {slot.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-700 font-bold mb-2">Appointment Mode:</p>
                                        <div className="flex max-md:flex-wrap max-md: justify-center  items-center">
                                            <div className="mr-4 flex justify-center items-center">
                                                <input
                                                    className="form-radio h-5 w-5 text-indigo-600"
                                                    type="radio"
                                                    name="mode"
                                                    value="Video Call"
                                                    id="videoCall"
                                                    required
                                                />
                                                <label className="ml-2 text-gray-700" htmlFor="videoCall">
                                                    Video Call
                                                </label>
                                            </div>
                                            <div className="mr-4 flex justify-center items-center">
                                                <input
                                                    className="form-radio h-5 w-5 text-indigo-600"
                                                    type="radio"
                                                    name="mode"
                                                    value="Voice Call"
                                                    id="voiceCall"
                                                    required
                                                />
                                                <label className="ml-2 text-gray-700" htmlFor="voiceCall">
                                                    Voice Call
                                                </label>
                                            </div>
                                            <div className="mr-4 flex justify-center items-center">
                                                <input
                                                    className="form-radio h-5 w-5 text-indigo-600"
                                                    type="radio"
                                                    name="mode"
                                                    value="In Office"
                                                    id="inOffice"
                                                    required
                                                />
                                                <label className="ml-2 text-gray-700" htmlFor="inOffice">
                                                    In Office
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Book Appointment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {activeTab === 3 && (
                            <div className=" md:w-[60%] flex flex-col justify-center rounded md:px-8 pt-6 pb-8 mb-4">
                                <button className='w-[50%] mx-auto  shadow-lg bg-white rounded-md p-2 '>Schedule</button>
                                <div className='grid grid-cols-2 p-4 rounded-md bg-white my-10'>
                                    <div className="mb-4">
                                        <p className="font-bold">Name:</p>
                                        <p>{appointmentDetails.name}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="font-bold">Email:</p>
                                        <p>{appointmentDetails.email}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="font-bold">Time:</p>
                                        <p>{appointmentDetails.time}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="font-bold">Appointment Mode:</p>
                                        <p>{appointmentDetails.mode}</p>
                                    </div>
                                </div>

                                <div className='flex w-[80%] mx-auto ga-4 md:gap-10'>
                                    <button className='md:w-[50%] max-md:px-4 mx-auto  shadow-lg bg-white rounded-md p-2 '>Cancel</button>
                                    <button className='md:w-[50%] max-md:px-4 mx-auto  shadow-lg bg-white rounded-md p-2 '>Re-Schedule</button>

                                </div>

                            </div>
                        )}
                    </div>
                )}
                {showPopup && (
                    <div className=" flex justify-center item-center">
                        <button
                            className=" text-blue-500 btn btn-sm btn-circle btn-ghost   hover:text-black font-bold rounded"
                            onClick={closePopup}
                        >
                            <FaArrowLeft/>
                        </button>
                        <div className=" mx-2 rounded-lg">
                            <p className='text-2xl'>{popupContent}</p>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default TabComponent;