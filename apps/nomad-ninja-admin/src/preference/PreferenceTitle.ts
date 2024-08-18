import { Preference as TPreference } from "../api/preference/Preference";

export const PREFERENCE_TITLE_FIELD = "id";

export const PreferenceTitle = (record: TPreference): string => {
  return record.id?.toString() || String(record.id);
};
