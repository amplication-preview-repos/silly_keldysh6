import { AccommodationWhereUniqueInput } from "../accommodation/AccommodationWhereUniqueInput";
import { BookingCreateNestedManyWithoutItinerariesInput } from "./BookingCreateNestedManyWithoutItinerariesInput";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ItineraryCreateInput = {
  accommodation?: AccommodationWhereUniqueInput | null;
  activities?: string | null;
  bookings?: BookingCreateNestedManyWithoutItinerariesInput;
  destination?: DestinationWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
