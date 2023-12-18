/** Wifes Select Input type Select Button. */
"use client";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import useStore from "@/store";

function Wifes() {
  // Variables:
  const wifes = useStore((state) => state.wifes);
  const setWifes = useStore((state) => state.setWifes);

  // Handlers:
  const handleChange = (e) => {
    setWifes(e.target.value);
  };
  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="wifes-select">الزوجات</InputLabel>
        <Select
          labelId="wifes-select"
          value={wifes}
          label="الزوجات"
          onChange={handleChange}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Wifes;
