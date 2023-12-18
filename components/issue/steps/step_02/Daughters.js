/** Daughters Select Input Type Number */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Daughters() {
  // Variables:
  const daughters = useStore((state) => state.daughters);
  const setDaughters = useStore((state) => state.setDaughters);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setDaughters(input) : null;
  };

  return (
    <TextField
      type="number"
      label="البنات"
      value={daughters}
      onChange={handleChange}
    />
  );
}

export default Daughters;
