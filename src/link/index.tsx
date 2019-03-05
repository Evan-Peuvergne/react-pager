import React, { Component, ReactNode, SyntheticEvent } from 'react'

declare interface LinkProps {
  dest: string
  className?: string
  children: ReactNode
}

class Link extends Component<LinkProps, {}> {
  constructor(props: LinkProps) {
    super(props)
  }

  render() {
    return (
      <a
        href={this.props.dest}
        className={this.props.className}
        onClick={this._onClick}>
        {this.props.children}
      </a>
    )
  }

  _onClick = (evt: SyntheticEvent): void => {
    evt.preventDefault()

    let detail = { dest: this.props.dest }
    window.history.pushState(detail, '', this.props.dest)

    let event = new CustomEvent('pushedState', { detail })
    window.dispatchEvent(event)
  }
}

export default Link
