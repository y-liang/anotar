import React from 'react'

import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';



export default class TextShuffle extends React.Component {
  state = {
    show: true,
  }

  onClick = () => {
    this.setState({
      show: false,
    }, () => {
      this.setState({
        show: true
      });
    });
  }

  render() {
    return (
      <div className="textshuffle-wrapper" onMouseEnter={this.onClick}>
        {this.state.show && (
          <div className="textshuffle">
            <div className="textshuffle-shape">
              <div className="shape-left">
                <TweenOne
                  animation={[
                    { x: 1000, type: 'from', ease: 'easeInOutQuint', duration: 1000 },
                    { x: -1000, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
              <div className="shape-right">
                <TweenOne
                  animation={[
                    { x: -1000, type: 'from', ease: 'easeInOutQuint', duration: 1000 },
                    { x: 1000, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
            </div>

            <TweenOne
              className="textshuffle-bar"
            />
            <Texty
              className="content"
              type="swing"
              mode="random"
              delay={1000}
              interval={30}
            >
              Hello! I am Yan Liang, architectural designer and web engineer.
              Thanks for visiting.
            </Texty>
          </div>
        )}
      </div>
    );
  }
}

