import React from 'react';
import './About.scss';
import pfp from './img/about.png';

const links = [
    {
        header: "Contacts",
        items: [
            {
                name: "Email",
                url: "mailto:memohr@ucdavis.edu",
            },
        ]
    },
    {
        header: "Links",
        items: [
            {
                name: "Github",
                url: "https://github.com/moreminttea",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/mindy-mohr-264127153/",
            },
            {
                name: "Resume",
                url: "https://drive.google.com/file/d/1WwksOBYzLVA-BjKCDqorq_rEVIeuVSPC/view?usp=sharing",
            },
        ]
    },
    {
        header: "Sites",
        items: [
            {
                name: "Main / Portfolio",
                url: "https://moreminttea.github.io/",
            },
            {
                name: "Kingpin",
                url: "https://moreminttea.github.io/kingpin/#/",
            },
        ]
    },
]

function About() {
    return (
        <div className="sectionAbout">
            <div className="about_display">
                <div className="about_display_container">
                    <img src={pfp} className="about_display_content_img" alt="about pfp" />
                    <div className="about_display_description">
                        <div className="about_display_description_container">
                            <div className="about_display_description_content_header">ABOUT</div>
                            <div className="about_display_description_content">
                                Hi! I'm Mindy, a UC Davis alumni with a Bachelor's in Computer Science.
                                I previously worked as a UX intern at Cisco AppD and am currently seeking new-grad web / UIUX developer, designer, or frontend engineer positions.
                                <br></br><br></br>
                                This site was created to showcase my graphic and illustrative design work with JO1 (global Japanese pop group)'s songs as the subject. 
                            </div>
                        </div>
                    </div>
                    <div className="about_display_content">
                        <div>
                            <div className="about_display_content_links">
                                {
                                    links.map((link) =>
                                        <div>
                                            <h className="about_display_content_links_header">{link.header.toUpperCase()}</h>
                                            <div className="about_display_content_links">
                                                {link.items.map((i) =>
                                                    <a target="_blank" rel="noopener noreferrer" href={i.url} className="about_display_content_links_name" style={{ textDecoration: 'none' }}>
                                                        {i.name}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                <div className="about_display_container">
                    <div className="about_display_content">
                        
                        <div className="about_display_content_links">
                            {
                                contacts.map((item) =>
                                    <div className="about_display_content_links_item">
                                        <div className="diamond about_diamond"><div className="diamond_inner about_diamond_inner"></div></div>
                                        <a target="_blank" rel="noopener noreferrer" href={item.url} className="about_display_content_links_name" style={{ textDecoration: 'none' }}>
                                            {item.name}
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="about_display_description">
                    <div className="about_display_description_container">
                        <div className="about_display_description_content">
                            Hi! I'm Mindy, a UC Davis alumni with a Bachelor's in Computer Science.
                            I previously worked as a UX intern at Cisco AppD and am currently seeking new-grad web / UIUX developer, designer, or frontend engineer positions.
                            <br></br><br></br>
                            I have a great passion for art and design and like to combine my interests with coding to create interactive visual products! But if I'm not coding, you will see me listening to JO1, drawing on my iPad, playing mobile games, or reading manga/webtoons! 
                            <br></br><br></br>
                            Feel free to connect with me or email me for my resume / any inquiries about my work. Looking forward to it, and thanks for visiting!
                        </div>
                    </div>
                </div>
                */}
                {/*<div className="about_display_description">
                    <div className="about_display_description_container">
                        <div className="about_display_description_content">Experience: UX Intern・Co-op @ Cisco AppD (September - December 2022)</div>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}

export default About;