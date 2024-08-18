import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItineraryListRelationFilter } from "../itinerary/ItineraryListRelationFilter";

export type DestinationWhereInput = {
  airQuality?: IntNullableFilter;
  city?: StringNullableFilter;
  costOfLiving?: FloatNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  itineraries?: ItineraryListRelationFilter;
  name?: StringNullableFilter;
  safetyRating?: IntNullableFilter;
  wifiReliability?: IntNullableFilter;
};
