import React from "react"
import "../styles/pageTitle.scss"

const PageTitle = (props) => (
  <div className="pageTitleContainer">
    <h1 className="pageTitle">{props.title}</h1>
  </div>
)
export default PageTitle
