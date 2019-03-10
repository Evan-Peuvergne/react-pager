import React, { PureComponent } from 'react'
import { findIndex } from 'lodash'
import history, { HistoryChangedEvent, Listener } from './history'
import { isUrlMatchingRoute } from './utils'

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
  static routes: Route[]
  static notFound?: Route

  constructor(props: RouterProps) {
    super(props)

    this.state = {
      previous: undefined,
      current: undefined,
      isChanging: false,
    }

    Router.routes = props.routes

    let index: number = findIndex(props.routes, r => r.url === '*')
    if (index) Router.notFound = props.routes[index]
    Router.routes.splice(index, 1)
  }

  componentDidMount() {
    this.process(window.location.pathname)

    history.listen(this._onHistoryChanged)

    // window.addEventListener('popstate', this._onPopState)
    // window.addEventListener('HistoryChanged', d => {
    //   this.process(window.location.pathname)
    // })
  }

  process(url: string): void {
    for (let i in Router.routes) {
      let route: Route = Router.routes[i]
      if (isUrlMatchingRoute(url, route)) return this.display(route, url)
    }
    if (Router.notFound) return this.display(Router.notFound)
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

  _onHistoryChanged = (event: HistoryChangedEvent): void => {
    this.process(event.url)
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
