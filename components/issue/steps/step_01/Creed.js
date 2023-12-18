/** Creed Select */

"use client";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import useStore from "@/store";

function Creed() {
  // Variables:
  const creed = useStore((state) => state.creed);
  const setCreed = useStore((state) => state.setCreed);

  // Handlers:
  const handleChange = (e) => {
    setCreed(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="creed-select">المذهب</InputLabel>
        <Select
          labelId="creed-select"
          value={creed}
          label="المذهب"
          onChange={handleChange}
        >
          <MenuItem value={"الحنفي"}>الحنفي</MenuItem>
          <MenuItem value={"الشافعي"}>الشافعي</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Creed;
