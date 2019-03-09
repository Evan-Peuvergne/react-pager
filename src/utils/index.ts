import { Route } from '../router'

export const isUrlMatchingRoute = (url: string, route: Route): boolean => {
  let pattern = route.pattern

  if (pattern instanceof RegExp) return pattern.test(url)
  if (route.pattern instanceof String) return route.pattern === url
  return false
}
