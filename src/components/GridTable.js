import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "Id", width: 70 },
  { field: "slot1", headerName: "slot 1", sortable: false, width: 130 },
  { field: "slot2", headerName: "slot 2", sortable: false, width: 130 },
  { field: "slot3", headerName: "slot 3", sortable: false, width: 130 },
  { field: "clickTime", headerName: "Time", type: "datetime", width: 500 }
];

export default function GridTable({ tableData }) {
  return (
    <div style={{ height: 400}}>
      <DataGrid rows={tableData} columns={columns} pageSize={50} />
    </div>
  );
}
