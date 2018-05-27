import React from 'react';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Header from '../layouts/header';
import Content from '../layouts/content';
import Transition from '../components/transition';

class NotFound extends React.Component {
  state = {
    width: null,
    in: true
  }
  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth
    })
  }
  componentWillUnmount() {
    this.setState({
      in: false
    })
  }
  render() {
    return (
      <section>
        <Header headerWidth={this.state.width} />
        <Transition show={this.state.in}>
          <div ref={node => this.container = node}>
            <Content>
              <h2>Oops! Page Not Found.</h2>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}
export default NotFound;
