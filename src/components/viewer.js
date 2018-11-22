import React from 'react'
import Img from 'gatsby-image'

import { CSSTransition } from 'react-transition-group'

import '../styles/styles.scss'
import { css } from 'emotion'

class Viewer extends React.PureComponent {
  constructor({ imageData }) {
    super({ imageData })
    this.state = {
      gallery: imageData.allImageSharp.edges,
      currentImageIndex: 0,
      show: true,
    }
  }
  componentDidMount() {
    setInterval(() => this.changeImage(), 7500)
  }
  changeImage() {
    this.setState({
      show: !this.state.show,
    })
  }
  renderImage() {
    const { gallery, currentImageIndex } = this.state
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
        <CSSTransition
          timeout={800}
          classNames="slide"
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
        </CSSTransition>
      </div>
    )
  }
}

export default Viewer

const viewer = css`
  height: 100%;
  width: 100%;
  background: var(--color-primary);
  overflow: hidden;
`
const imageStyle = css``
