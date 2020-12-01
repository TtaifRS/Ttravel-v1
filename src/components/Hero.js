import React from "react"
import { Btn } from "../styles/ButtonStyle"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroItem,
} from "../styles/HeroStyle"

import heroVideo from "../assets/videos/travel.mp4"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src={heroVideo}
          typeof="video/mp4 "
          autoPlay
          loop
          muted
          playsInline
        />
      </HeroBg>
      <HeroContent>
        <HeroItem>
          <h1>Unreal Destinations</h1>
          <p>Out of this world</p>
          <Btn primary="true" big="true" rounded="true" to="/trips">
            Travel Now
          </Btn>
        </HeroItem>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
