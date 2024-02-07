import React from "react";
import './tile.css';

function Tile({ image, number }) {
  const tileClass = number % 2 === 0 ? 'tile black-tile' : 'tile white-tile';

  return (
    <div className={tileClass}>
      {image && <div style={{backgroundImage:`url(${image})`}} className="piece"></div>}
    </div>
  );
}

export default Tile;
