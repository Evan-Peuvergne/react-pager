import { PureComponent, ComponentType, ReactElement } from 'react';
export interface RouteProps {
    name: string;
    pattern: string | RegExp;
    url?: string;
    component: ComponentType<any>;
}
export declare type RouteType = ReactElement<RouteProps>;
declare class Route extends PureComponent<RouteProps> {
    matchUrl: (url: string) => Boolean;
    render(): JSX.Element;
}
export declare const DefaultNotFoundRoute: JSX.Element;
export default Route;
