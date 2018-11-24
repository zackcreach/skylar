import React from 'react'

import '../styles/styles.scss'

import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'

class NotFound extends React.PureComponent {
  state = {
    width: null,
    in: true,
  }
  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth || window.innerWidth,
    })
  }
  render() {
    return (
      <section>
        <Header headerWidth={this.state.width} />
        <Transition show={this.state.in}>
          <div ref={node => (this.container = node)}>
            <Content>
              <h2>Oops! Page Not Found.</h2>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}
export default NotFound
