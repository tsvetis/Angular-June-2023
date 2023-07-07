import { Theme } from './theme';
import { UserId } from './user-id';

export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: UserId;
  themeId: Theme;
  created_at: string;
  updatedAt: string;
  __v: number;
}
