import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { increment, setValue } from './action';

export interface MainState {
  counter: number;
}

const mainInitState: MainState = {
  counter: 0,
};

const mainReducer = createReducer<MainState>(
  mainInitState,
  on(increment, (state) => {
    const { counter } = state;
    return { ...state, counter: counter + 1 };
  }),
  on(setValue, (state, action) => {
    const { counter } = action;
    return { ...state, counter };
  })
);

interface AppState {
  main: MainState;
}

export const reducers: ActionReducerMap<AppState> = {
  main: mainReducer,
};
