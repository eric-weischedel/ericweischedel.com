import React from "react"
import Badge from "./badge"
import "../styles/badges.css"


const Badges = ({ images }) => {
  return (
    <div className="badges">
      {images.map((image) => <Badge src={image} />)}
    </div>
  );
};

export default Badges
