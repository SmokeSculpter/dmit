import { useState } from "react";
import "./App.css";
import logo from './assets/nait-logo.png'

import Slides from "./components/slides";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App () {
  const [nav, setNav] = useState(1);
  const [counter, setCounter] = useState(1);

  const information = {
    "Software Development": {
      Name: "Software Development",
      Compensation: 
      <div className="compensation">
        <table>
          <tr>
            <th>Out of NAIT</th>
            <th>5 Years Post Grad</th>
          </tr>
          <tr>
            <td>
              <p>Canada: $60, 000</p>
              <p>Alberta: $62, 500</p>
            </td>
            <td>
              <p>Canada: $145, 000</p>
              <p>Alberta: $140, 000</p>
            </td>
          </tr>
        </table>
      </div>,
      "Job Opportunities": 
      <div className="sd-jobs">
        <p className="sd-head">Software developer</p>
        <p className="sd-info">Design, write, and test code for systems and software to ensure efficiency.</p>
        <p className="sd-head">Mobile App Developer</p>
        <p className="sd-info">Specializes in creating applications for mobile devices like smartphones or tablets.</p>
        <p className="sd-head">ML/AI Developer</p>
        <p className="sd-info">Specializes in AI applications, integrating, and implementing, AI models algorithms.</p>
        <p className="sd-head">Systems Analysts</p>
        <p className="sd-info">Overlook computer systems hardware and software components and improve and design for its efficiency.</p>
        <p className="sd-head">Information Security Analyst</p>
        <p className="sd-info">Protects an organization's computer networks, systems and data from threats and security breaches.</p>
      </div>,
      "Career Progression" : 
      <div className="career-progression">
        <p>Junior Software Developer</p>
        <FontAwesomeIcon size="2x" icon={faArrowDown}></FontAwesomeIcon>
        <p>Senior Software Developer</p>
        <FontAwesomeIcon size="2x" icon={faArrowDown}></FontAwesomeIcon>
        <p>Principle Software Developer</p>
        <FontAwesomeIcon size="2x" icon={faArrowDown}></FontAwesomeIcon>
        <p>Chief Technology Officer</p>
      </div>,
      "Work Environment": 
      <div className="work-environment">
        <h3>Remote/Hybrid/In-person</h3>
        <p>Within Software Development, there is a lot of variation on whether you would like to work remotely, hybrid, or in-person. These positions also allow for all kinds of different working hours depending on your life-style. Tradition 9-5, flexible hour models, or even On-Call.</p>
        <h3>Individual/Team Based</h3>
        <p>Software development requires collaboration and communication. Team-based skills are vital in software development.</p>
        <h3>Scale of Operation</h3>
        <p>Could work in areas such as the hospital industry, retail, financial services, tech, etc.</p>
      </div>,
    },
    "Web Design": {
      Name: "Web Design",
      Compensation: 
      <div className="compensation">
                <table>
          <tr>
            <th>Out of NAIT</th>
            <th>5 Years Post Grad</th>
          </tr>
          <tr>
            <td>
              <p>Front-End Developer</p>
              <p>Canada: $55, 000</p>
              <p>Alberta: $59, 413</p>
            </td>
            <td>
              <p>Front-End Developer</p>
              <p>Canada: $78, 000</p>
              <p>Alberta: $81, 344</p>
            </td>
          </tr>
          <tr>
              <td>
                <p>Back-End Developer</p>
                <p>Canada: $65, 000</p>
                <p>Alberta: $62, 000</p>
              </td>
              <td>
                <p>Back-End Developer</p>
                <p>Canada: $84, 000</p>
                <p>Alberta: $94, 000</p>
              </td>
          </tr>
          <tr>
              <td>
                <p>Full Stack Developer</p>
                <p>Canada: $60, 000</p>
                <p>Alberta: $55, 643</p>
              </td>
              <td>
                <p>Full Stack Developer</p>
                <p>Canada: $81, 000</p>
                <p>Alberta: $85, 000</p>
              </td>
          </tr>

        </table>
      </div>,
      "Job Opportunities": 
      <div className="sd-jobs">
        <p className="sd-head">Front-End Developer</p>
        <p className="sd-info">Develops the client side of web applications. What the user sees and interacts with.</p>
        <p className="sd-head">Back-End Developer</p>
        <p className="sd-info">Develops the server side of web applications. What the user does not see. Databases, APIs, etc.</p>
        <p className="sd-head">Full Stack Developer</p>
        <p className="sd-info">Combination of both. Develops the client side and server side of web applications.</p>
      </div>,
      "Career Progression" : 
      <div className="career-progression">
        <p>Junior Developer</p>
        <FontAwesomeIcon size="2x" icon={faArrowDown}></FontAwesomeIcon>
        <p>Developer</p>
        <FontAwesomeIcon size="2x" icon={faArrowDown}></FontAwesomeIcon>
        <p>Senior Developer</p>
      </div>,
      "Work Environment": 
      <div className="work-environment">
        <h3>Remote/Hybrid/In-person</h3>
        <p>Remote, hybrid, and in-person roles are available for the three major disciplines in web design. However remote positions are quite competitive. ​</p>
        <h3>Individual/Team Based</h3>
        <p>Starting out in the industry developers will do more team-based work. As developers gain experience they will begin to work more individually. Smaller projects will require more individual work while larger projects will require more team-based work.</p>
        <h3>Scale of Operation</h3>
        <p>Business within this industry can vary in size substantially. From small operations that focus entirely on web development for small to medium size businesses to larger operations that include web development as just one part of there services. ​</p>
      </div>,
    },
    "Game Programming": {
      Name: "Game Programming",
      Compensation: 
      <div className="compensation">
        <table>
          <tr>
            <th>Out of NAIT</th>
            <th>5 Years Post Grad</th>
          </tr>
          <tr>
            <td>
              <p>Canada: $55, 000 - $67, 000</p>
              <p>Alberta: $52, 650</p>
            </td>
            <td>
              <p>Canada: $80, 000 - $115, 000</p>
              <p>Alberta: $85, 000 - $100, 000</p>
            </td>
          </tr>
        </table>
      </div>,
      "Job Opportunities":
      <div className="sd-jobs">
        <p className="sd-head">Game Programmer</p>
        <p className="sd-info">Builds core game systems like mechanics, physics, UI, and debugging across different roles.</p>
      </div>,
      "Career Progression" : 
      <div className="career-progression">
        <p>Junior Game Programmer</p>
        <FontAwesomeIcon size="2x" icon={faArrowDown}></FontAwesomeIcon>
        <p>Senior Game Programmer</p>
        <FontAwesomeIcon size="2x" icon={faArrowDown}></FontAwesomeIcon>
        <p>Lead Programmer</p>
        <FontAwesomeIcon size="2x" icon={faArrowDown}></FontAwesomeIcon>
        <p>Technical Director</p>
      </div>,
      "Work Environment": 
      <div className="work-environment">
        <h3>Remote/Hybrid/In-person</h3>
        <p>Many smaller studios or freelance developers offer remote/hybrid roles. Large studios often expect in-person.</p>
        <h3>Individual/Team Based</h3>
        <p>Game development is primarily team based, but some tasks are done alone.</p>
        <h3>Scale of Operation</h3>
        <p>Larger companies offer structure, stability, and bigger resources. Smaller teams offer creative freedom and flexibility but may not have enough resources.</p>
      </div>,
    }
  };

  return ( 
    <div id="container">
      <div id="header">
        {/* Nait logo */}
        <img id="logo" src={logo} alt="Nait Logo" style={{width: "50px", height: "65px"}}/>
        {/* Nav bar */}
        <div className="nav-bar">
          <div onClick={() => {setNav(1); setCounter(1)}} className={nav == 1 ? "section a" : "section"}>Software Development</div>
          <div>|</div>
          <div onClick={() => {setNav(2); setCounter(1)}} className={nav == 2 ? "section a" : "section"}>Web Design</div>
          <div>|</div>
          <div onClick={() => {setNav(3); setCounter(1)}} className={nav == 3 ? "section a" : "section"}>Game Programming</div>
        </div>
      </div>
      {/* Slides */}
      <div className="slides-bar">
        <FontAwesomeIcon onClick={() => setCounter(counter == 1 ? 5 : counter - 1)} className="arrow" style={{color: "#00a0df", marginRight: "10px"}} icon={faArrowLeft}/>
        <div onClick={() => setCounter(1)} className={counter == 1 ? "option o" : "option"}/>
        <div onClick={() => setCounter(2)} className={counter == 2 ? "option o" : "option"}/>
        <div onClick={() => setCounter(3)} className={counter == 3 ? "option o" : "option"}/>
        <div onClick={() => setCounter(4)} className={counter == 4 ? "option o" : "option"}/>
        <div onClick={() => setCounter(5)} className={counter == 5 ? "option o" : "option"}/>
        <FontAwesomeIcon onClick={() => setCounter(counter == 5 ? 1 : counter + 1)} className="arrow" style={{color: "#00a0df", marginLeft: "10px"}} icon={faArrowRight}/>
      </div>
      {/* Slides bar */}
      <Slides nav={nav} display={nav == 1} information={information["Software Development"]} counter={counter}></Slides>
      <Slides nav={nav} display={nav == 2} information={information["Web Design"]} counter={counter}></Slides>
      <Slides nav={nav} display={nav == 3} information={information["Game Programming"]} counter={counter}></Slides>
    </div>
   );
}

export default App;