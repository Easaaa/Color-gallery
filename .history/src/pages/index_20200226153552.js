import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ColorCard from "../components/color-card"

const IndexPage = () => {
  const [colorCopied, setColorCopied] = useState(String)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [colors, setColors] = useState("EMPTY")
  const [colorsAPI, setColorsAPI] = useState("https://reqres.in/api/colors")

  useEffect(() => {
    fetch(colorsAPI)
      .then(res => res.json())
      .then(data => setColors(data))
      .then(() => console.log(colors))
  }, [])

  const colorsUI = () => {
    colors === "EMPTY" ? (
      <div>Loading</div>
    ) : (
     <ColorCard></ColorCard>)
    )
  }

  return (
    <Layout>
      <section className="colors-container">{colorsUI()}</section>
    </Layout>
  )
}

export default IndexPage
