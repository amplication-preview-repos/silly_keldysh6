import { ItineraryCreateNestedManyWithoutDestinationsInput } from "./ItineraryCreateNestedManyWithoutDestinationsInput";

export type DestinationCreateInput = {
  airQuality?: number | null;
  city?: string | null;
  costOfLiving?: number | null;
  country?: string | null;
  itineraries?: ItineraryCreateNestedManyWithoutDestinationsInput;
  name?: string | null;
  safetyRating?: number | null;
  scenicViews?: Array<"Option1">;
  wifiReliability?: number | null;
};
