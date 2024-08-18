import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItineraryListRelationFilter } from "../itinerary/ItineraryListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  itineraries?: ItineraryListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
