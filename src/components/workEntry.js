import React from "react"
import SecondaryAction from "./secondaryAction"
import Tags from "./tags"

import { Calendar } from "react-feather"

const WorkEntry = ({ children, title, subtitle, img, desc, links, tags, date }) => (
  <article className="workEntry">
    <div className="workEntryTextPanel">
      <h2 className="heading">{title}</h2>
      {subtitle &&
        <h3 className="heading2">{subtitle}</h3>
      }
      {date &&
        <div className="dateContainer">
          <Calendar size={16} strokeWidth={1.5} color={"#333"} />
          <div className="date">
            <span className="paragraph">{date}</span>
          </div>
        </div>
      }
      <br />
      <br />
      <div>
        {desc.map((paragraph) =>
          <div key={desc.indexOf(paragraph)}>
            <p className="paragraph">{paragraph}</p>
          </div>
        )}
      </div>
      <br />
      {tags &&
        <Tags tags={tags} />
      }
      {links &&
        links.map((link) =>
          <SecondaryAction text={link.title} link={link.url} key={links.indexOf(link)} />
        )
      }
    </div>
    <figure className="workEntryImageContainer">
      {children}
    </figure>
  </article>
)
export default WorkEntry
