import React, { PureComponent } from 'react';
import { HistoryChangedEvent } from './history';
import { RouteType, RouteProps } from './route';
export interface RouterProps {
    onRouteChanged?: (current?: RouteType, previous?: RouteType) => Promise<any> | number | boolean;
    children: RouteType[];
    className?: string;
}
export interface RouterState {
    previous?: RouteType;
    current?: RouteType;
    isChanging: boolean;
}
declare class Router extends PureComponent<RouterProps, RouterState> {
    static routes: RouteType[];
    static notFound: RouteType;
    constructor(props: RouterProps);
    componentDidMount(): void;
    parse: (url: string) => React.ReactElement<RouteProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    display: (route: React.ReactElement<RouteProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => void;
    endTransition: () => void;
    _onHistoryChanged: (event: HistoryChangedEvent) => void;
    render(): JSX.Element;
}
export default Router;
