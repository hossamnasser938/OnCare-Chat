import {IMessage} from '@state/models/message.mstmodel';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {FlatList} from 'react-native';

import {MessageItem} from './components';
import {IMessagesListProps} from './messages-list.types';

export const MessagesList = (props: IMessagesListProps) => {
  const {messages} = props;
  const reversedMessages = useMemo(() => {
    return [...messages].reverse();
  }, [messages]);

  const listRef = useRef<FlatList>() as React.MutableRefObject<FlatList>;

  const keyExtractor = useCallback((item: IMessage) => `${item.createdAt}`, []);

  const renderItem = useCallback(({item}: {item: IMessage}) => {
    return <MessageItem message={item} />;
  }, []);

  useEffect(() => {
    if (messages.length) {
      listRef.current.scrollToOffset({
        animated: true,
        offset: 0,
      });
    }
  }, [messages.length]);

  return (
    <FlatList
      ref={listRef}
      data={reversedMessages}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      inverted
    />
  );
};
