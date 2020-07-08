import React from "react"
import "../styles/badge.css"


const Badge = ({ src }) => (
  <div className="badge">
    <img src={src} width="24" height="24" />
  </div>
)

export default Badge
