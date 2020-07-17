import React from "react"
import Badges from "./badges"
import "../styles/workEntry.scss"

const WorkEntry = ({ title, subtitle, img, desc, links, badgeImages = [] }) => (
  <article className="workEntry">
    <div className="workEntryTextPanel">
      <h2 className="workEntryTitle">{title}</h2>
      {subtitle &&
        <h3 className="workEntrySubtitle">{subtitle}</h3>
      }
      <Badges images={badgeImages} />
      <div className="workEntryDescription">
        {desc.map((paragraph) =>
          <div><p className="workEntryDescriptionParagraph">{paragraph}</p><br /></div>
        )}
      </div>
      {links.map((link) =>
        <div><a className="workEntryLink" href={link.url}>{link.title} 🡒</a><br /><br /></div>
      )}
    </div>
    <figure className="workEntryImageContainer">
      <img className="workEntryImage" src={img} alt={title} />
    </figure>
  </article>
)
export default WorkEntry
