import React from 'react'
import "./Card.css"
import linkIcon from "../images/icons8-linkedin-30.png"


export default function CardBody() {
    return (
        <div>
            <div className="cardBodyNameDiv">
                <h2>Nethmi Ahinsa Fernando</h2>
                <h3>Athlete - Freestyle wrestling</h3>
                <a href="https://www.the-sports.org/nethmi-ahinsa-fernando-poruthotage-freestyle-wrestling-spf696183.html" target="_blank" rel="noreferrer" >sports.org/nethmi-ahinsa</a>
            </div>

            <div className="cardBodyBtnDiv">
                {/* <button onClick={https://www.linkedin.com/in/nethmi-ahinsa-8512b6101/?originalSubdomain=lk}></button> */}
                <a href="https://www.linkedin.com/in/nethmi-ahinsa-8512b6101/?originalSubdomain=lk" target="_blank" rel="noreferrer">

                    <button id="bt" ><span>LinkedIn</span> <img src={linkIcon} alt="" /></button>
                </a>


            </div>
            <div className="cardBodyParagraphDiv">
                <h2>About</h2>
                <p>
                    Nethmi Ahinsa Fernando Poruthotage is a Sri Lankan wrestler. She won a bronze medal in the 2022 Commonwealth Games. By winning a bronze medal in the Women's 57 kg event, it marked Sri Lanka's first ever medal in the sport of wrestling and becoming the youngest ever Sri Lankan medalist at the Commonwealth Games.
                </p>
            </div>

        </div>
    )
}
