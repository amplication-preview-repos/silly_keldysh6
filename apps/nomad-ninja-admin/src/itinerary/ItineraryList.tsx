import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOMMODATION_TITLE_FIELD } from "../accommodation/AccommodationTitle";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ItineraryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Itineraries"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
