import { Itinerary } from "../itinerary/Itinerary";

export type Booking = {
  bookingDate: Date | null;
  bookingStatus?: "Option1" | null;
  createdAt: Date;
  id: string;
  itinerary?: Itinerary | null;
  updatedAt: Date;
};
