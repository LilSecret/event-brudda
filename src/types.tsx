import { TState } from "./States";

export type TUser = {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  state?: string;
  profileImg?: string;
};

export type TEvent = {
  eventId: number;
  title: string;
  date: Date;
  time: string;
  host: string;
  description: string;
  attendees: number;
  thumbnail?: string;
};

export type TEventLocation = {
  id: number;
  eventId: number;
  city: string;
  state: TState;
  streetAddress: string;
  postalCode: number;
};
