import { Component } from 'react';
export interface Route {
    name: String;
    url: String;
    component: any;
}
export interface RouterProps {
    routes: [Route];
    className?: string;
}
export interface RouterState {
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
