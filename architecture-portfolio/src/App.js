import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { Menu, Dropdown } from 'antd'

import Main from './container/main/Main'

import { Proj01, Proj02, Proj03, Proj04, Proj05, Proj06, Proj07, Proj08, Proj09, Proj10, Proj11, Proj12, Proj13 } from './container/projects/Projects'
import { ProjProfessional, ProjGraduate, ProjUndergraduate, ProjOther } from './container/projects/Portfolio.js'

import Resume from './container/projects/Resume'


/*menu structure*/
const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup
const MenuItem = Menu.Item
const MenuDivider = Menu.Divider

const projSubMenu = (
  <Menu title="projects" className="mainmenu-submenu">
    <SubMenu title="academic">
      <MenuItem key="05"><Link to="/projects/graduate">graduate</Link></MenuItem>
      <MenuItem key="06"><Link to="/projects/undergraduate">undergraduate</Link></MenuItem>
    </SubMenu>
    <MenuItem key="07"><Link to="/projects/professional">professional</Link></MenuItem>
    <MenuDivider />
    <MenuItem key="08"><Link to="/projects/other">other</Link></MenuItem>
    {/*<MenuItem key="09"><Link to="/projects/projall">all projects</Link></MenuItem>*/}
  </Menu>
)

const imgSubMenu = (
  <Menu title="images" className="mainmenu-submenu">
    <MenuItem key="01"><Link to="/projects/steel-house">diagram</Link></MenuItem>
    <MenuItem key="02"><Link to="/projects/river-community">rendering</Link></MenuItem>
    <MenuItem key="03"><Link to="/projects/biotech-facility">drawing</Link></MenuItem>
    <MenuDivider />
    <MenuItem key="04"><Link to="/images">all images</Link></MenuItem>
  </Menu>
)

function loadPage() {
  setTimeout(showPage, 3000)
}

function showPage() {
  document.getElementById("loader").style.display = "none"
  document.getElementById("later").style.display = "block"
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App-all" onLoad={loadPage()}>
          <div id="loader" />
          <div id="later" style={{ display: "none" }}>
            <header className="header">
              <div className="header-logo-wrapper">
                <Link className="header-logo" smooth to="/" />
              </div>
              <div className="nav-wrapper">
                <Link className="nav-item nav-bottom" smooth to="/#about">about</Link>
                <div className="nav-item nav-top">
                  <Link className="nav-item-dropdown" smooth to="/#portfolio">portfolio</Link>
                  <Dropdown.Button className="nav-item-dropdown" overlay={projSubMenu} trigger={['click', 'hover']} />
                </div>
                <Link className="nav-item nav-bottom" smooth to="/#featured">featured</Link>
                <Link className="nav-item nav-bottom" smooth to="/#contact">contact</Link>
                {/*<div className="nav-item nav-top">
                  <Link className="nav-item-dropdown" smooth to="/#images">images</Link>
                  <Dropdown.Button className="nav-item-dropdown" overlay={imgSubMenu} trigger={['click', 'hover']}>
                    images
                  </Dropdown.Button>
                </div>*/}
              </div>
            </header>
            <div className="route-all">
              <Route exact path="/" component={Main} />
              <Route path="/projects/graduate" component={ProjGraduate} />
              <Route path="/projects/undergraduate" component={ProjUndergraduate} />
              <Route path="/projects/professional" component={ProjProfessional} />
              <Route path="/projects/other" component={ProjOther} />
              <Route path="/projects/steel-house" component={Proj01} />
              <Route path="/projects/river-community" component={Proj02} />
              <Route path="/projects/biotech-facility" component={Proj03} />
              <Route path="/projects/production-office" component={Proj04} />
              <Route path="/projects/residential-complex" component={Proj05} />
              <Route path="/projects/airport-site-i" component={Proj06} />
              <Route path="/projects/airport-site-ii" component={Proj07} />
              <Route path="/projects/club-data" component={Proj08} />
              <Route path="/projects/catch-reality" component={Proj09} />
              <Route path="/projects/geometry-study" component={Proj10} />
              <Route path="/projects/botanical-museum" component={Proj11} />
              <Route path="/projects/horticultural-lakeshore" component={Proj12} />
              <Route path="/projects/digital-flower" component={Proj13} />
              <Route path="/resume" component={Resume} />
            </div>
            <footer className="footer-all">
              <div>
                made by <Link className="author-name" smooth to="/#about">Yan Liang</Link> in 🌤 Santa Monica, CA
              </div>
            </footer>
          </div>
        </div>
      </BrowserRouter >
    )
  }
}
