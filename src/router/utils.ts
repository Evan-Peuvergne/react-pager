export const isMatching = (url: string, pattern: string | RegExp): boolean => {
  if (pattern instanceof RegExp) return pattern.test(url)
  if (typeof pattern === 'string') return pattern === url
  return false
}
