import React from 'react'

import '../styles/styles.scss'

import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import Transition from '../components/transition'

class NotFound extends React.Component {
  state = {
    width: null,
    in: true,
  }
  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth || window.innerWidth,
    })
  }
  componentWillUnmount() {
    this.setState({
      in: false,
    })
  }
  render() {
    return (
      <Layout>
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
      </Layout>
    )
  }
}
export default NotFound
