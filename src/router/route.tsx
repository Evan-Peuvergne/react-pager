import React, {
  PureComponent,
  ComponentType,
  ReactNode,
  ReactElement,
} from 'react'

export interface RouteProps {
  name: string
  pattern: string | RegExp
  url?: string
  component: ComponentType<any>
}
export type RouteType = ReactElement<RouteProps>

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

export const DefaultNotFoundRoute = (
  <Route name='Not found' pattern='*' component={() => <p>Not found</p>} />
)

export default Route
