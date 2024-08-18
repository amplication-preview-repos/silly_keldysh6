import { ItineraryCreateNestedManyWithoutAccommodationsInput } from "./ItineraryCreateNestedManyWithoutAccommodationsInput";

export type AccommodationCreateInput = {
  costPerNight?: number | null;
  itineraries?: ItineraryCreateNestedManyWithoutAccommodationsInput;
  name?: string | null;
  noiseLevels?: number | null;
  powerOutlets?: boolean | null;
  typeField?: "Option1" | null;
  wifiAvailability?: boolean | null;
};
