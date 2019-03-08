import React, { PureComponent } from 'react'
import { findIndex } from 'lodash'

export interface Route {
  name: string
  url?: string
  pattern: string | RegExp
  component: React.ComponentType<any>
}
export interface RouterProps {
  routes: Route[]
  onRouteChanged?: (
    current?: Route,
    previous?: Route
  ) => Promise<any> | number | boolean
  className?: string
}
export interface RouterState {
  previous?: Route
  current?: Route
  isChanging: boolean
}

class Router extends PureComponent<RouterProps, RouterState> {
  routes: Route[]
  notFound?: Route

  constructor(props: RouterProps) {
    super(props)
    this.state = {
      previous: undefined,
      current: undefined,
      isChanging: false,
    }

    this.routes = props.routes

    let index: number = findIndex(props.routes, r => r.url === '*')
    if (index) this.notFound = props.routes[index]
    this.routes.splice(index, 1)
  }

  componentDidMount() {
    this.process(window.location.pathname)

    window.addEventListener('popstate', this._onPopState)
    window.addEventListener('HistoryChanged', d => {
      this.process(window.location.pathname)
    })
  }

  process(url: string): void {
    for (let i in this.routes) {
      let route: Route = this.routes[i]

      if (route.pattern instanceof RegExp && route.pattern.test(url))
        return this.display(route, url)
      if (route.pattern instanceof String && route.pattern === url)
        return this.display(route, url)
    }
    if (this.notFound) return this.display(this.notFound)
  }

  display = (route: Route, url?: string): void => {
    let previous = this.state.current

    if (url && route.url !== url)
      window.history.replaceState({}, route.name, route.url)

    this.setState({
      current: route,
      previous: this.state.current,
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

  _onPopState = () => {
    let event = new CustomEvent('HistoryChanged', {})
    window.dispatchEvent(event)
  }

  render() {
    let state: RouterState = this.state
    let Current = state.current ? state.current.component : null
    let Previous = state.previous ? state.previous.component : null

    return (
      <div className={this.props.className}>
        {Previous && state.isChanging && <Previous />}
        {Current && <Current />}
      </div>
    )
  }
}

export default Router
