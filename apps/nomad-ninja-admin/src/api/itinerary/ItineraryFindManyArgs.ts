import { ItineraryWhereInput } from "./ItineraryWhereInput";
import { ItineraryOrderByInput } from "./ItineraryOrderByInput";

export type ItineraryFindManyArgs = {
  where?: ItineraryWhereInput;
  orderBy?: Array<ItineraryOrderByInput>;
  skip?: number;
  take?: number;
};
