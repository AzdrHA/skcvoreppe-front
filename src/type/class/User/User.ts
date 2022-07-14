export interface User {
  id: number

  email: string
  firstname: string
  lastname: string
  role: string

  lastLoginAt: Date
  createdAt: Date;
  updateAt: Date
}
