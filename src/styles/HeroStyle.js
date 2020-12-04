import styled from "styled-components"

export const HeroContainer = styled.div`
  display: flex;
  background: #0c0c0c;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-top: -80px;
  padding: 0 1rem;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`
export const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`
export const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  line-height: 1.1;
  padding: 0;
  font-weight: bold;

  h1 {
    font-size: clamp(1.5rem, 6vw, 4rem);
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    padding: 0 1rem;

    Span {
      color: #f26a2e;
    }
  }

  p {
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
  }
`
