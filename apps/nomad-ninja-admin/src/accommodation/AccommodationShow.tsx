import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOMMODATION_TITLE_FIELD } from "./AccommodationTitle";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AccommodationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="costPerNight" source="costPerNight" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="noiseLevels" source="noiseLevels" />
        <BooleanField label="powerOutlets" source="powerOutlets" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="wifiAvailability" source="wifiAvailability" />
        <ReferenceManyField
          reference="Itinerary"
          target="accommodationId"
          label="Itineraries"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Accommodation"
              source="accommodation.id"
              reference="Accommodation"
            >
              <TextField source={ACCOMMODATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="activities" source="activities" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Destination"
              source="destination.id"
              reference="Destination"
            >
              <TextField source={DESTINATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="startDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
