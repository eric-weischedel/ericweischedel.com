import React from "react"
import "../styles/badge.css"


const Badge = ({ src }) => (
  <div className="badge">
    <img src={src} width="30" height="30" />
  </div>
)

export default Badge
