import {useContext} from 'react';

import {MSTStoreContext} from './mst-context';

export const useMSTStore = () => {
  return useContext(MSTStoreContext);
};
