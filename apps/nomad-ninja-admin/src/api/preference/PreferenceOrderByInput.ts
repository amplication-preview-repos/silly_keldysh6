import { SortOrder } from "../../util/SortOrder";

export type PreferenceOrderByInput = {
  budget?: SortOrder;
  createdAt?: SortOrder;
  experienceType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  workspaceType?: SortOrder;
};
