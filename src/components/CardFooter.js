import React from 'react'
import "./Card.css"
import wikiIcon from "../images/FLogoWikip.png"
import PapareIcon from "../images/FLogoPapare.png"
import FLogoOca from "../images/FLogoOca.png"


export default function CardFooter() {
  return (
    <div className='footerDiv'>
      <a href="https://en.wikipedia.org/wiki/Nethmi_Poruthotage" target="_blank" rel="noreferrer">
        <button id="wikiIcon" ><img src={wikiIcon} alt="" /></button>
      </a>
      <a href="https://www.thepapare.com/commonwealth-games-birmingham-2022-5th-august-roundup/" target="_blank" rel="noreferrer">
        <button id="PapareIcon" ><img src={PapareIcon} alt="" /></button>
      </a>
      <a href="https://ocasia.org/news/3273-sri-lanka-noc-plots-future-of-crysbro-next-champ-athlete-nethmi-ahinsa.html" target="_blank" rel="noreferrer">
        <button id="FLogoOca" ><img src={FLogoOca} alt="" /></button>
      </a>
    </div>
  )
}
