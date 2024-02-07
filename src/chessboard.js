import React, { useState } from "react";
import './board.css';
import Tile from "./tile";
import image from './images/bpawn.jpg';
import image1 from './images/wpawn.jpg';
import image2 from './images/belephant.jpg';
import bknightImage from './images/bknight.jpg';
import image3 from './images/dbishop.jpg';
import image4 from './images/dqueen.jpg';
import image5 from './images/dking.jpg';
import image6 from './images/welephant.jpg';
import image7 from './images/wknight.jpg';
import image8 from './images/wbishop.jpg';
import image9 from './images/wqueen.jpg';
import image10 from './images/wking.jpg';

const horizontalaxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalaxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

function Chessboard() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [initialPosition, setInitialPosition] = useState(null);

  function pointerpiece(e) {
    const element = e.target;
    if (element.classList.contains("tile-piece")) {
      setSelectedPiece(element);
      setInitialPosition({ x: e.clientX, y: e.clientY });
    }
  }

  function movePiece(e) {
    if (!selectedPiece || !initialPosition) return;

    const x = e.clientX - initialPosition.x;
    const y = e.clientY - initialPosition.y;
    selectedPiece.style.left = `${x}px`;
    selectedPiece.style.top = `${y}px`;
  }

  function handlePieceDrop() {
    if (!selectedPiece || !initialPosition) return;

    const x = parseInt(selectedPiece.style.left);
    const y = parseInt(selectedPiece.style.top);
    const newPosition = { x: x, y: y };

    // Update the position of the piece in the board
    // ...

    setSelectedPiece(null);
    setInitialPosition(null);
  }

  let board = [];
  for (let j = verticalaxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalaxis.length; i++) {
      const number = j + i + 2;
      let imgSrc = null;

      if (j === 1) {
        imgSrc = image1;
      } else if (j === 6) {
        imgSrc = image;
      } else if (j === 7 && (i === 0 || i === 7)) {
        imgSrc = image2;
      } else if (j === 7 && (i === 1 || i === 6)) {
        imgSrc = bknightImage;
      }
      else if (j === 7 && (i === 2 || i === 5)) {
        imgSrc = image3;
      }
      else if (j === 7 && i === 3) {
        imgSrc = image4;
      }
      else if (j === 7 && i === 4) {
        imgSrc = image5;
      }
      else if (j === 0 && (i === 0 || i === 7)) {
        imgSrc = image6;
      }
      else if (j === 0 && (i === 1 || i === 6)) {
        imgSrc = image7;
      }
      else if (j === 0 && (i === 2 || i === 5)) {
        imgSrc = image8;
      }
      else if (j === 0 && i === 3) {
        imgSrc = image9;
      }
      else if (j === 0 && i === 4) {
        imgSrc = image10;
      }
      board.push(<Tile key={`${j},${i}`} image={imgSrc} number={number} />);
    }
  }

  return (
    <div id="app1">
      <div 
        onMouseMove={movePiece}
        id="chessboard"
      >
        {board}
      </div>
    </div>
  );
}

export default Chessboard;