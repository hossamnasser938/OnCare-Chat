import {R} from '@res';
import {hp} from '@utils/styles';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: hp(2),
  },
});

export const ChatIcon = styled.Image.attrs({
  source: R.images.chat,
})``;

export const SettingsIcon = styled.Image.attrs({
  source: R.images.settings,
})``;
