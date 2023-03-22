import React from 'react'
import { Navbar } from '../Navbar'
import { Introduction } from '../Introduction'
import { WebDevelopment } from '../WebDevelopment'
import { SystemsProgramming } from '../SystemsProgramming'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export const Home = () => {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <Navbar />
      <Parallax pages={3} className="top-0 left-0">
        <ParallaxLayer offset={0} speed={0} factor={1.5} style={{backgroundImage:"url('https://images.pexels.com/photos/62627/niagara-cases-water-waterfall-62627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize:'cover', filter:'brightness(50%)'}} />
        <ParallaxLayer offset={0} speed={0.1}>
          <Introduction />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <WebDevelopment />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.75}>
          <SystemsProgramming />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}
