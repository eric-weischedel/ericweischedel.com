import React from "react"
import "../styles/badge.scss"


const Badge = ({ src }) => (
  <div className="badge">
    <img src={src} width="30" height="30" />
  </div>
)

export default Badge
