import Router from './router'
import Route, { RouteType, RouteProps } from './router/route'
import Link, { LinkProps } from './link'
import history, { HistoryChangedEvent } from './router/history'
import { isMatching } from './router/utils'

export default Router
export { Router, Route, Link, history }
export { isMatching }
export { RouteType, RouteProps, LinkProps, HistoryChangedEvent }
