import React, { PureComponent, ComponentType, ReactNode } from 'react'

export interface RouteProps {
  name: string
  pattern: string | RegExp
  url?: string
  component: ComponentType<any>
}

class Route extends PureComponent<RouteProps> {
  matchUrl = (url: string): Boolean => {
    const pattern = this.props.pattern

    if (pattern instanceof RegExp) return pattern.test(url)
    if (typeof pattern === 'string') return pattern === url
    return false
  }

  render() {
    const Component = this.props.component
    return <Component />
  }
}

export default Route
