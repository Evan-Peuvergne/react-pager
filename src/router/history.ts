import { find, List } from 'lodash'
import Router from './index'
import { isUrlMatchingRoute } from './utils'

export type HistoryChangedEvent = {
  dest: string
  url: string
  name?: string
}
export type Listener = ((event: HistoryChangedEvent) => any) | (() => any)

class History {
  static instance?: History

  listeners: Listener[] = []

  constructor() {
    if (History.instance) return History.instance
    else return this
  }

  listen = (listener: Listener): void => {
    this.listeners.push(listener)
  }

  go = (url: string): void => {
    let event: HistoryChangedEvent = { dest: url, url }

    let route = find(Router.routes, r => isUrlMatchingRoute(url, r))
    if (route)
      event = Object.assign(event, { url: route.url, name: route.name })

    if (route) window.history.pushState(event, route.name, route.url)
    else window.history.pushState(event, url, url)

    this._callListeners(event)
  }

  _callListeners = (event: HistoryChangedEvent): void => {
    this.listeners.forEach(l => l(event))
  }
}

export default new History()
