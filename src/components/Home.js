import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FadeIn from 'react-fade-in';
import { config } from './Config';

function Home() {
    AOS.init({
        duration: 1200,
    })

    return (
        <div className="home">
            <FadeIn transitionDuration="1000">
                <div className="home_intro">
                    <p className="home_intro_description_header">MOREMINTTEA X JO1</p>
                    <p className="home_intro_description">a showcase of graphic and illustrative posters of JO1 songs</p>
                </div>
            </FadeIn>
            <div className="home_gallery_container">
                <div className="home_gallery">
                    {config.map((ep) =>
                        <div id={ep.url} className="home_gallery_section">
                            <div className="home_gallery_section_header">
                                <img src={ep.icon} className="home_gallery_section_header_logo" />
                                <div className="home_gallery_section_header_container">
                                    <span className="home_gallery_section_header_title">{ep.name.toUpperCase()}</span>
                                    <div className="home_gallery_section_header_line"></div>
                                </div>
                                <p className="home_gallery_section_header_description">{ep.description}</p>
                            </div>
                            {ep.songs.map((song) =>
                                <div className="home_gallery_section_graphics">
                                    <NavLink to={song.url} style={{ textDecoration: 'none' }} >
                                        <img src={song.img} className="home_gallery_section_graphics_img" />
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="home_nav">
                    {config.map((ep) =>
                        <Link smooth spy to={ep.url} className="home_nav_link">
                            {"❖ " + ep.name}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;