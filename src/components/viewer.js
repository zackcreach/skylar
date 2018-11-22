import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

// import { next, back } from '../helpers/carousel';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import '../styles/styles.scss'
import styled, { css } from 'emotion'

class Viewer extends React.PureComponent {
  constructor({ imageData }) {
    super({ imageData })
    this.state = {
      gallery: imageData.allImageSharp.edges,
      currentImageIndex: 0,
      show: true,
    }
  }
  componentDidMount() {}
  componentWillMount() {
    setInterval(() => this.changeImage(), 7500)
  }
  changeImage() {
    this.setState({
      show: !this.state.show,
    })
  }
  renderImage() {
    const { gallery, currentImageIndex, show } = this.state
    return (
      <Img
        fluid={gallery[currentImageIndex].node.fluid}
        key={Date.now()}
        className={imageStyle}
      />
    )
  }
  render() {
    const { gallery, currentImageIndex, show } = this.state
    return (
      <div className={viewer}>
        <Slide
          in={show}
          onExited={() =>
            this.setState({
              show: !show,
              currentImageIndex:
                currentImageIndex === gallery.length - 1
                  ? 0
                  : currentImageIndex + 1,
            })
          }
        >
          {this.renderImage()}
        </Slide>
      </div>
    )
  }
}

export default Viewer

const Slide = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={800} classNames="slide">
    {children}
  </CSSTransition>
)

const viewer = css`
  height: 100%;
  width: 100%;
  background: var(--color-primary);
  overflow: hidden;
`
const imageStyle = css``
