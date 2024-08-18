import { Itinerary as TItinerary } from "../api/itinerary/Itinerary";

export const ITINERARY_TITLE_FIELD = "id";

export const ItineraryTitle = (record: TItinerary): string => {
  return record.id?.toString() || String(record.id);
};
