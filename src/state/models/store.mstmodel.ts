import {types} from 'mobx-state-tree';

import {AuthStore} from './auth.mstmodel';

export const MSTStore = types.model('Root', {
  authStore: AuthStore,
});

export const mstStore = MSTStore.create({
  authStore: {},
});
