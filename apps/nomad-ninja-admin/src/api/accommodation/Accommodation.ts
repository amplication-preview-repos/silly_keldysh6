import { Itinerary } from "../itinerary/Itinerary";

export type Accommodation = {
  costPerNight: number | null;
  createdAt: Date;
  id: string;
  itineraries?: Array<Itinerary>;
  name: string | null;
  noiseLevels: number | null;
  powerOutlets: boolean | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  wifiAvailability: boolean | null;
};
