import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  bookingStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itineraryId?: SortOrder;
  updatedAt?: SortOrder;
};
