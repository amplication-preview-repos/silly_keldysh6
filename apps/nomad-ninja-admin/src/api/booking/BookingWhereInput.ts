import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItineraryWhereUniqueInput } from "../itinerary/ItineraryWhereUniqueInput";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  bookingStatus?: "Option1";
  id?: StringFilter;
  itinerary?: ItineraryWhereUniqueInput;
};
