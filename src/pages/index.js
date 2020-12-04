import React from "react"
import AboutUs from "../components/AboutUs"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips Heading="Our top destinations" />
    <Testimonials />
    <AboutUs />
  </Layout>
)

export default IndexPage
