import React, { PureComponent } from 'react';
import { HistoryChangedEvent } from './history';
export interface Route {
    name: string;
    url?: string;
    pattern: string | RegExp;
    component: React.ComponentType<any>;
}
export interface RouterProps {
    routes: Route[];
    onRouteChanged?: (current?: Route, previous?: Route) => Promise<any> | number | boolean;
    className?: string;
}
export interface RouterState {
    previous?: Route;
    current?: Route;
    isChanging: boolean;
}
declare class Router extends PureComponent<RouterProps, RouterState> {
    static routes: Route[];
    static notFound?: Route;
    constructor(props: RouterProps);
    componentDidMount(): void;
    process(url: string): void;
    display: (route: Route, url?: string | undefined) => void;
    endTransition: () => void;
    _onHistoryChanged: (event: HistoryChangedEvent) => void;
    _onPopState: () => void;
    render(): JSX.Element;
}
export default Router;
