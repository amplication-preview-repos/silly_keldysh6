import { Itinerary } from "../itinerary/Itinerary";

export type Destination = {
  airQuality: number | null;
  city: string | null;
  costOfLiving: number | null;
  country: string | null;
  createdAt: Date;
  id: string;
  itineraries?: Array<Itinerary>;
  name: string | null;
  safetyRating: number | null;
  scenicViews?: Array<"Option1">;
  updatedAt: Date;
  wifiReliability: number | null;
};
