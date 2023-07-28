import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainState } from '.';

const mainSelector = createFeatureSelector<MainState>('main');

export const getCounter = createSelector(mainSelector, (s) => {
  return s.counter;
});
