import {DataLayer} from '@data-layer';
import {Instance, types} from 'mobx-state-tree';

import {chatRoomsStore} from './chat-rooms.mstmodel';
import {User} from './user.mstmodel';

export const Participant = types
  .model('Participant', {
    user: types.reference(User),
    inChat: false,
    isTyping: false,
  })
  .actions(self => {
    function startTyping() {
      const chatRoomName = chatRoomsStore.openedChatRoom?.name;
      DataLayer.Participants.startTyping(chatRoomName!!, self.user.id);
    }

    function stopTyping() {
      const chatRoomName = chatRoomsStore.openedChatRoom?.name;
      DataLayer.Participants.stopTyping(chatRoomName!!, self.user.id);
    }

    return {startTyping, stopTyping};
  });

export interface IParticipant extends Instance<typeof Participant> {}
