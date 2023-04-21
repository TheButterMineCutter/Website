import React, {useRef} from 'react'
import { ParallaxBanner, ParallaxBannerLayer, Parallax} from 'react-scroll-parallax';
import { Navbar } from '../Navbar'
import { FirstImage } from '../FirstImage'
import { Introduction } from '../Introduction'
import { WebDevelopment } from '../WebDevelopment'
import { About } from '../About'
import { Contacts } from '../Contacts'

export const Home = () => {

  document.addEventListener("mousemove", e => {
    document.getElementById("cursor")!.setAttribute("style", "top: "+(e.clientY - 12.5)+"px; left: "+(e.clientX - 12.5)+"px;")
    console.log(e.clientY)
  })
  

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div id="cursor" className="fixed w-[25px] h-[25px] border-[2px] border-white/70 rounded-[50%] z-[10] mix-blend-difference pointer-events-none"></div>
      <div style={{transformStyle: "preserve-3d"}}>
        <div className="absolute" style={{transform: "translateZ(-300px) scale(2)"}}>
          <FirstImage />
        </div>
        <div style={{transform: "translateZ(-200px) scale(1.68)"}}>
          <Introduction />
        </div>
        <div style={{transform: "translateZ(0px) scale(1)"}}>
          <WebDevelopment />
        </div>
        <div style={{transform: "translateZ(0px) scale(1)"}}>
          <About />
        </div>
        <div style={{transform: "translateZ(0px) scale(1)"}}>
          <Contacts />
        </div>
      </div>
    </>
  )
}
