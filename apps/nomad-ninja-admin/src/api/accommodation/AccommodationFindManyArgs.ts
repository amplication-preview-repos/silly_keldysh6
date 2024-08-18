import { AccommodationWhereInput } from "./AccommodationWhereInput";
import { AccommodationOrderByInput } from "./AccommodationOrderByInput";

export type AccommodationFindManyArgs = {
  where?: AccommodationWhereInput;
  orderBy?: Array<AccommodationOrderByInput>;
  skip?: number;
  take?: number;
};
