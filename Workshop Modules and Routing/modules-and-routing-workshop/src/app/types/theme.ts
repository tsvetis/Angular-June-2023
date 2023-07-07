import { UserId } from './user-id';

export interface Theme {
  subscribers: string[];
  posts: string[];
  _id: string;
  themeName: string;
  userId: UserId;
  created_at: string;
  updatedAt: string;
  __v: number;
}
