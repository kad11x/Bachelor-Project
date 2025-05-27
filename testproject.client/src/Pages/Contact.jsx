import React from 'react';
import Navbar from '../components/Navbar';


function Contact() {
    return (
        <div className="contact-page">
            <Navbar />
            <div className="team-section" style={{ fontFamily: "'Playfair Display', serif" }}>
                <h2>Meet the Team</h2>
                <div className="team-members">
                    {[
                        {
                            name: "Kadir Amini",
                            image: "/team/alice.jpg",
                            role: "Project Lead",
                            description: "Kadir Amini is the project leader for this thesis. He is currently studying computer ngineering.As the oldest member of the group, he brings the most experience, particularly n the job market.He has a strong interest in artificial intelligence(AI), technology, and tock trading.Currently, he resides in Gamlebyen, Fredrikstad."
                        },
                        {
                            name: "Sekou",
                            image: "/sekou.jpg",
                            role: "VR Developer",
                            description: `Sekou Kosiah is currently studying Computer Engineering while balancing two part-time
                                        jobs alongside his studies.He is a driving force within the group, always contributing to
                                        lifting the teams performance and dynamics. Sekou currently resides in Fredrikstad, and
                                        his main interests include football and technology.`
                        },
                        {
                            name: "Berat Murseli",
                            image: "/Berat.jpg",
                            role: "UX Designer",
                            description: `Berat Murseli is a dedicated Computer Engineering student based in Fredrikstad. With a
                            strong technical aptitude and extensive prior experience in coding, he plays a crucial role
                            in the group by providing technical expertise and support. His ability to navigate complex
                            programming challenges makes him an invaluable asset to the teams problem-solving
                            efforts.`
                        },
                        {
                            name: "Miran",
                            image: "/Miran.png",
                            role: "Software Engineer",
                            description: `Miran Nihad is pursuing a degree in Informatics with a specialization in Information Security.
                                His strong passion for cybersecurity drives his academic focus and contributions to the
                                group. Residing in Fredrikstad, he brings valuable insights into security-related aspects of
                                1
                                technology, ensuring a well-rounded perspective in the teams work. His analytical mindset
                                and attention to detail make him a key contributor to problem solving and risk assessment
                                within the project.`
                        },
                        {
                            name: "Arin",
                            image: "/team/eva.jpg",
                            role: "Clinical Advisor",
                            description: `Arin Penahi resides in Fredrikstad and is currently studying Informatics with a specialization
                            in the design and development of IT systems, focusing on Information Security. With a
                            background in Innovation and Project Management, he brings valuable leadership and
                            organizational skills to the group. His experience in project methodology and structured
                            problem-solving helps guide the team, ensuring effective planning and implementation
                            throughout the bachelor project.`
                        }
                    ].map((member, index) => (
                        <div className="team-member" key={index}>
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <p className="description">{member.description}</p>
                        </div>
                    ))}
                </div>
        
            </div>

            {/*<div className="container mt-5">
                <h1 className="text-center mb-4">Contact Us</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>*/}
        </div>
    );


}
export default Contact;