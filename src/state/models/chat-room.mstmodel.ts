import {Instance, types} from 'mobx-state-tree';

export const ChatRoom = types
  .model('ChatRoom', {
    name: types.string,
    owner: types.string,
    createdAt: types.number,
  })
  .views(self => ({
    get chatRoomNameShortCut() {
      return self.name
        .split(' ')
        .map(word => word[0])
        .filter((_, index) => index === 0 || index === 1)
        .join('');
    },
  }));

export interface IChatRoom extends Instance<typeof ChatRoom> {}
