import React, {
  PureComponent,
  ComponentType,
  ReactNode,
  ReactElement,
} from 'react'

export type RouteProps = {
  name: string
  pattern: string | RegExp
  url?: string
  children?: ReactElement<any> | ReactElement<any>[]
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
    return this.props.children
  }
}

export const DefaultNotFoundRoute = (
  <Route name='Not found' pattern='*'>
    <p>Not found</p>
  </Route>
)

export default Route
