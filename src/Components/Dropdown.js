import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Button, IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      height: "30vh",
      width: 300,
      overflowX: "hidden",
    },
  },
};

export default function Dropdown({ name, setFilterData, data }) {
  const [selectOption, setSelectionOption] = useState([]);

  const handleChange = (event) => {
    let result="";
    const {
      target: { value },
    } = event;
    setSelectionOption(typeof value === "string" ? value.split(",") : value);

    if (name === "Company") result = "company";
    else if (name === "Category/Role") result = "category";
    else if (name === "Job Type") result = "jobType";
    else if (name === "Job Posted on") result = "jobPostedOn";
    
    setFilterData((prev) => ({
      ...prev,
      [result]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectOption}
          onChange={handleChange}
          input={<OutlinedInput label={name} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          style={{ borderRadius: "25px", position: "unset" }}
        >
          {data &&
            data?.map((item) => (
              <MenuItem key={item} value={item}>
                <Checkbox checked={selectOption.indexOf(item) > -1} />
                <ListItemText primary={item} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
