import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ITINERARY_TITLE_FIELD } from "./ItineraryTitle";
import { ACCOMMODATION_TITLE_FIELD } from "../accommodation/AccommodationTitle";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ItineraryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Booking"
          target="itineraryId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="bookingDate" source="bookingDate" />
            <TextField label="bookingStatus" source="bookingStatus" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Itinerary"
              source="itinerary.id"
              reference="Itinerary"
            >
              <TextField source={ITINERARY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
