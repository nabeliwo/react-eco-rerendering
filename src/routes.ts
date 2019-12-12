import { RouteProps } from 'react-router'

import { path } from './constants/application'

import { Users } from './redux/containers/UsersContainer'
import { User } from './redux/containers/UserContainer'

type Route = {
  path: string
  component: RouteProps['component']
  children: { [key: string]: Route }
}

const route = (routePath: Route['path'], component: Route['component'], children?: Route['children']) => ({
  path: routePath,
  component,
  children: children || {},
})

export const routes = {
  root: route(path.root(), Users),
  users: route(path.users(), Users),
  user: route(path.user(':userId'), User),
  // nested: route(path.nested(), Nested, {
  //   alpha: route(path.nestedAlpha(), NestedAlpha),
  //   bravo: route(path.nestedBravo(), NestedBravo),
  //   charlie: route(path.nestedCharlie(), NestedCharlie),
  // }),
}
