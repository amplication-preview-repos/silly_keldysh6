import { SortOrder } from "../../util/SortOrder";

export type AccommodationOrderByInput = {
  costPerNight?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  noiseLevels?: SortOrder;
  powerOutlets?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  wifiAvailability?: SortOrder;
};
