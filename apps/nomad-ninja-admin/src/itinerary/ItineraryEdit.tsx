import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { AccommodationTitle } from "../accommodation/AccommodationTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { DestinationTitle } from "../destination/DestinationTitle";
import { UserTitle } from "../user/UserTitle";

export const ItineraryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accommodation.id"
          reference="Accommodation"
          label="Accommodation"
        >
          <SelectInput optionText={AccommodationTitle} />
        </ReferenceInput>
        <TextInput label="activities" multiline source="activities" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="destination.id"
          reference="Destination"
          label="Destination"
        >
          <SelectInput optionText={DestinationTitle} />
        </ReferenceInput>
        <DateTimeInput label="endDate" source="endDate" />
        <DateTimeInput label="startDate" source="startDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
