import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./select.style.scss";

export default function SelectList({ items, label }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className="select-form">
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">
            <FormHelperText>Elige un valor de la lista</FormHelperText>
          </MenuItem>
          {items.map((e) => (
            <MenuItem key={String(Math.random())} value={e.value}>
              {e.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
