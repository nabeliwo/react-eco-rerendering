import { RouteProps } from 'react-router'

import { path } from './constants/application'

import { Users } from './redux/containers/UsersContainer'
import { User } from './redux/containers/UserContainer'
import { EditUser } from './redux/containers/EditUserContainer'

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
  root: route(path.root(), Users, {
    user: route(path.user(':userId'), User),
    editUser: route(path.editUser(':userId'), EditUser),
  }),
}
