import {useMSTStore} from '@state';
import React from 'react';

import {SettingsView} from './settings.view';

export const SettingsScreen = () => {
  const {authStore} = useMSTStore();

  const logoutHandler = () => {
    authStore.logout();
  };

  return <SettingsView logoutHandler={logoutHandler} />;
};
