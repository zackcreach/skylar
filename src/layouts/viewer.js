import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

// import { next, back } from '../helpers/carousel';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

class Viewer extends React.PureComponent {
  constructor({ imageData }) {
    super();
    this.state = {
      gallery: Object.values(imageData),
      currentImageIndex: 0,
      show: true
    }
  }
  componentWillMount() {
    setInterval(() => this.changeImage(), 7500);
  }
  changeImage() {
    this.setState({
      show: !this.state.show,
    });
  }
  renderImage() {
    const { gallery, currentImageIndex, show } = this.state;
    return (
      <Img sizes={gallery[currentImageIndex].sizes} key={Date.now()} className={imageStyle} />
    )
  }
  render() {
    const { gallery, currentImageIndex, show } = this.state;
    return (
      <div className={viewer}>
        <Slide
          in={show}
          onExited={() => (
            this.setState({ 
              show: !show,
              currentImageIndex: currentImageIndex === (gallery.length - 1) ? 0 : currentImageIndex + 1,
            })
          )}
        >
          {this.renderImage()}
        </Slide>
      </div>
    )
  }
}

export default Viewer;

const Slide = ({ ...props, children }) => (
  <CSSTransition
    {...props}
    timeout={800}
    classNames='slide'
  >
    {children}
  </CSSTransition>
)

const viewer = css`
  height: 100%;
  width: 100%;
  background: var(--turq);
  overflow: hidden;
`
const imageStyle = css`
`