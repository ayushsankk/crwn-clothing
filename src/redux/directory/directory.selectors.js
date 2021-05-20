import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectCurrentDirectory = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
