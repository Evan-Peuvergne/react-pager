import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from 'page'

import Styles from './styles'


class Router extends Component {

  constructor (props) {
    super(props)

    this.router = Page
    this.props.routes.forEach(route => {
      this.router(route.url, this.display.bind(this, route))
    })

    this.state = { current: null }
  }

  componentDidMount () {
    this.router.start()
  }

  display (route) {
    this.setState({ current: route.component })
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