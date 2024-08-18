import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DestinationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Destinations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
