import React from "react"
import Badges from "./badges"
import SecondaryAction from "./secondaryAction"
import Tags from "./tags"

const WorkEntry = ({ children, title, subtitle, img, desc, links, tags }) => (
  <article className="workEntry">
    <div className="workEntryTextPanel">
      <h2 className="heading">{title}</h2>
      {subtitle &&
        <h3 className="heading2">{subtitle}</h3>
      }
      <br />
      <div>
        {desc.map((paragraph) =>
          <div><p className="paragraph">{paragraph}</p></div>
        )}
      </div>
      {tags &&
        <Tags tags={tags} />
      }
      {links.map((link) =>
        <SecondaryAction text={link.title} link={link.url} />
      )}
    </div>
    <figure className="workEntryImageContainer">
      {children}
    </figure>
  </article>
)
export default WorkEntry
