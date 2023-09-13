import { routesConfig } from '@shared/lib/routes/routesConfig'

export const getPageTitle = (location: string) => {
  const currentRoute = Object.values(routesConfig).find(val => {
    return val.path === location
  })

  return currentRoute?.name
}
