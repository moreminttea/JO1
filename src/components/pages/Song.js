import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Song.scss';
import { config } from '../Config';

function Song() {
    let navigate = useNavigate();

    AOS.init({
        duration: 1200,
    })

    return (
        <div>
            {config.map((ep) =>
                ep.songs.map((s) =>
                    s.id.toLowerCase() === window.location.href.split("/")[window.location.href.split("/").length - 1]
                    &&
                    <div className="layout" >
                        <img src={s.img} className="layout_img" />
                        <div className="layout_info">
                            <div className="layout_info_header">
                                <p>{s.name}</p>
                                {s.alt_name
                                    ? <p className="layout_info_header_altname">{s.alt_name.toUpperCase()}</p>
                                    : <div></div>}
                            </div>
                            <div className="layout_info_header_bottom">
                                <p>{ep.name}</p>
                                <p>{'0' + s.no}</p>
                            </div>
                            <div className="layout_info_cd">
                                <div className="layout_info_cd_inner">
                                    <img src={ep.icon} className="layout_info_cd_inner_img" />
                                </div>
                            </div>
                            <div className="layout_info_quote">
                                {s.quote.split('*').map((lines) => <> {lines} <br /> </>)}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Song;