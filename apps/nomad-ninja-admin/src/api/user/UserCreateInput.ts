import { ItineraryCreateNestedManyWithoutUsersInput } from "./ItineraryCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  itineraries?: ItineraryCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
