import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { ItineraryTitle } from "../itinerary/ItineraryTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
