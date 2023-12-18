/** Sisters Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Sisters() {
  // Variables:
  const sisters = useStore((state) => state.sisters);
  const setSisters = useStore((state) => state.setSisters);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setSisters(input) : null;
  };
  return (
    <TextField
      type="number"
      label="الأخوات الشقيقات"
      value={sisters}
      onChange={handleChange}
    />
  );
}

export default Sisters;
