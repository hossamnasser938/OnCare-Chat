import {DataLayer} from '@data-layer';
import {flow, types} from 'mobx-state-tree';

import {authStore} from './auth.mstmodel';
import {ChatRoom, IChatRoom} from './chat-room.mstmodel';

export const ChatRoomsStore = types
  .model('ChatRoomsStore', {
    chatRoomsMap: types.map(ChatRoom),
    openedChatRoom: types.maybeNull(types.reference(ChatRoom)),
  })
  .actions(self => {
    const createRoom = flow(function* (name: string) {
      const userId = authStore.user?.id;
      yield DataLayer.ChatRooms.createChatRoom(name, userId!!);
    });

    function chatRoomAdded(chatRoom: IChatRoom) {
      self.chatRoomsMap.set(chatRoom.name, chatRoom);
    }

    function joinChatRoom(chatRoom: IChatRoom) {
      self.openedChatRoom = chatRoom;
    }

    function leaveChatRoom() {
      self.openedChatRoom = null;
    }

    return {createRoom, chatRoomAdded, joinChatRoom, leaveChatRoom};
  })
  .views(self => ({
    get chatRooms() {
      const rooms = Array.from(self.chatRoomsMap.values());
      rooms.sort((item, nextItem) => nextItem.createdAt - item.createdAt);
      return rooms;
    },
  }));

export const chatRoomsStore = ChatRoomsStore.create();
