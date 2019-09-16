import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainGraph from "../components/graphs/MainGraph"


const IndexPage = () => (
  <Layout>
      <div className="main-graph">
        <MainGraph/>
      </div>
  </Layout>
)

export default IndexPage
