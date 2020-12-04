import React from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import {
  TestimonialContainer,
  TopLine,
  Description,
  ContentWrapper,
  ColumnOne,
  Testimonial,
  ColumnTwo,
  Images,
} from "../styles/TestimonialsStyle"
import { graphql, useStaticQuery } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <TestimonialContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margbin-bottom: 1rem;
              `}
            />
            <h3>Wilson Danneir</h3>
            <p>
              "We had the most remarkable family tour with Ttravels. Not only
              everything was perfect, but we felt, in every instance, that our
              guides and our gulet crew truly cared about us, both the kids and
              adults, and did their best to make this trip memorable."
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margbin-bottom: 1rem;
              `}
            />
            <h3>Marsha Frank</h3>
            <p>
              "The holiday of a life time - our adventure was without a doubt
              our favourite trip. The comfort and beauty of the trip, the
              incredibly caring crew, the delicious food, the history we learned
              from our travel"
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialContainer>
  )
}

export default Testimonials
