import "../slidesStyles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHtml5, faJs, faCss3, faPython, faPhp, faRust, faJava, faSwift } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Slides({ nav, display, information, counter }){

    return(
        <div style={{
            display: display ? "flex" : "none",
            transform: counter == 1 ? "translateX(0vw)" : counter == 2 ? "translateX(-100vw)" : counter == 3 ? "translateX(-200vw)" : counter == 4 ? "translateX(-300vw)" : "translateX(-400vw)"
        }} className="slides">
            <div className="slide">
                <div className="title-card">
                    <h1>{information.Name}</h1>
                    <div className="icons">
                        <FontAwesomeIcon id="icon-one" className="icon" size="5x" icon={nav == 1 ? faCode : nav == 2 ? faHtml5: faJava}></FontAwesomeIcon>
                        <FontAwesomeIcon id="icon-two" className="icon" size="5x" icon={nav == 1 ? faPython : nav == 2 ? faCss3 : faRust}></FontAwesomeIcon>
                        <FontAwesomeIcon id="icon-three"className="icon" size="5x" icon={nav == 1 ? faPhp : nav == 2 ? faJs : faSwift}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="content">
                    <div className="card">
                        <h1>Compesation</h1>
                    </div>
                    <div className="info">{information["Compensation"]}</div>
                </div>
            </div>
            <div className="slide">
                <div className="content">
                    <div className="card">
                        <h1>Job Opportunities</h1>
                    </div>
                    <div className="info">
                        {information["Job Opportunities"]}
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="content">
                    <div className="card">
                        <h1>Career Progression</h1>
                    </div>
                    <div className="info">
                        {information["Career Progression"]}
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="content">
                    <div className="card">
                        <h1>Work Environment</h1>
                    </div>
                    <div className="info">
                        {information["Work Environment"]}
                    </div>
                </div>
            </div>
        </div>
    );
};