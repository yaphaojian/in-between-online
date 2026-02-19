'use client';
import "./CardSVG.min.css";
import "./CardSVG.style.css";

const CardSVG = ({card}) => {
  return (
      <span className={`pcard-${card} card-svg`}></span>
  )

}

export default CardSVG;