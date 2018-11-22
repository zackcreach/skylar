import React from 'react'

import '../styles/styles.scss'

import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'

class NotFound extends React.PureComponent {
  state = {
    width: null,
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
          <div ref={node => (this.container = node)}>
            <Content>
              <h2>Oops! Page Not Found.</h2>
            </Content>
          </div>
        </section>
      </Layout>
    )
  }
}
export default NotFound
