import { createAction, props } from '@ngrx/store';
import { MainState } from '.';

// action type
const actionType = {
  increment: 'INCREMENT', // UNIQUE! ADD PREFIX
  setValue: 'SET_VALUE',
};

export const increment = createAction(actionType.increment);
export const setValue = createAction(actionType.setValue, props<MainState>());
