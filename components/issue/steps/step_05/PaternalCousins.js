/** PaternalCousins Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function PaternalCousins() {
  // Variables:
  const paternalCousins = useStore((state) => state.paternalCousins);
  const setPaternalCousins = useStore((state) => state.setPaternalUncles);
  const nephews = useStore((state) => state.nephews);
  const uncles = useStore((state) => state.uncles);
  const cousins = useStore((state) => state.cousins);
  const paternalUncles = useStore((state) => state.paternalUncles);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setPaternalCousins(input) : null;
  };

  return (
    <TextField
      type="number"
      label="أبناء الأعمام لأب"
      value={paternalCousins}
      disabled={
        nephews > 0 || uncles > 0 || cousins > 0 || paternalUncles > 0
          ? true
          : false
      }
      helperText={
        nephews > 0
          ? "محجوبون لوجود أبناء الإخوة."
          : uncles > 0
          ? "محجوبون لوجود الأعمام الأشقاء."
          : paternalUncles > 0
          ? "محجوبون لوجود الأعمام لأب"
          : cousins > 0
          ? "محجوبون لوجود أبناء الأعمام الأشقاء."
          : null
      }
      onChange={handleChange}
    />
  );
}

export default PaternalCousins;
