import {translateErrorCode} from '@data-layer';
import {useMSTStore} from '@state';
import React, {useState} from 'react';
import {Alert} from 'react-native';

import {
  CreateChatRoomFormData,
  ICreateChatRoomScreenProps,
} from './create-chat-room.types';
import {CreateChatRoomView} from './create-chat-room.view';

export const CreateChatRoomScreen = (props: ICreateChatRoomScreenProps) => {
  const {navigation} = props;
  const {chatRoomsStore} = useMSTStore();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({name}: CreateChatRoomFormData) => {
    setIsLoading(true);
    try {
      await chatRoomsStore.createRoom(name);
      navigation.goBack();
    } catch (err: any) {
      Alert.alert(translateErrorCode(err?.code));
    } finally {
      setIsLoading(false);
    }
  };

  return <CreateChatRoomView onSubmit={onSubmit} isLoading={isLoading} />;
};
