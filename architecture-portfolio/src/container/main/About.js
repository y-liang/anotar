import React from 'react'

import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';



import { Img } from '../../ImgVid'



const Element = BannerAnim.Element;

let imageArray = [
  {
    pic: 'portrait.png',
    // map: '0012.png',
    color: 'rgba(0, 0, 255, 0.85)',
    background: 'white',
    title: 'about',
    content: <div>
      Hello! I'm Yan Liang, a native of the tropical Hainan Island at China's southernmost point.<br />
      <br />
      By way of Shanghai, I'm now based in sunny Santa Monica.<br />
      <br />
      Over the years I have been expanding my interest in design from one medium to another - from the physical world to the digital world.<br />
      <br />
      As an architectural designer, I help reshape cityscapes according to pragmatic yet sensible design discourse.
      As a web development enthusiast, I have taught myself programming languages and frameworks to give forms to the virtual environment and to learn how people interact with it.<br />
      <br />
    </div>,
  },
  {
    // pic: '0012.png',
    // map: '0012.png',
    color: '#73B0F4',
    background: '#4A88DA',
    title: 'Education & Award',
    content: <div>
      <br />
      09. 2014 - 06. 2017<br />
      Master’s Degree of Architecture<br />
      <b>University of California Los Angeles</b><br />
      · School of the Arts and Architecture<br />
      <br />
      09. 2009 - 06. 2014<br />
      Bachelor’s Degree of Engineering in Urban Planning<br />
      <b>Tongji University</b><br />
      · College of Architecture and Urban Planning<br />
      <br />
      <br />
      09. 2016 - 06. 2017 | 09. 2015 - 06. 2016 | 09. 2014 - 06. 2015<br />
      <b>University of California Los Angeles Regents Scholarship</b><br />
      · Awarded three years in a row among the top 1.5% of applicants<br />
      · Judged by demonstrating a high level of academic and personal achievement<br />
      <br />
    </div>,
  },

  {
    // pic: '0012.png',
    // map: img0013,
    color: '#66D4F1',
    background: '#3AADD9',
    title: 'Skills & Tools',
    content: <div>
      <b>Web Development</b><br />
      JavaScript, React.js, HTML 5, CSS 3, Node.js, Express.js, Leaflet.js<br />
      <br />
      <b>Graphic and Motion</b><br />
      Illustrator, InDesign, Photoshop, Premiere, After Effects, SynthEyes<br />
      <br />
      <b>Creation and Visualization</b><br />
      Revit (BIM), 3Ds Max, Rhino 3D, Maya, Grasshopper, Artlantis Render, KeyShot, V-Ray, OctaneRender<br />
      <br />
      <b>Data Analysis</b><br />
      Processing, Tableau, Import.io, Gephi, NodeXL, SPSS, ArcGIS, Open Refine, Fusion Tables<br />
      <br />
      <b>Other</b><br />
      Laser Cutter, 3D Printing, CNC Router, Acrylic Painting, Woodworking<br />
    </div>,
  },

  {
    // pic: '0012.png',
    // map: '0012.png',
    color: '#61DDBC',
    background: '#35BA9B',
    title: <div>Designer<br />KFA LLP</div >,
    content: <div>
      08. 2017 - Present | Santa Monica<br />
      <br />
      Curate interactive narratives, graphics, and presentations with the marketing director
      that have won the firm two awards and four nominations for projects ranging from
      mixed-use and affordable housing to hospitality and adaptive reuse<br />
      <br />
      Initiate project concepts with the firm partner as the only designer to develop
      early-stage designs, and produce code-compliant drawing sets that have helped secure
      project fundings for the clients and obtain entitlements from the city<br />
      <br />
      Communicate design goals and specifications to civil, structural, electrical, mechanical,
      and landscape consultants􀀍 integrating engineering elements into unified project
      deliverables that have led to building permits for projects valued from 10 to 20 millions<br />
      <br />
      Discuss project progress with project managers and clients, give and receive feedback
      on design iterations, and help define project objectives, timelines and improvements<br />
      <br />
      · Revit (BIM), AutoCAD, Artlantis Render, Rhino 3D, Illustrator, InDesign, Photoshop<br />
    </div >,
  },

  {
    // pic: '0012.png',
    // map: '0012.png',
    color: '#B4DF80',
    background: '#89C053',
    title: <div>Rendering Consultant<br />OTOY Inc</div >,
    content: <div>
      04. 2018 - 06. 2018 | Los Angeles<br />
      <br />
      Tested the GPU-accelerated real-time 3D rendering engine OctaneRender for Rhino 3D
      and SketchUp, and evaluated its user experience and overall functionality<br />
      <br />
      Offered digital visualization product knowledge and improvement recommendations
      on the program’s interface design, graphical quality, and technical features including
      lighting, shading, textures, and materials<br />
      <br />
      Summarized key differences between OctaneRender and three other popular
      rendering software, reviewed software documentation, and proposed revision<br />
      <br />
      · Rhino 3D, SketchUp, Grasshopper, V-Ray, KeyShot, Artlantis Render, OctaneRender<br />
    </div>,
  },

  {
    // pic: '0012.png',
    // map: '0012.png',
    color: '#fcd277',
    background: '#F5B945',
    title: <div>Program Assistant<br />Digital Research Start-Up Partnership at UCLA</div >,
    content: <div>
      07. - 08. 2015 | Los Angeles<br />
      <br />
      Organized workshops and helped lead weekly tutorials to facilitate six PhD students’
      thesis projects, which included identifying trends, correlations and patterns in Twitter
      and IMDb data sets, and geo-referencing newsfeeds on social media platforms<br />
      <br />
      Introduced guidelines on data analysis and visualization, and documented the
      students’ research progress, establishing workflows and best practices<br />
      <br />
      Positioned each individual’s research project with appropriate technological tools and
      faculty resources based on achievable research scope and solutions<br />
      <br />
      · Tableau, Import.io, Gephi, NodeXL, ArcGIS, Open Refine, Fusion Tables, Processing<br />
    </div>,
  },

  {
    // pic: '0012.png',
    // map: '0012.png',
    color: '#fc8370',
    background: '#E8553E',

    title: <div>Previous Work Experience and Independent Projects</div >,
    content: <div>
      <b>Design Intern | SOM LLP</b><br />
      01. 2013 - 04. 2014 | Shanghai<br />
      Prototyped spatial experience using 3D printed models and walk-through animation;<br />
      Compiled measurements and project information to create a comprehensive plan for
      context analysis, conceptual designs, and digital models and renderings.<br />
      · Revit (BIM), 3ds Max, Rhino 3D, V-Ray, Maxwell Render, Photoshop, 3D Printing<br />
      <br />
      <b>Planning Intern | Shanghai Municipal City Planning Bureau</b><br />
      07. - 08. 2013 | Shanghai<br />
      Identified land use permitting and zoning, property valuation and demographic
      information for spatial data layers and quantitative analysis;<br />
      Documented conferences and weekly meetings presided by deputy mayors at city hall.<br />
      · ArcGIS, AutoCAD, PowerPoint, Excel, Illustrator, InDesign<br />
      <br />
      <b>Portfolio Website</b><br />
      Planned project with wireframes, created responsive designs and content animation,
      tested across relevant browsers, and deployed the site as a single-page application.<br />
      · JavaScript, React.js, HTML 5, CSS 3, Photoshop, Illustrator<br />
      <br />
      <b>Multi-Reality Video | Tech Seminar at UCLA AUD Department</b><br />
      One-and-a-half-minute video at 24fps for an Augmented Reality course, to explore an
      alternative environment where the past and present selves mutiply and merge.<br />
      · Premiere, After Effects, Maya, SynthEyes (3D camera tracking)<br />
    </div>,
  },
  {
    // pic: '0012.png',
    // map: '0012.png',
    color: '#f76d82',
    background: '#D94452',
    title: <div>Research, Publication, and Exhibition</div >,
    content: <div>
      02. - 12. 2012<br />
      Evaluation of the Eco-performance of Urban Infrastructure in China’s Booming Low-Carbon Cities<br />
      Collaborated with a urban planning doctoral candidate to survey emerging eco-friendly cities across China<br />
      Collected qualitative inputs on building technologies, urban ecosystem, transit system, living community, and digital infrastructure<br />
      <br />
      10. - 11. 2011<br />
      Urban Growth Models of Shanghai and its Propagation in Mumbai<br />
      Collaborated with architecture students from University of Mumbai to study Shanghai’s urban transformations in comparison to Mumbai’s<br />
      Analyzed infrastructure development, land policies, residential typologies and site rehabilitation<br />
      <br />
      04. - 07. 2010<br />
      Development of Traditional Housing “Lilong” in Shanghai<br />
      Analyzed architectural features in discrete sites of Shanghai’s traditional habitat Lilong<br />
      Project was included in a trilingual publication that released in China and France for the research course<br />
      <br />
      01. 2013<br />
      Thoughts on the Development of Low-Carbon Cities | Ideal Space Issue 50, 2013 | Chenchen Ren and Yan Liang<br />
      Assessment of the Eco-performance of Urban Infrastructure in China’s Booming Low-Carbon Cities<br />
      <br />
      08. - 09. 2012<br />
      Mock-Up Architecture of Spatial Art | Museum of Contemporary Art | Shanghai<br />
      Team project from DigitalFUTURE Workshop took part in the exhibition as a landscape installation<br />
    </div>,
  },

  {
    // pic: '0012.png',
    // map: '0012.png',
    color: '#f299ce',
    background: '#D56FAC',
    title: <div>Design Workshops, Volunteer Experience, and Other Activities</div >,
    content: <div>
      12. 2012<br />
      Architectural and Urban Design for Pier 16 Ferry Terminal and Waterfront<br />
      Politecnico di Milano | University of Brescia | University of Pavia | Tongji University<br />
      10. 2012<br />
      Urban City Cells Workshop on Fuxing Island Masterplanning<br />
      Aalto University | Changing Places Group, Media Lab, MIT | Tongji University<br />
      06. - 08. 2012<br />
      DigitalFUTURE Computation and Fabrication Workshop<br />
      AAC, University of Southern California | CAUP, Tongji University<br />
      <br />
      04. 2018 | Nothin' But Sand: Santa Monica Beach Cleanup| Heal the Bay<br />
      04. 2017 | The Great LA River Clean Up Volunteer | Friends of the Los Angeles River<br />
      04. 2015 | Fresh Food Preparation Volunteer | L.A. Kitchen<br />
      10. 2012 | Modern Architecture & Urban Science Technology Forum Volunteer | Chinese Academy of Sciences<br />
      12. 2011 | World Heritage Institute of Research for the Asia and the Pacific Region Volunteer | UNESCO<br />
      11. - 12. 2010 | Exhibition Tour Guide | Shanghai Museum<br />
      10. 2010 | Tongji University International Symposium Volunteer | City Issues<br />
      04. - 05. 2010 | Information Collection Volunteer | World Expo 2010 Shanghai China<br />
      <br />
      2015 - 2017 | Sea Kayaker | UCLA Marina Aquatic Center<br />
      2014 - 2017 | Yoga Practice Student | UCLA John Wooden Center<br />
      2012 - 2014 | Training Coordinator | Shanghai Collegiate Nike Training<br />
      2011 - 2014 | Midfielder | Tongji Collegiate Field Hockey Team<br />
      2009 - 2011 | Vice Director | Tongji Public Relation Association<br />
    </div>,
  },
];

