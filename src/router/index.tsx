import React, { PureComponent, Fragment, ReactElement, Children } from 'react'
import { findIndex, values } from 'lodash'
import history, { HistoryChangedEvent, Listener } from './history'
import { isMatching } from './utils'

import Route, { DefaultNotFoundRoute, RouteType, RouteProps } from './route'

export interface RouterProps {
  onRouteChanged?: (
    current?: RouteType,
    previous?: RouteType
  ) => Promise<any> | number | boolean
  children: RouteType[]
  className?: string
}
export interface RouterState {
  previous?: RouteType
  current?: RouteType
  isChanging: boolean
}

class Router extends PureComponent<RouterProps, RouterState> {
  static routes: RouteType[]
  static notFound: RouteType

  constructor(props: RouterProps) {
    super(props)
    this.state = {
      previous: undefined,
      current: undefined,
      isChanging: false,
    }

    Router.routes = values(props.children)
    let index: number = findIndex(props.children, r => r.props.pattern === '*')
    if (index) Router.notFound = Router.routes[index]
    else Router.notFound = DefaultNotFoundRoute
  }

  componentDidMount() {
    this.display(this.parse(window.location.pathname))

    history.listen(this._onHistoryChanged)
  }

  parse = (url: string): RouteType => {
    for (let r in Router.routes) {
      let route = Router.routes[r]
      if (isMatching(url, route.props.pattern)) return route
    }
    return Router.notFound
  }

  display = (route: RouteType): void => {
    let previous = this.state.current
    this.setState({
      current: route,
      previous,
      isChanging: true,
    })

    if (this.props.onRouteChanged) {
      let result = this.props.onRouteChanged(route, previous)
      if (typeof result === 'boolean' && result === true) this.endTransition()
      if (typeof result === 'number') setTimeout(this.endTransition, result)
      if (result instanceof Promise) result.then(this.endTransition)
    } else {
      this.endTransition()
    }
  }

  endTransition = (): void => {
    this.setState({ previous: undefined, isChanging: false })
  }

  _onHistoryChanged = (event: HistoryChangedEvent): void => {
    this.display(this.parse(window.location.pathname))
  }

  render() {
    const { current, previous } = this.state
    console.log(current)

    return (
      <div className={this.props.className}>
        {current}
        {previous}
      </div>
    )
  }
}

export default Router
export { Route }
