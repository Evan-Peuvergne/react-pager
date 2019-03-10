export declare type HistoryChangedEvent = {
    dest: string;
    url: string;
    name?: string;
};
export declare type Listener = ((event: HistoryChangedEvent) => any) | (() => any);
declare class History {
    static instance?: History;
    listeners: Listener[];
    constructor();
    listen: (listener: Listener) => void;
    go: (url: string) => void;
    _callListeners: (event: HistoryChangedEvent) => void;
}
declare const _default: History;
export default _default;
