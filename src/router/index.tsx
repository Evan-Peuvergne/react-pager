import React, { PureComponent, ReactElement } from 'react'
import { findIndex } from 'lodash'
import history, { HistoryChangedEvent, Listener } from './history'
import { isMatching } from './utils'

import Route, { RouteProps } from './route'

// export interface Route {
//   name: string
//   url?: string
//   pattern: string | RegExp
//   component: React.ComponentType<any>
// }
export type RouteType = ReactElement<RouteProps>
export interface RouterProps {
  // routes: Route[]
  // onRouteChanged?: (
  //   current?: Route,
  //   previous?: Route
  // ) => Promise<any> | number | boolean
  // children: ComponentType<RouteProps>[]
  children: RouteType[]
  className?: string
}
export interface RouterState {
  previous?: RouteType
  current?: RouteType
  isChanging: boolean
}

class Router extends PureComponent<RouterProps, RouterState> {
  // static routes: Route[]
  // static notFound?: Route

  constructor(props: RouterProps) {
    super(props)

    this.state = {
      previous: undefined,
      current: undefined,
      isChanging: false,
    }

    // this.state = {
    //   previous: undefined,
    //   current: undefined,
    //   isChanging: false,
    // }

    // Router.routes = props.routes

    // let index: number = findIndex(props.routes, r => r.url === '*')
    // if (index) Router.notFound = props.routes[index]
    // Router.routes.splice(index, 1)
  }

  componentDidMount() {
    this.process(window.location.pathname)

    history.listen(this._onHistoryChanged)
  }

  process(url: string): void {
    for (let r in this.props.children) {
      let route = this.props.children[r]
      if (isMatching(url, route.props.pattern)) return this.display(route)
    }
    // if (Router.notFound) return this.display(Router.notFound)
  }

  display = (route: RouteType): void => {
    this.setState({
      current: route,
      previous: this.state.current,
      isChanging: true,
    })
  }

  // display = (route: Route, url?: string): void => {
  // let previous = this.state.current
  // if (url && route.url !== url)
  //   window.history.replaceState({}, route.name, route.url)
  // this.setState({
  //   current: route,
  //   previous: this.state.current,
  //   isChanging: true,
  // })
  // if (this.props.onRouteChanged) {
  //   let result = this.props.onRouteChanged(route, previous)
  //   if (typeof result === 'boolean' && result === true) this.endTransition()
  //   if (typeof result === 'number') setTimeout(this.endTransition, result)
  //   if (result instanceof Promise) result.then(this.endTransition)
  // } else {
  //   this.endTransition()
  // }
  // }

  endTransition = (): void => {
    // this.setState({ previous: undefined, isChanging: false })
  }

  _onHistoryChanged = (event: HistoryChangedEvent): void => {
    this.process(event.url)
  }

  _onPopState = () => {
    // let event = new CustomEvent('HistoryChanged', {})
    // window.dispatchEvent(event)
  }

  render() {
    let Current = this.state.current
    // let Previous = state.previous ? state.previous.component : null

    return (
      <div className={this.props.className}>
        {/* {Previous && state.isChanging && <Previous />} */}
        {Current}
      </div>
    )
  }
}

export default Router
export { Route }
