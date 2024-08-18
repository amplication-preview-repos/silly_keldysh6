import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AccommodationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accommodations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="costPerNight" source="costPerNight" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="noiseLevels" source="noiseLevels" />
        <BooleanField label="powerOutlets" source="powerOutlets" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="wifiAvailability" source="wifiAvailability" />
      </Datagrid>
    </List>
  );
};
