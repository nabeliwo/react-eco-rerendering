export const path = {
  root: () => `/`,
  users: () => `/users`,
  user: (userId: string) => `/users/${userId}`,
  editUser: (userId: string) => `/users/${userId}/edit`,
}
