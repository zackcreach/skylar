import React from 'react'
import Img from 'gatsby-image'

import { CSSTransition } from 'react-transition-group'

import '../styles/styles.scss'
import { css } from 'emotion'

class Viewer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      gallery: props.imageData.allImageSharp.edges,
      voiceover: props.imageData.imageSharp,
      currentImageIndex: 0,
      show: true,
    }
  }

  componentDidMount() {
    if (this.props.location.pathname !== '/voiceover/')
      setInterval(() => this.changeImage(), 7500)
  }

  changeImage() {
    this.setState({
      show: !this.state.show,
    })
  }

  renderImage() {
    const { gallery, voiceover, currentImageIndex } = this.state
    return (
      <Img
        fluid={
          this.props.location.pathname === '/voiceover/'
            ? voiceover.fluid
            : gallery[currentImageIndex].node.fluid
        }
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
