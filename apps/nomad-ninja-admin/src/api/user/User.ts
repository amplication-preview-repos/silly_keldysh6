import { Itinerary } from "../itinerary/Itinerary";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  itineraries?: Array<Itinerary>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
