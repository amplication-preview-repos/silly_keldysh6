import { Destination as TDestination } from "../api/destination/Destination";

export const DESTINATION_TITLE_FIELD = "name";

export const DestinationTitle = (record: TDestination): string => {
  return record.name?.toString() || String(record.id);
};
