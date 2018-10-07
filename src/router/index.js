import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from 'page'


class Router extends Component {

  constructor (props) {
    super(props)

    this.router = Page
    this.props.routes.forEach(route => {
      this.router(route.url, this.display.bind(this, route))
    })

    this.state = { 
      previous: null,
      current: null
    }
  }

  componentDidMount () {
    this.router.start()
  }

  display (route) {
    if(route === this.state.current) { return }
    this.setState({ current: route, previous: this.state.current })
  }

  render () {
    let state = this.state
    let Current = state.current ? state.current.component : null
    let Previous = state.previous ? state.previous.component : null

    return (
      <div className={this.props.className}>
        {Previous &&
          <Previous ref={$el => this.$previous = $el} />
        }
        {Current &&
          <Current ref={$el => this.$current = $el} />
        }
      </div>
    )
  }

}

Router.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Router