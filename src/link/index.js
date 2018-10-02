import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from 'page'

import RouterStore from 'store'


class Link extends Component {

  constructor (props) {
    super(props)

    this.router = Page
  }

  render () {
    return (
      <a 
        href={this.props.dest}
        className={this.props.className}
        onClick={this._click}>
        {this.props.children}
      </a>
    )
  }

  _click = (e) => {
    e.preventDefault()
    this.router.show(this.props.dest)
  }

}

Link.propTypes = {
  dest: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Link