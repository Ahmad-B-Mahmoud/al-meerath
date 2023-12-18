/** Nephews Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Nephews() {
  // Variables:
  const nephews = useStore((state) => state.nephews);
  const setNephews = useStore((state) => state.setNephews);
  const uncles = useStore((state) => state.uncles);
  const cousins = useStore((state) => state.cousins);
  const paternalUncles = useStore((state) => state.paternalUncles);
  const paternalCousins = useStore((state) => state.paternalCousins);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setNephews(input) : null;
  };

  return (
    <TextField
      type="number"
      label="أبناء الأخوة"
      value={nephews}
      disabled={
        uncles > 0 || cousins > 0 || paternalUncles > 0 || paternalCousins > 0
          ? true
          : false
      }
      onChange={handleChange}
    />
  );
}

export default Nephews;
