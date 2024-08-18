import { ItineraryUpdateManyWithoutUsersInput } from "./ItineraryUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  itineraries?: ItineraryUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
