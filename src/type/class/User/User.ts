import {Order} from '@app/type/class/Order/Order';

export interface User {
  id: number;
  card?: Order;

  email: string;
  firstName: string;
  lastName: string;
  role: string;

  dateOfBirth: Date;
  lastLoginAt: Date;
  createdAt: Date;
  updateAt: Date;
}
