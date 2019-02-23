import React, { Component, ReactNode } from "react";
declare interface LinkProps {
    dest: string;
    className: string;
    children: ReactNode;
}
declare class Link extends Component<LinkProps, {}> {
    constructor(props: LinkProps);
    render(): JSX.Element;
    _onClick: (evt: React.SyntheticEvent<Element, Event>) => void;
}
export default Link;
