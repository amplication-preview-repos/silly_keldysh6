import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOMMODATION_TITLE_FIELD } from "../accommodation/AccommodationTitle";
import { DESTINATION_TITLE_FIELD } from "./DestinationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DestinationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="airQuality" source="airQuality" />
        <TextField label="city" source="city" />
        <TextField label="costOfLiving" source="costOfLiving" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="safetyRating" source="safetyRating" />
        <TextField label="scenicViews" source="scenicViews" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wifiReliability" source="wifiReliability" />
        <ReferenceManyField
          reference="Itinerary"
          target="destinationId"
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
