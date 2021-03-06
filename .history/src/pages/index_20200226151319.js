import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ColorCard from "../components/color-card"

const IndexPage = () => {
  const [colorCopied, setColorCopied] = useState(String)
  const [pagination, setPagination] = useState(Number)
  const [colors, setColors] = useState([])
  return (
    <Layout>
      <section className="colors-container">
        <ColorCard />
      </section>
    </Layout>
  )
}

export default IndexPage
