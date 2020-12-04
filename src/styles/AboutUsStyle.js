import styled from "styled-components"

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  background: #fff;
  padding: 4rem calc((100vw - 1300px) / 2);
`
export const Heading = styled.h1`
  text-align: start;
  padding: 0 2rem;
  font-size: clamp (1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
export const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`
export const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`
export const Title = styled.p`
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
`
export const Description = styled.div`
  font-weight: 100;
`
