export const path = {
  root: () => `/`,
  user: (userId: string) => `/users/${userId}`,
  editUser: (userId: string) => `/users/${userId}/edit`,
}
