import {Instance, types} from 'mobx-state-tree';

export const ChatRoom = types.model('ChatRoom', {
  name: types.string,
  owner: types.string,
  createdAt: types.number,
});

export interface IChatRoom extends Instance<typeof ChatRoom> {}
