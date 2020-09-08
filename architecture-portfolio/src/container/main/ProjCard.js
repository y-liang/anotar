import React from 'react';
import { Link } from 'react-router-dom'
import { ProjCardImg } from '../../ImgVid'





export default class ProjCard extends React.Component {
  render() {
    return (
      <div className="ProjCard-all">
        <div className="ProjCard-column-left">
          <Link className="ProjCard-img" to='/projects/steel-house'><ProjCardImg src='0232.png' /></Link>
          <Link className="ProjCard-img" to='/projects/botanical-museum'><ProjCardImg src='1131.png' /></Link>
          <Link className="ProjCard-img" to='/projects/geometry-study'><ProjCardImg src='1532.png' /></Link>
          <Link className="ProjCard-img" to='/projects/airport-site-i'><ProjCardImg src='0631.png' /></Link>
          <Link className="ProjCard-img" to='/projects/production-office'><ProjCardImg src='0431.gif' /></Link>
        </div>
        <div className="ProjCard-column-center">
          <Link className="ProjCard-img" to='/projects/steel-house'><ProjCardImg src='0132.gif' /></Link>
          <Link className="ProjCard-img" to='/projects/residential-complex'><ProjCardImg src='0531.png' /></Link>
          <Link className="ProjCard-img" to='/projects/biotech-facility'><ProjCardImg src='0331.gif' /></Link>
          <div />
          <Link className="ProjCard-img" to='/projects/steel-house'><ProjCardImg src='0129.gif' /></Link>
          <Link className="ProjCard-img" to='/projects/production-office'><ProjCardImg src='0432.png' /></Link>
          <Link className="ProjCard-img" to='/projects/airport-site-ii'><ProjCardImg src='0732.png' /></Link>
          <div />
          <Link className="ProjCard-img" to='/projects/river-community'><ProjCardImg src='0231.png' /></Link>
          <Link className="ProjCard-img" to='/projects/airport-site-ii'><ProjCardImg src='0733.png' /></Link>
          <Link className="ProjCard-img" to='/projects/catch-reality'><ProjCardImg src='0931.gif' /></Link>
          <div />
          <Link className="ProjCard-img" to='/projects/horticultural-lakeshore'><ProjCardImg src='1437.gif' /></Link>
          <Link className="ProjCard-img" to='/projects/river-community'><ProjCardImg src='0233.png' /></Link>
          <Link className="ProjCard-img" to='/projects/airport-site-ii'><ProjCardImg src='0734.png' /></Link>
          <div />
          <Link className="ProjCard-img" to='/projects/residential-complex'><ProjCardImg src='0532.png' /></Link>
          <Link className="ProjCard-img" to='/projects/digital-flower'><ProjCardImg src='1331.gif' /></Link>
          <Link className="ProjCard-img" to='/projects/club-data'><ProjCardImg src='0831.png' /></Link>
        </div >
        <div className="ProjCard-column-right">
          <Link className="ProjCard-img" to='/projects/geometry-study'><ProjCardImg src='1531.gif' /></Link>
          <Link className="ProjCard-img" to='/projects/horticultural-lakeshore'><ProjCardImg src='1432.png' /></Link>
          <Link className="ProjCard-img" to='/projects/airport-site-i'><ProjCardImg src='0632.png' /></Link>
          <Link className="ProjCard-img" to='/projects/club-data'><ProjCardImg src='0832.png' /></Link>
        </div>
      </div >
    )
  }
}
