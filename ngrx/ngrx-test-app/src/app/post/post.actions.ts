import { Action } from '@ngrx/store';

// DEFINE TYPES
export const EDIT_TEXT = '[Post] Edit';
export const RESET = '[Post] Reset';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';

// DEFINE ACTIONS
export class EditText implements Action {
  readonly type = EDIT_TEXT;

  constructor(public payload: string) {}
}

export class Reset implements Action {
  readonly type = RESET;
}

export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export type All = Upvote | Downvote | Reset | EditText;
