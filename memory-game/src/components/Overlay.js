import React, { Component } from 'react'

export const OverlayText = props => {
  let { value, text, visibility, handleClick } = props
  if (value !== "game-start-text") {
    return (
      <div className={`overlay-text ${visibility}`} id={value} onClick={handleClick}>
        <span>{text}</span>
        <span className="overlay-text-restart">restart</span>
      </div>
    )
  } else {
    return (
      <div className={`overlay-text ${visibility}`} id={value} onClick={handleClick}>
        <span>{text}</span>
      </div>
    )
  }
}