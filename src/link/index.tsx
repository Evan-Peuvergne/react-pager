import React, { Component, ReactNode, SyntheticEvent } from "react";

declare interface LinkProps {
  dest: string;
  className: string;
  children: ReactNode;
}

class Link extends Component<LinkProps, {}> {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return (
      <a
        href={this.props.dest}
        className={this.props.className}
        onClick={this._onClick}
      >
        {this.props.children}
      </a>
    );
  }

  _onClick = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    // console.log('coucou')
    // this.router.show(this.props.dest)
  };
}

export default Link;
