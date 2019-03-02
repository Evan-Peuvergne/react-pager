import React, { Component } from 'react';
class Link extends Component {
    constructor(props) {
        super(props);
        this._onClick = (evt) => {
            evt.preventDefault();
            // console.log('coucou')
            // this.router.show(this.props.dest)
        };
    }
    render() {
        return (React.createElement("a", { href: this.props.dest, className: this.props.className, onClick: this._onClick }, this.props.children));
    }
}
export default Link;
