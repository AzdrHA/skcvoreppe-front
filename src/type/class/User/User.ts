export interface User {
  id: number;

  email: string;
  firstName: string;
  lastName: string;
  role: string;

  dateOfBirth: Date;
  lastLoginAt: Date;
  createdAt: Date;
  updateAt: Date;
}
