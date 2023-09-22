import {mstStore} from '@state/models';
import React, {PropsWithChildren} from 'react';

import {MSTStoreContext} from './mst-context';

export const MSTStoreContextProvider = (props: PropsWithChildren) => (
  <MSTStoreContext.Provider value={mstStore}>
    {props.children}
  </MSTStoreContext.Provider>
);
