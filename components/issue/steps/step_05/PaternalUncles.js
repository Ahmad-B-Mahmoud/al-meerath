/** PaternalUncles Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function PaternalUncles() {
  // Variables:
  const paternalUncles = useStore((state) => state.paternalUncles);
  const setPaternalUncles = useStore((state) => state.setPaternalUncles);
  const nephews = useStore((state) => state.nephews);
  const paternalNephews = useStore((state) => state.paternalNephews);
  const uncles = useStore((state) => state.uncles);
  const cousins = useStore((state) => state.cousins);
  const paternalCousins = useStore((state) => state.paternalCousins);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setPaternalUncles(input) : null;
  };

  return (
    <TextField
      type="number"
      label="الأعمام لأب"
      value={paternalUncles}
      disabled={
        nephews > 0 ||
        paternalNephews > 0 ||
        uncles > 0 ||
        cousins > 0 ||
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
          : cousins > 0
          ? "محجوبون لوجود أبناء الأعمام الأشقاء."
          : null
      }
      onChange={handleChange}
    />
  );
}

export default PaternalUncles;
