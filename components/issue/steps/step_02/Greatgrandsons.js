/** Great-Grandsons select input type Number */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Greatgrandsons() {
  // Variables:
  const greatgrandsons = useStore((state) => state.greatgrandsons);
  const setGreatgrandsons = useStore((state) => state.setGreatgrandsons);
  const sons = useStore((state) => state.sons);
  const grandsons = useStore((state) => state.grandsons);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setGreatgrandsons(input) : null;
  };

  return (
    <TextField
      type="number"
      label="أبناء أبناء الأبناء"
      value={greatgrandsons}
      onChange={handleChange}
      disabled={sons > 0 || grandsons > 0 ? true : false}
      helperText={
        sons > 0
          ? "محجوبون لوجود الأبناء."
          : grandsons > 0
          ? "محجوبون لوجود أبناء الأبناء."
          : null
      }
    />
  );
}

export default Greatgrandsons;
