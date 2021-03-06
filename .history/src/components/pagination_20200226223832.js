import React from "react"
import "../styles/pagination.scss"

const Pagination = ({ prev, next }) => (
  <div className="pagination">
    <button onClick={prev}>Previous</button>
    <button onClick={next}>Next</button>
  </div>
)

export default Pagination
