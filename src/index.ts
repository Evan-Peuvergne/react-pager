import Router from './router'
import Link from './link'
import history from './router/history'
import { isMatching } from './router/utils'

export default Router
export { Router, Link, history }
export { isMatching }

import { Route } from './router'
import { LinkProps } from './link'
import { HistoryChangedEvent } from './router/history'

export { Route, LinkProps, HistoryChangedEvent }
