import * as React from "react";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import "./DataTable.css";
import { Badge, Button, IconButton, Link } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import SearchField2 from "../SearchField/SearchField2";

// icons
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// SKU, Name, Tags, Category, In Stock, Available Stock

export function Name({ value }: { value: string }) {
  return <Link>{value}</Link>;
}

export function Category({ value }: { value: string }) {
  return <Link>{value}</Link>;
}

export function Tags({ value }: { value: string }) {
  return (
    <>
      <Badge>
        <span>{value}</span>
        <SettingsIcon />
        <AttachMoneyIcon />
        <ShoppingCartIcon />
      </Badge>
    </>
  );
}

export function InStock({
  value,
}: {
  value: { status: string; count: number };
}) {
  return (
    <>
      <div className="inStock">
        <div
          className="inStock-status"
          style={{ backgroundColor: `${value.status}` }}
        ></div>
        <p className="inStock-count">{value.count}</p>
      </div>
    </>
  );
}

export function AvailableStock({
  value,
}: {
  value: { status: string; count: number };
}) {
  return (
    <>
      <div className="inStock">
        <div
          className="inStock-status"
          style={{ backgroundColor: `${value.status}` }}
        ></div>
        <p className="inStock-count">{value.count}</p>
      </div>
    </>
  );
}

const columns: GridColDef[] = [
  { field: "sku", headerName: "SKU", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 290,
    renderCell: (params: GridCellParams) => (
      <Name value={params.value?.toString() || ""} />
    ),
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 180,
    renderCell: (params: GridCellParams) => (
      <Tags value={params.value?.toString() || ""} />
    ),
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    renderCell: (params: GridCellParams) => (
      <Category value={params.value?.toString() || ""} />
    ),
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    renderCell: (params: GridCellParams) => (
      <InStock value={params.value as { status: string; count: number }} />
    ),
  },
  {
    field: "availableStock",
    headerName: "Available Stock",
    width: 150,
    renderCell: (params: GridCellParams) => (
      <AvailableStock
        value={params.value as { status: string; count: number }}
      />
    ),
  },
];

const rows = [
  {
    id: 1,
    sku: "ETSY-FOREST",
    tags: "Etsy",
    name: "Etsy Bundle Pack",
    category: "Bundles",
    inStock: { status: "green", count: 20 },
    availableStock: { status: "red", count: 13 },
  },
  {
    id: 2,
    sku: "NY-ETSY",
    tags: null,
    name: "NY Print Single Print Beeswax Wrap",
    category: "Bundles",
    inStock: { status: "red", count: 2 },
    availableStock: { status: "red", count: 13 },
  },
  {
    id: 3,
    sku: "BWAX",
    tags: null,
    name: "Beeswax",
    category: "Raw Materials",
    inStock: { status: "green", count: 20 },
    availableStock: { status: "red", count: 13 },
  },
  {
    id: 4,
    sku: "OCN-S",
    tags: null,
    name: "Ocean Single Beeswax",
    category: "Raw Materials",
    inStock: { status: "green", count: 20 },
    availableStock: { status: "red", count: 13 },
  },
  {
    id: 5,
    sku: "JNGL-S",
    tags: "Etsy",
    name: "Jungle Print Single Beeswax Wrap",
    category: "Raw Materials",
    inStock: { status: "green", count: 20 },
    availableStock: { status: "red", count: 13 },
  },
  {
    id: 6,
    sku: "OCNCOT",
    tags: null,
    name: "Cotton - Ocean Print",
    category: "Raw Materials",
    inStock: { status: "green", count: 20 },
    availableStock: { status: "red", count: 13 },
  },
  {
    id: 7,
    sku: "HNYCOT",
    tags: null,
    name: "Cotton - Honeycomb Print",
    category: "Raw Materials",
    inStock: { status: "green", count: 20 },
    availableStock: { status: "red", count: 13 },
  },
];

export default function DataTable() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="table" style={{ height: 300, width: "100%" }}>
      <div className="table-header" style={{ fontWeight: "bold" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button className="btn-green">New Item</Button>
          <Button variant="contained" disabled endIcon={<ArrowDropDownIcon />}>
            Options
          </Button>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          {/* <SearchField /> */}
          <SearchField2 onSearch={handleSearch} />
          <Button sx={{ backgroundColor: "#556d7a" }}>
            <ViewColumnIcon style={{ color: "#fff" }} />
          </Button>
          <IconButton sx={{ backgroundColor: "#424242" }}>
            <FilterAltIcon style={{ color: "#fff" }} />
          </IconButton>
        </div>
      </div>

      {/* DataGrid component */}
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        hideFooter={true}
      />
    </div>
  );
}
