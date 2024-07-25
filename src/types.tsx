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

export type TEventLocationType = "in-person" | "online" | "hybrid";

export type TTimezone = "CDT" | "MDT" | "PDT" | "EDT";

export type TEvent = {
  eventId: string;
  title: string;
  date: string;
  time: string;
  timezone: TTimezone;
  host: string;
  summary: string;
  description: string;
  attendees: number;
  thumbnail: string;
  locationType: TEventLocationType;
  link: string | null;
  city: string | null;
  state: TState | null;
  streetAddress: string | null;
  postalCode: number | null;
};

export type TEventLocation = {
  id: number;
  eventId: number;
  city: string;
  state: TState;
  streetAddress: string;
  postalCode: number;
};
