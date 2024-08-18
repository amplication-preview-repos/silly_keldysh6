import { SortOrder } from "../../util/SortOrder";

export type ItineraryOrderByInput = {
  accommodationId?: SortOrder;
  activities?: SortOrder;
  createdAt?: SortOrder;
  destinationId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
