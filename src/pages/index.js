import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import KeyInfo from "../components/KeyInfo"
import SecondaryInfo from "../components/SecondaryInfo"
import InfoRow from "../components/InfoRow"
import ConversationDemo from "../components/Conversation"

const IndexPage = () => (
  <Layout>
      <KeyInfo />
      <SecondaryInfo/>
      <InfoRow/>
  </Layout>
)

export default IndexPage