export default class About extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'About',
  };

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] },
      ],
    };
    this.oneEnter = false;
  }

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({ delay: 300 });
      this.oneEnter = true;
    }
  }

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.prev();
    this.bannerText.prev();
  };

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    showInt += 1;
    if (showInt > imageArray.length - 1) {
      showInt = imageArray.length - 1;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.next();
    this.bannerText.next();
  };

  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };

  render() {
    const imgChildren = imageArray.map((item, i) => (
      <Element
        key={i}
        style={{
          background: item.color,
          height: '100%',
        }}
        leaveChildHide
      >
        <QueueAnim
          animConfig={this.state.imgAnim}
          duration={this.getDuration}
          delay={[!i ? this.state.delay : 300, 0]}
          ease={['easeOutCubic', 'easeInQuad']}
          key="img-wrapper"
        >
          <div className={`${this.props.className}-map map${i}`} key="map">
            <Img src={item.map} height="100%" />
          </div>
          <div className={`${this.props.className}-pic pic${i}`} key="pic">
            <Img src={item.pic} width="100%" />
          </div>
        </QueueAnim>
      </Element>));
    const textChildren = imageArray.map((item, i) => {
      const { title, content, background } = item;
      return (<Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
          <h1 key="h1">{title}</h1>
          <em key="em" style={{ background }} />
          <p key="p">{content}</p>
        </QueueAnim>
      </Element>);
    });
    return (<div
      className={`${this.props.className}-wrapper`}
      style={{ background: imageArray[this.state.showInt].background }}
    >
      <div className={this.props.className}>
        <BannerAnim
          prefixCls={`${this.props.className}-img-wrapper`}
          sync
          type="across"
          duration={1000}
          ease="easeInOutExpo"
          arrow={false}
          thumb={false}
          ref={(c) => { this.bannerImg = c; }}
          onChange={this.onChange}
          dragPlay={false}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          prefixCls={`${this.props.className}-text-wrapper`}
          sync
          type="across"
          duration={1000}
          arrow={false}
          thumb={false}
          ease="easeInOutExpo"
          ref={(c) => { this.bannerText = c; }}
          dragPlay={false}
        >
          {textChildren}
        </BannerAnim>
        <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
          {this.state.showInt && <Icon className="prev-one" type="caret-left" key="left" onClick={this.onLeft} />}
          {this.state.showInt < imageArray.length - 1 && <Icon className="next-one" type="caret-right" key="right" onClick={this.onRight} />}
        </TweenOneGroup>
      </div>
    </div>);
  }
}

