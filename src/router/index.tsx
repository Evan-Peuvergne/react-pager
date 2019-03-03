import React, { Component } from 'react'

import { Root } from './styles'

export interface Route {
  name: string
  url: string | RegExp
  component: React.ComponentType<any>
}
export interface RouterProps {
  routes: Route[]
  className?: string
}
export interface RouterState {
  previous?: Route
  current?: Route
  isChanging: boolean
}

class Router extends Component<RouterProps, RouterState> {
  constructor(props: RouterProps) {
    super(props)

    this.state = {
      previous: undefined,
      current: undefined,
      isChanging: false,
    }
  }

  display(route: Route) {
    this.setState({
      current: route,
      previous: this.state.current,
      isChanging: true,
    })
  }

  render() {
    // let state: RouterState = this.state
    // let Current = state.current ? state.current.component : null
    // let Previous = state.previous ? state.previous.component : null

    return (
      <p>Evan</p>
      // <Root className={this.props.className}>
      //   {Previous && state.isChanging && <Previous />}
      //   {Current && <Current />}
      // </Root>
    )
  }
}

export default Router
