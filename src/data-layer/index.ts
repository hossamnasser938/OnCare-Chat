import {Auth} from './auth.data';
import {ChatRooms} from './chat-rooms.data';
import {Messages} from './messages.data';
import {Participants} from './participants.data';
import {Readers} from './readers.data';
import {Users} from './users.data';

export const DataLayer = {
  Users,
  Auth,
  ChatRooms,
  Messages,
  Participants,
  Readers,
};

export {translateErrorCode} from './error-code-translator';
