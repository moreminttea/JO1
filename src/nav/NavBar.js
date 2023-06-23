
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./NavBar.scss";
import { Link } from "react-scroll";
import Home from '../components/Home';
import About from '../components/About';

export default function App() {
  const toSectionIntro = () =>
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });

  const sections = [
    {
      name: "home",
      url: "home",
      component: <Home/>
    },
    {
      name: "about",
      url: "about",
      component: <About/>
    },
  ]

  AOS.init({
    duration: 1200,
  })

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <div className="App">
      <header className="nav">
        <img src={require("../logo.svg").default} className="nav_logo" alt="nav logo"/>
        <div className="nav_sections_container">
          {sections.map((item) =>
            <nav className="nav_sections">
              <ul>
                <li>
                  <Link activeClass="active" smooth spy to={item.url}>
                    {item.name}
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      {
        sections.map((item) =>
          <div>
            <section id={item.url} className='parent'>
              {item.url !== "home" ? <div className="space_divider"></div> : ""}
              {item.url !== "home"
                ? <div data-aos="fade-up" className='child'>{item.component}</div>
                : <div className='child'>{item.component}</div>
              }
            </section>
          </div>
        )
      }      
    </div>
  );
}