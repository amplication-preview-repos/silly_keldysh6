import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItineraryListRelationFilter } from "../itinerary/ItineraryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AccommodationWhereInput = {
  costPerNight?: FloatNullableFilter;
  id?: StringFilter;
  itineraries?: ItineraryListRelationFilter;
  name?: StringNullableFilter;
  noiseLevels?: IntNullableFilter;
  powerOutlets?: BooleanNullableFilter;
  typeField?: "Option1";
  wifiAvailability?: BooleanNullableFilter;
};
