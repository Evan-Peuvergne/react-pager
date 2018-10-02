import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from 'page'

import RouterStore from 'store'


class Router extends Component {

  constructor (props) {
    super(props)

    this.router = Page
    this.props.routes.forEach(r => {
      this.router(r.url, this.display.bind(this, r))
    })
    // this.router('*', () => { this.setState({ current: this.props.notFound }) })

    this.state = {
      current: null
    }
  }

  componentDidMount () {
    this.router.start()
  }

  display (route) {
    this.setState({ current: route.component, notFound: false })
  }

  render () {
    let Current = this.state.current

    return (
      <div>
        {Current &&
          <Current />
        }
      </div>
    )
  }

}

Router.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Router