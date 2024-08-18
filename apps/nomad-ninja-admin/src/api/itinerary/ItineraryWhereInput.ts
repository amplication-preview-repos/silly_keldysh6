import { AccommodationWhereUniqueInput } from "../accommodation/AccommodationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ItineraryWhereInput = {
  accommodation?: AccommodationWhereUniqueInput;
  activities?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  destination?: DestinationWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
