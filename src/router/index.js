import React, { Component } from 'react';
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previous: undefined,
            current: undefined,
            isChanging: false,
        };
    }
    display(route) {
        this.setState({
            current: route,
            previous: this.state.current,
            isChanging: true,
        });
    }
    render() {
        // let state: RouterState = this.state
        // let Current = state.current ? state.current.component : null
        // let Previous = state.previous ? state.previous.component : null
        return (React.createElement("p", null, "Evan")
        // <Root className={this.props.className}>
        //   {Previous && state.isChanging && <Previous />}
        //   {Current && <Current />}
        // </Root>
        );
    }
}
export default Router;
