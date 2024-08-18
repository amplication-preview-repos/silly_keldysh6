import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ItineraryTitle } from "../itinerary/ItineraryTitle";

export const DestinationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="airQuality" source="airQuality" />
        <TextInput label="city" source="city" />
        <NumberInput label="costOfLiving" source="costOfLiving" />
        <TextInput label="country" source="country" />
        <ReferenceArrayInput
          source="itineraries"
          reference="Itinerary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItineraryTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="safetyRating" source="safetyRating" />
        <SelectArrayInput
          label="scenicViews"
          source="scenicViews"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="wifiReliability"
          source="wifiReliability"
        />
      </SimpleForm>
    </Edit>
  );
};
