import React from 'react';

export const Img = ({ src }) => (
  <img src={`/image/${src}`} alt="" width="100%" />
)

/*
export const Img = ({ src }) => (
  <img src={`${process.env.PUBLIC_URL}/image/${src}`} alt="" width="100%" />
)
*/

export const ProjCardImg = ({ src }) => (
  <Img src={`projcard/${src}`} />
)

export const UnderImg = ({ src }) => (
  <Img src={`under/${src}`} />
)


export const ProfImg = ({ src }) => (
  <Img src={`professional/${src}`} />
)


export const Vid = ({ src }) => (
  <video src={`${process.env.PUBLIC_URL}/image/extra/${src}`} alt="" width="100%" />
)