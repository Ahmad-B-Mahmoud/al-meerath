/** Brothers Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Brothers() {
  // Variables:
  const brothers = useStore((state) => state.brothers);
  const setBrothers = useStore((state) => state.setBrothers);
  const paternalBrothers = useStore((state) => state.paternalBrothers);
  const paternalSisters = useStore((state) => state.paternalSisters);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setBrothers(input) : null;
  };
  return (
    <TextField
      type="number"
      label="الإخوة الأشقاء"
      value={brothers}
      disabled={paternalBrothers > 0 || paternalSisters > 0 ? true : false}
      onChange={handleChange}
    />
  );
}

export default Brothers;
