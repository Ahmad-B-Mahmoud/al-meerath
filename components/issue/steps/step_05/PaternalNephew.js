/** Paternal Nephews Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function PaternalNephews() {
  // Variables:
  const paternalNephews = useStore((state) => state.paternalNephews);
  const setPaternalNephews = useStore((state) => state.setPaternalNephews);
  const nephews = useStore((state) => state.nephews);
  const uncles = useStore((state) => state.uncles);
  const cousins = useStore((state) => state.cousins);
  const paternalUncles = useStore((state) => state.paternalUncles);
  const paternalCousins = useStore((state) => state.paternalCousins);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setPaternalNephews(input) : null;
  };

  return (
    <TextField
      type="number"
      label="أبناء الأخوة لأب"
      value={paternalNephews}
      disabled={
        nephews > 0 ||
        uncles > 0 ||
        cousins > 0 ||
        paternalUncles > 0 ||
        paternalCousins > 0
          ? true
          : false
      }
      helperText={nephews > 0 ? "محجوبون لوجود أبناء الإخوة." : null}
      onChange={handleChange}
    />
  );
}

export default PaternalNephews;
