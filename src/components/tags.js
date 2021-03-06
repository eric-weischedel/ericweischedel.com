import React from "react"
import Tag from "./tag"

const Tags = ({ tags }) => (
    <div className="tags">
      {tags.map((tag) => <Tag title={tag} key={tag}/>)}
    </div>
)

export default Tags
