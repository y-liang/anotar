import React, { Component } from 'react'

import { Carousel, Icon } from 'antd'
import { ProfImg, Img, UnderImg } from '../../ImgVid'

export class ProjProfessional extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }
  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className="ProjProfessional portfolio-display">
        <Icon className="prev-button" type="caret-left" onClick={this.previous} />
        <Carousel autoplay autoplaySpeed={4000} ref={node => (this.carousel = node)} {...props}>
          <ProfImg src='1601.png' />
          <ProfImg src='1602.png' />
          <ProfImg src='1603.png' />
          <ProfImg src='1604.png' />
          <ProfImg src='1605.png' />
          <ProfImg src='1606.png' />
          <ProfImg src='1607.png' />
          <ProfImg src='1701.png' />
          <ProfImg src='1702.png' />
          <ProfImg src='1703.png' />
          <ProfImg src='1704.png' />
          <ProfImg src='1705.png' />
          <ProfImg src='1706.png' />
          <ProfImg src='1707.png' />
          <ProfImg src='1708.png' />
          <ProfImg src='1709.png' />
          <ProfImg src='1710.png' />
        </Carousel>
        <Icon className="next-button" type="caret-right" onClick={this.next} />
      </div>
    )
  }
}

export class ProjGraduate extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }
  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="portfolio-display">
        <Icon className="prev-button" type="caret-left" onClick={this.previous} />
        <Carousel autoplay autoplaySpeed={4000} ref={node => (this.carousel = node)} {...props}>
          <Img src='0901.png' />
          {/*<Img src='0902.png' />*/}
          <Img src='0903.png' />
          <Img src='0904.png' />
          <Img src='0905.png' />
          <Img src='0906.png' />
          {/*<Img src='0907.png' />*/}
          <Img src='0908.png' />
          <Img src='0909.png' />
          <Img src='0910.png' />
          <Img src='0911.png' />
          <Img src='0912.png' />
          <Img src='0913.png' />
          <Img src='0914.png' />
          <Img src='0915.png' />
          <Img src='0916.png' />
          <Img src='0917.png' />
          <Img src='0918.png' />
          <Img src='0919.png' />
          <Img src='0920.png' />
          <Img src='0921.png' />
          <Img src='0922.png' />
          <Img src='0923.png' />
          <Img src='0924.png' />
          <Img src='0925.png' />
          <Img src='0926.png' />
        </Carousel>
        <Icon className="next-button" type="caret-right" onClick={this.next} />
      </div>
    )
  }
}

export class ProjUndergraduate extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }
  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="Proj-undergrad">
        <Icon className="prev-button" type="caret-left" onClick={this.previous} />
        <Carousel className="portfolio-page" autoplay autoplaySpeed={4000} ref={node => (this.carousel = node)} {...props}>
          <UnderImg src='1201.png' />
          <UnderImg src='1202.png' />
          <UnderImg src='1203.png' />
          <UnderImg src='1204.png' />
          <UnderImg src='1205.png' />
          <UnderImg src='1301.png' />
          <UnderImg src='1302.png' />
          <UnderImg src='1303.png' />
          <UnderImg src='1304.png' />
          <UnderImg src='1305.png' />
          <UnderImg src='1001.png' />
          <UnderImg src='1002.png' />
          <UnderImg src='1003.png' />
          <UnderImg src='1004.png' />
          <UnderImg src='1005.png' />
          <UnderImg src='1006.png' />
          <UnderImg src='1007.png' />
          <UnderImg src='1101.png' />
          <UnderImg src='1102.png' />
          <UnderImg src='1103.png' />
          <UnderImg src='1104.png' />
        </Carousel>
        <Icon className="next-button" type="caret-right" onClick={this.next} />
      </div>
    )
  }
}

export class ProjOther extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }
  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="Proj-other">
        <Icon className="prev-button" type="caret-left" onClick={this.previous} />
        <Carousel className="portfolio-page" autoplaySpeed={4000} ref={node => (this.carousel = node)} {...props}>
          <iframe className="catch-reality" src="https://player.vimeo.com/video/333828680" width="1920" height="1080" margin="-72px auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen controls muted controlsList="nodownload"></iframe>
          <iframe className="club-data" src="https://player.vimeo.com/video/333892243" width="1920" height="1080" margin="-72px auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen controls muted controlsList="nodownload"></iframe>

          {/*<Vid className="augmented" src='1601.mp4' type="video/mp4" autoPlay controls muted />*/}
          {/*<Img className="data" src='0805.gif' />*/}
        </Carousel>
        <Icon className="next-button" type="caret-right" onClick={this.next} />
      </div>
    )
  }
}
