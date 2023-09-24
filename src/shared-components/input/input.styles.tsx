import {R} from '@res';
import {hp} from '@utils/styles';
import styled from 'styled-components/native';

import {EValidityState} from './input.types';

const ValidityStateToBorderColorMapper: Record<EValidityState, string> = {
  [EValidityState.NONE]: R.colors.appTheme.tint,
  [EValidityState.VALID]: R.colors.green,
  [EValidityState.INVALID]: R.colors.red,
};

export const InputWrapper = styled.View<{validityState: EValidityState}>`
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props =>
    ValidityStateToBorderColorMapper[
      props.validityState || EValidityState.NONE
    ]};
  padding-vertical: ${hp(1.3)}px;
  padding-horizontal: ${hp(1)}px;
`;
