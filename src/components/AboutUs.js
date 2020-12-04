import React from "react"
import {
  AboutContainer,
  Heading,
  Wrapper,
  StatsBox,
  Icon,
  Title,
  Description,
} from "../styles/AboutUsStyle"
import { aboutData } from "../data/aboutData"

const AboutUs = () => {
  return (
    <AboutContainer>
      <Heading>Why Choose Us?</Heading>
      <Wrapper>
        {aboutData.map((item, index) => (
          <StatsBox key={index}>
            <Icon>{item.icon}</Icon>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
          </StatsBox>
        ))}
      </Wrapper>
    </AboutContainer>
  )
}

export default AboutUs
