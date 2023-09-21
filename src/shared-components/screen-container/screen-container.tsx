import {R} from '@res';
import React, {PropsWithChildren} from 'react';
import {StatusBar} from 'react-native';

import {BackgroundWrapper} from './screen-container.styles';

export const ScreenContainer = (props: PropsWithChildren) => {
  return (
    <>
      <StatusBar backgroundColor={R.colors.appTheme.background} />
      <BackgroundWrapper>{props.children}</BackgroundWrapper>
    </>
  );
};
