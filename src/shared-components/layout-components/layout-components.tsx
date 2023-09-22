import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

export const VerticalSpace = styled.View<{val: number}>`
  height: ${props => hp(props.val || 3)}px;
`;

export const FlexView = styled.View<{flex: number}>`
  flex: ${props => props.flex || 1};
`;

export const HorizontalLine = styled.View<{stroke?: number; color?: string}>`
  height: ${props => props.stroke || 1}px;
  background-color: ${props => props.color || R.colors.grey};
`;
