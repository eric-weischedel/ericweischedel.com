import React from "react"
import Badges from "./badges"
import "../styles/workEntry.css"

import Vue from "../images/icons8-vue-js.svg"
import JS from "../images/javascript.svg"
import CSharp from "../images/c--4.svg"

const WorkEntry = ({ title, subtitle, img, desc }) => (
  <article className="workEntry">
    <div className="workEntryTextPanel">
      <h2 className="workEntryTitle">{title}</h2>
      {subtitle &&
        <h3 className="workEntrySubtitle">{subtitle}</h3>
      }
      <Badges images={[CSharp, JS, Vue]} />
      <div className="workEntryDescription">
        {desc.map((paragraph) => <p className="workEntryDescriptionParagraph">{paragraph}<br /><br /></p>)}
      </div>
    </div>
    <figure className="workEntryImageContainer">
      <img className="workEntryImage" src={img} alt={title} />
    </figure>
  </article>
)
export default WorkEntry
