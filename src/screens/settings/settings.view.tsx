import {R} from '@res';
import {Button, ScreenContainer} from '@shared-components';
import React from 'react';

import {ISettingsViewProps} from './settings.types';

export const SettingsView = (props: ISettingsViewProps) => {
  return (
    <ScreenContainer>
      <Button title={R.strings.logout} onPress={props.logoutHandler} />
    </ScreenContainer>
  );
};
