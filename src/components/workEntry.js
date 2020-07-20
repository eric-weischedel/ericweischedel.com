import React from "react"
import Badges from "./badges"
import SecondaryAction from "./secondaryAction"

const WorkEntry = ({ children, title, subtitle, img, desc, links, badgeImages = [] }) => (
  <article className="workEntry">
    <div className="workEntryTextPanel">
      <h2 className="heading">{title}</h2>
      {subtitle &&
        <h3 className="heading2">{subtitle}</h3>
      }
      <Badges images={badgeImages} />
      <br />
      <div>
        {desc.map((paragraph) =>
          <div><p className="paragraph">{paragraph}</p><br /></div>
        )}
      </div>
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
