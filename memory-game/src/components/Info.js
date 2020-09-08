import React from 'react'

const GameInfo = ({ id, text, number }) => (
  <div className="game-info">
    {text} <span id={id}>{number}</span>
  </div>
)

export const Info = ({ time, flips }) => (
  <div className="game-info-wrapper">
    <GameInfo id="time-remaining" text="time" number={time} />
    <GameInfo id="flips" text="flip" number={flips} />
  </div>
)



