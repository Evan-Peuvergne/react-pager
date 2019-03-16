import React, { PureComponent, ReactElement } from 'react';
import { HistoryChangedEvent } from './history';
import Route, { RouteProps } from './route';
export declare type RouteType = ReactElement<RouteProps>;
export interface RouterProps {
    children: RouteType[];
    className?: string;
}
export interface RouterState {
    previous?: RouteType;
    current?: RouteType;
    isChanging: boolean;
}
declare class Router extends PureComponent<RouterProps, RouterState> {
    constructor(props: RouterProps);
    componentDidMount(): void;
    process(url: string): void;
    display: (route: React.ReactElement<RouteProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => void;
    endTransition: () => void;
    _onHistoryChanged: (event: HistoryChangedEvent) => void;
    _onPopState: () => void;
    render(): JSX.Element;
}
export default Router;
export { Route };
