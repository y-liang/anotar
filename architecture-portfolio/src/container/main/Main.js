import React, { Component } from 'react'

import LogoGather from './LogoGather'
import TextShuffle from './TextShuffle'
import About from './About'
import ProjCard from './ProjCard'
import { ProjGraduate } from '../projects/Portfolio'
import { ContactModal } from './Contact'

export default class Main extends Component {
  render() {
    return (
      <div className="Main-all">
        <section className="Main-sectionI Main-section">
          <LogoGather />
          <TextShuffle />
        </section>
        <div id="featured"><ProjCard /></div>
        <div id="about"><About /></div>
        <div id="portfolio"><ProjGraduate /></div>
        <div id="contact"><ContactModal /></div>
      </div>
    );
  }
}

