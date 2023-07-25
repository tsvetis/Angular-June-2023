import { Post, PostState } from './post.type';
import * as PostAction from './post.actions';

export type Action = PostAction.All;

// Define application default state
const defaultState: Post = {
  text: 'I am default text!',
  likes: 0,
};

// helper function to combine state
function newState(state: Post, newData: Post) {
  return { ...state, ...newData };
}

export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case PostAction.EDIT_TEXT:
      return newState(state, { text: action.payload });

    case PostAction.RESET:
      return defaultState;

    case PostAction.DOWNVOTE:
      return newState(state, {
        likes: state?.likes !== undefined ? state.likes - 1 : 0,
      });

    case PostAction.UPVOTE:
      return newState(state, {
        likes: state?.likes !== undefined ? state.likes + 1 : 0,
      });

    default:
      return state;
  }
}
