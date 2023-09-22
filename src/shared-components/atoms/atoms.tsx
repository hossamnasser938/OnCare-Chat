import {R} from '@res';
import {hp} from '@utils/styles';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

export const ErrorText = styled.Text`
  color: ${R.colors.red};
  min-height: ${hp(4)}px;
`;

export const AppLoading = () => (
  <ActivityIndicator color={R.colors.appTheme.primaryText} />
);
