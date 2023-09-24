export interface IDBUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IDBChatRoom {
  name: string;
  owner: string;
  createdAt: number;
  messages?: Record<string, IDBMessage>;
  participants?: Record<string, IDBParticipant>;
}

export interface IDBMessage {
  id: string;
  text: string;
  owner: string;
  createdAt: number;
}

export interface IDBParticipant {
  user: string;
  inChat: boolean;
}
