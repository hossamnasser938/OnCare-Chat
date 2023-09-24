import {EAvatarSize} from '@shared-components/characters-avatar';
import {IParticipant} from '@state/models/participant.mstmodel';

export interface IParticipantAvatar {
  participant: IParticipant;
  size?: EAvatarSize;
}
