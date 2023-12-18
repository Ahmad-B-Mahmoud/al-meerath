/** Granddaughters Select  input type Number */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Granddaughters() {
  // Variables:
  const granddaughters = useStore((state) => state.granddaughters);
  const setGranddaughters = useStore((state) => state.setGranddaughters);
  const sons = useStore((state) => state.sons);
  const daughters = useStore((state) => state.daughters);
  const grandsons = useStore((state) => state.grandsons);
  const greatgrandsons = useStore((state) => state.greatgrandsons);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setGranddaughters(input) : null;
  };

  return (
    <TextField
      type="number"
      label="بنات الأبناء"
      value={granddaughters}
      onChange={handleChange}
      helperText={
        sons > 0
          ? "محجوبات لوجود الأبناء."
          : sons == 0 && daughters >= 2 && grandsons == 0 && greatgrandsons == 0
          ? "محجوبات لإستيفاء حظ الثلثين للإناث."
          : null
      }
      disabled={
        sons > 0 ||
        ((sons == 0 || sons == "") &&
          daughters >= 2 &&
          greatgrandsons == 0 &&
          grandsons == 0)
          ? true
          : false
      }
    />
  );
}

export default Granddaughters;
