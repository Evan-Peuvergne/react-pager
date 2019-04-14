import Route, { RouteType } from './route'

export const isMatching = (url: string, route: RouteType): boolean => {
  const pattern = route.props.pattern
  if (pattern instanceof RegExp) return pattern.test(url)
  if (typeof pattern === 'string') return pattern === url
  return false
}
