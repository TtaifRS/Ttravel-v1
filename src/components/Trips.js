import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ImLocation } from "react-icons/im"
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  TextWrap,
} from "../styles/TripsStyle"
import { Btn } from "../styles/ButtonStyle"

const Trips = ({ Heading }) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            title
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard key={index}>
          <ProductImg
            src={item.node.img.childImageSharp.fluid.scr}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.title}</ProductTitle>
            </TextWrap>
            <Btn
              to="/trips"
              rounded="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Btn>
          </ProductInfo>
        </ProductCard>
      )
    })

    return tripsArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{Heading}</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default Trips
