import { createSelector } from 'reselect';

const selectWeb3 = state => state.accounts;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

