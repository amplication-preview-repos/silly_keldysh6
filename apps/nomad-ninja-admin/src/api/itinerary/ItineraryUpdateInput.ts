import { AccommodationWhereUniqueInput } from "../accommodation/AccommodationWhereUniqueInput";
import { BookingUpdateManyWithoutItinerariesInput } from "./BookingUpdateManyWithoutItinerariesInput";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ItineraryUpdateInput = {
  accommodation?: AccommodationWhereUniqueInput | null;
  activities?: string | null;
  bookings?: BookingUpdateManyWithoutItinerariesInput;
  destination?: DestinationWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
