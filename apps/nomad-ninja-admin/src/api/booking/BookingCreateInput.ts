import { ItineraryWhereUniqueInput } from "../itinerary/ItineraryWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  bookingStatus?: "Option1" | null;
  itinerary?: ItineraryWhereUniqueInput | null;
};
