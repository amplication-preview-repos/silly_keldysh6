import { Accommodation as TAccommodation } from "../api/accommodation/Accommodation";

export const ACCOMMODATION_TITLE_FIELD = "name";

export const AccommodationTitle = (record: TAccommodation): string => {
  return record.name?.toString() || String(record.id);
};
