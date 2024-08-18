import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PreferenceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="budget" source="budget" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="experienceType" source="experienceType" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workspaceType" source="workspaceType" />
      </SimpleShowLayout>
    </Show>
  );
};
