import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ITINERARY_TITLE_FIELD } from "../itinerary/ItineraryTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
