import React, { PureComponent, ComponentType, ReactNode } from 'react'

export interface RouteProps {
  name: string
  pattern: string | RegExp
  url: string
  component: ComponentType<any>
}

class Route extends PureComponent<RouteProps> {
  render() {
    const Component = this.props.component
    return <Component />
  }
}

export default Route
