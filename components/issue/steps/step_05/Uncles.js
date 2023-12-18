/** Uncles Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Uncles() {
  // Variables:
  const uncles = useStore((state) => state.uncles);
  const setUncles = useStore((state) => state.setUncles);
  const nephews = useStore((state) => state.nephews);
  const cousins = useStore((state) => state.cousins);
  const paternalUncles = useStore((state) => state.paternalUncles);
  const paternalCousins = useStore((state) => state.paternalCousins);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setUncles(input) : null;
  };

  return (
    <TextField
      type="number"
      label="الأعمام الأشقاء"
      value={uncles}
      disabled={
        nephews > 0 || cousins > 0 || paternalUncles > 0 || paternalCousins > 0
          ? true
          : false
      }
      helperText={nephews > 0 ? "محجوبون لوجود أبناء الإخوة." : null}
      onChange={handleChange}
    />
  );
}

export default Uncles;
