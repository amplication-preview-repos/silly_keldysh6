import { Accommodation } from "../accommodation/Accommodation";
import { Booking } from "../booking/Booking";
import { Destination } from "../destination/Destination";
import { User } from "../user/User";

export type Itinerary = {
  accommodation?: Accommodation | null;
  activities: string | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  destination?: Destination | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
