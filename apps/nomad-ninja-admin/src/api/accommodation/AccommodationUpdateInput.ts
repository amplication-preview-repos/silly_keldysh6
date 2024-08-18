import { ItineraryUpdateManyWithoutAccommodationsInput } from "./ItineraryUpdateManyWithoutAccommodationsInput";

export type AccommodationUpdateInput = {
  costPerNight?: number | null;
  itineraries?: ItineraryUpdateManyWithoutAccommodationsInput;
  name?: string | null;
  noiseLevels?: number | null;
  powerOutlets?: boolean | null;
  typeField?: "Option1" | null;
  wifiAvailability?: boolean | null;
};
