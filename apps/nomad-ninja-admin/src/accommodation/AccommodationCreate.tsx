import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

import { ItineraryTitle } from "../itinerary/ItineraryTitle";

export const AccommodationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="costPerNight" source="costPerNight" />
        <ReferenceArrayInput
          source="itineraries"
          reference="Itinerary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItineraryTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="noiseLevels" source="noiseLevels" />
        <BooleanInput label="powerOutlets" source="powerOutlets" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="wifiAvailability" source="wifiAvailability" />
      </SimpleForm>
    </Create>
  );
};
