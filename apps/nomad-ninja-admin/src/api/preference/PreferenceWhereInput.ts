import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PreferenceWhereInput = {
  budget?: FloatNullableFilter;
  experienceType?: "Option1";
  id?: StringFilter;
  workspaceType?: "Option1";
};
