import React, { Component } from 'react'

import { Root } from './styles'

declare interface Route {
  name: String
  url: String
  component: React.ComponentType<any>
}
declare interface RouterProps {
  routes: [Route]
  className: string
}
declare interface RouterState {
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
    let state: RouterState = this.state
    let Current = state.current ? state.current.component : null
    let Previous = state.previous ? state.previous.component : null

    return (
      <Root className={this.props.className}>
        {Previous && state.isChanging && <Previous />}
        {Current && <Current />}
      </Root>
    )
  }
}

export default Router
