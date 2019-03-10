import React, { Component, ReactNode } from 'react';
export interface LinkProps {
    dest: string;
    className?: string;
    active?: boolean;
    children: ReactNode;
}
export interface LinkState {
    url: string;
}
declare class Link extends Component<LinkProps, LinkState> {
    constructor(props: LinkProps);
    render(): JSX.Element;
    _onClick: (evt: React.SyntheticEvent<Element, Event>) => void;
}
export default Link;
