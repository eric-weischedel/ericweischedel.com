import React from "react"
import Badges from "./badges"
import SecondaryAction from "./secondaryAction"

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
        <SecondaryAction text={link.title} link={link.url} />
      )}
    </div>
    <figure className="workEntryImageContainer">
      <img className="workEntryImage" src={img} alt={title} />
    </figure>
  </article>
)
export default WorkEntry
