import React from 'react'
import { CSSTransition } from 'react-transition-group'

const Transition = ({ show, children, ...props }) => (
  <CSSTransition {...props} classNames="swoop" in={show}>
    {children}
  </CSSTransition>
)

export default Transition
