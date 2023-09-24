import {Instance, types} from 'mobx-state-tree';

import {User} from './user.mstmodel';

export const Participant = types.model('Participant', {
  user: types.reference(User),
  inChat: false,
});

export interface IParticipant extends Instance<typeof Participant> {}
