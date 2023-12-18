/** Grandsons Select Input type Number */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Grandsons() {
  // Variables:
  const grandsons = useStore((state) => state.grandsons);
  const setGrandsons = useStore((state) => state.setGrandsons);
  const sons = useStore((state) => state.sons);
  const greatgrandsons = useStore((state) => state.greatgrandsons);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setGrandsons(input) : null;
  };

  return (
    <TextField
      type="number"
      label="أبناء الأبناء"
      value={grandsons}
      onChange={handleChange}
      disabled={sons > 0 || greatgrandsons > 0 ? true : false}
      helperText={sons > 0 ? "محجوبون لوجود الأبناء." : null}
    />
  );
}

export default Grandsons;
