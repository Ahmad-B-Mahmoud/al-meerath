/** Cousins Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Cousins() {
  // Variables:
  const cousins = useStore((state) => state.cousins);
  const setCousins = useStore((state) => state.setCousins);
  const nephews = useStore((state) => state.nephews);
  const paternalNephews = useStore((state) => state.paternalNephews);
  const uncles = useStore((state) => state.uncles);
  const paternalUncles = useStore((state) => state.paternalUncles);
  const paternalCousins = useStore((state) => state.paternalCousins);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setCousins(input) : null;
  };

  return (
    <TextField
      type="number"
      label="أبناء الأعمام الأشقاء"
      value={cousins}
      disabled={
        nephews > 0 ||
        paternalNephews > 0 ||
        uncles > 0 ||
        paternalUncles > 0 ||
        paternalCousins > 0
          ? true
          : false
      }
      helperText={
        nephews > 0
          ? "محجوبون لوجود أبناء الإخوة."
          : paternalNephews > 0
          ? "محجوبون لوجود أبناء الإخوة لأب."
          : uncles > 0
          ? "محجوبون لوجود الأعمام الأشقاء."
          : null
      }
      onChange={handleChange}
    />
  );
}

export default Cousins;
