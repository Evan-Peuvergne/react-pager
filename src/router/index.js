import React, { Component } from "react";
import { Root } from "./styles";
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previous: undefined,
            current: undefined,
            isChanging: false
        };
    }
    display(route) {
        this.setState({
            current: route,
            previous: this.state.current,
            isChanging: true
        });
    }
    render() {
        let state = this.state;
        let Current = state.current ? state.current.component : null;
        let Previous = state.previous ? state.previous.component : null;
        return (React.createElement(Root, { className: this.props.className },
            Previous && state.isChanging && React.createElement(Previous, null),
            Current && React.createElement(Current, null)));
    }
}
export default Router;
