import React, { Component, ReactNode, SyntheticEvent } from 'react'

export interface LinkProps {
  dest: string
  className?: string
  active?: boolean
  children: ReactNode
}
export interface LinkState {}

class Link extends Component<LinkProps, LinkState> {
  constructor(props: LinkProps) {
    super(props)
  }

  render() {
    const { dest, className } = this.props

    return (
      <a href={dest} className={className} onClick={this._onClick}>
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
