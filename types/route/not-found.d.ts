import { PureComponent, ComponentType } from 'react';
export interface NotFoundProps {
    name: string;
    component: ComponentType<any>;
}
declare class NotFound extends PureComponent<NotFoundProps> {
    render(): JSX.Element;
}
export default NotFound;
