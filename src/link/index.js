import React, { Component } from 'react'


class Link extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <a href={this.props.dest}>
        {this.props.children}
      </a>
    )
  }

}

export default Link