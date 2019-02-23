import React, { Component } from "react";
declare interface Route {
    name: String;
    url: String;
    component: React.ComponentType<any>;
}
declare interface RouterProps {
    routes: [Route];
    className: string;
}
declare interface RouterState {
    previous?: Route;
    current?: Route;
    isChanging: boolean;
}
declare class Router extends Component<RouterProps, RouterState> {
    constructor(props: RouterProps);
    display(route: Route): void;
    render(): JSX.Element;
}
export default Router;
