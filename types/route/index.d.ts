import { PureComponent, ComponentType } from 'react';
export interface RouteProps {
    name: string;
    pattern: string | RegExp;
    url?: string;
    component: ComponentType<any>;
}
declare class Route extends PureComponent<RouteProps> {
    matchUrl: (url: string) => Boolean;
    render(): JSX.Element;
}
export default Route;
