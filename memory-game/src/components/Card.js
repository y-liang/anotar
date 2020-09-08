import React, { Component } from 'react'

// this is a JSX object with two keys from props
const ImgCenter = ({ kind, file }) => (
  <img className={kind} src={`assets/images/${file}`} alt="" />
)

//  another way is to let { position, file } = props
const ImgCorner = ({ position, file }) => (
  <img className={`cob-web ${position}`} src={`assets/images/${file}`} alt="" />
)


const CardBack = () => (
  <div className="card-back card-face">
    <ImgCorner position="cob-web-top-left" file="Cobweb.png" />
    <ImgCorner position="cob-web-top-right" file="Cobweb.png" />
    <ImgCorner position="cob-web-bottom-left" file="Cobweb.png" />
    <ImgCorner position="cob-web-bottom-right" file="Cobweb.png" />
    <ImgCenter kind="spider" file="Spider.png" />
  </div>
)

// className and src are props to CardFront
const CardFront = ({ type, image }) => (
  <div className="card-front card-face">
    <ImgCorner position="cob-web-top-left" file="CobwebGrey.png" />
    <ImgCorner position="cob-web-top-right" file="CobwebGrey.png" />
    <ImgCorner position="cob-web-bottom-left" file="CobwebGrey.png" />
    <ImgCorner position="cob-web-bottom-right" file="CobwebGrey.png" />
    <ImgCenter kind={`card-value ${type}`} file={image} />
  </div>
)
/*
export const CardFront = props => {
  let { className, src } = props
  return (
    <div className="card-front card-face" >
      ...
    </div >
  )
}
*/

export const Card = props => {
  let { visibility, matched, handleClick, type, image } = props
  return (
    <div className={`card ${visibility} ${matched}`} onClick={handleClick}>
      <CardFront type={type} image={image} />
      <CardBack />
    </div>
  )
}