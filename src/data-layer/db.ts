import {firebase} from '@react-native-firebase/database';

const DATABASE_URL =
  'https://oncare-chat-1f9bc-default-rtdb.asia-southeast1.firebasedatabase.app/';

const PARENT_DB = firebase.app().database(DATABASE_URL);

export const DB = {
  USERS_REF: PARENT_DB.ref('/users/'),
  CHAT_ROOMS_REF: PARENT_DB.ref('/chat-rooms/'),
};
