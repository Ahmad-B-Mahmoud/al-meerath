/** Sons Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Sons() {
  // Variables:
  const sons = useStore((state) => state.sons);
  const setSons = useStore((state) => state.setSons);
  const grandsons = useStore((state) => state.grandsons);
  const greatgrandsons = useStore((state) => state.greatgrandsons);
  const granddaughters = useStore((state) => state.granddaughters);
  const greatgranddaughters = useStore((state) => state.greatgranddaughters);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setSons(input) : null;
  };
  return (
    <TextField
      type="number"
      label="الأبناء"
      value={sons}
      disabled={
        grandsons > 0 ||
        greatgrandsons > 0 ||
        granddaughters > 0 ||
        greatgranddaughters
          ? true
          : false
      }
      onChange={handleChange}
    />
  );
}

export default Sons;
