import { ItineraryWhereUniqueInput } from "../itinerary/ItineraryWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  bookingStatus?: "Option1" | null;
  itinerary?: ItineraryWhereUniqueInput | null;
};
