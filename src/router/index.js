import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from 'page'


class Router extends Component {

  constructor (props) {
    super(props)

    this.router = Page
    this.props.routes.forEach(r => {
      this.router(r.url, this.display.bind(this, r))
    })

    this.state = {
      current: null
    }
  }

  componentDidMount () {
    this.router.start()
  }

  display (route) {
    this.setState({ current: route.component })
  }

  render () {
    let Children = this.state.current
    return (
      <div>
        {Children &&
          <Children></Children>
        }
      </div>
    )
  }

}

Router.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Router