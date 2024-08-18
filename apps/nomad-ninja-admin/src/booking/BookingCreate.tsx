import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ItineraryTitle } from "../itinerary/ItineraryTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="bookingDate" source="bookingDate" />
        <SelectInput
          source="bookingStatus"
          label="bookingStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="itinerary.id"
          reference="Itinerary"
          label="Itinerary"
        >
          <SelectInput optionText={ItineraryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
