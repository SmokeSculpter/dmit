import { useState } from "react";
import "./App.css";
import logo from './assets/nait-logo.png'

import Slides from "./components/slides";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App () {
  const [nav, setNav] = useState(1);
  const [counter, setCounter] = useState(1);

  const information = {
    "Software Development": {
      Name: "Software Development",
      Compensation: "",
      "Job Opportunities": "Test1",
      "Career Progression" : "",
      "Work Environment": "",
    },
    "Web Design": {
      Name: "Web Design",
      Compensation: "",
      "Job Opportunities": "Test2",
      "Career Progression" : "",
      "Work Environment": "",
    },
    "Game Programming": {
      Name: "Game Programming",
      Compensation: "",
      "Job Opportunities": "Test3",
      "Career Progression" : "",
      "Work Environment": "",
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
        <div onClick={() => setCounter(4)} className={counter == 5 ? "option o" : "option"}/>
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