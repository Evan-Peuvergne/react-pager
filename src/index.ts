import Router from './router'
import Route, { RouteProps } from './route'
import Link, { LinkProps } from './link'
import history, { HistoryChangedEvent } from './router/history'
import { isMatching } from './router/utils'

export default Router
export { Router, Route, Link, history }
export { isMatching }
export { LinkProps, HistoryChangedEvent }
