import {observer} from 'mobx-react-lite';

import {IChatRoomParticipantsProps} from './chat-room-participants.types';

export const ChatRoomParticipants = observer(
  (props: IChatRoomParticipantsProps) => {
    const {chatRoom} = props;

    return null;
  },
);
