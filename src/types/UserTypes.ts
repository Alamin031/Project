export type UserTypes = {
  id: number | string;
  username: string;
  email: string;
  password: string;
  avater?: string;
  createdAt: string | number | Date;
  isVerified?: boolean;
  role: 'ADMIN' | 'USER';
  asset?: any;
};
