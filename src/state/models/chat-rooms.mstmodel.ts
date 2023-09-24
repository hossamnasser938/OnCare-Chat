import {DataLayer} from '@data-layer';
import {IDBChatRoom} from '@data-layer/types';
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

    function chatRoomAdded(dbChatRoom: IDBChatRoom) {
      self.chatRoomsMap.set(dbChatRoom.name, dbChatRoom);
    }

    function joinChatRoom(chatRoom: IChatRoom) {
      const userId = authStore.user?.id;
      DataLayer.Participants.joinChatRoom(chatRoom.name, userId!!);
      self.openedChatRoom = chatRoom;
    }

    function leaveChatRoom() {
      const userId = authStore.user?.id;
      DataLayer.Participants.leaveChatRoom(
        self.openedChatRoom?.name!!,
        userId!!,
      );
      self.openedChatRoom = null;
    }

    return {createRoom, chatRoomAdded, joinChatRoom, leaveChatRoom};
  })
  .views(self => ({
    get chatRooms() {
      return Array.from(self.chatRoomsMap.values()).sort(
        (item, nextItem) => nextItem.createdAt - item.createdAt,
      );
    },
  }));

export const chatRoomsStore = ChatRoomsStore.create();
