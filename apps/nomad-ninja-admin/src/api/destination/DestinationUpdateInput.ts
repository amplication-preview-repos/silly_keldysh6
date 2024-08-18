import { ItineraryUpdateManyWithoutDestinationsInput } from "./ItineraryUpdateManyWithoutDestinationsInput";

export type DestinationUpdateInput = {
  airQuality?: number | null;
  city?: string | null;
  costOfLiving?: number | null;
  country?: string | null;
  itineraries?: ItineraryUpdateManyWithoutDestinationsInput;
  name?: string | null;
  safetyRating?: number | null;
  scenicViews?: Array<"Option1">;
  wifiReliability?: number | null;
};
