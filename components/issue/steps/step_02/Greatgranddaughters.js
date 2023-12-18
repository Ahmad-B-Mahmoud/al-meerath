/** Great-Granddaughters select input type Number  */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function Greatgranddaughters() {
  // Variables:
  const greatgranddaughters = useStore((state) => state.greatgranddaughters);
  const setGreatgranddaughters = useStore(
    (state) => state.setGreatgranddaughters
  );
  const sons = useStore((state) => state.sons);
  const daughters = useStore((state) => state.daughters);
  const grandsons = useStore((state) => state.grandsons);
  const greatgrandsons = useStore((state) => state.greatgrandsons);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setGreatgranddaughters(input) : null;
  };

  return (
    <TextField
      type="number"
      label="بنات أبناء الأبناء"
      value={greatgranddaughters}
      onChange={handleChange}
      disabled={
        sons > 0 ||
        grandsons > 0 ||
        ((sons == 0 || sons == "") && daughters >= 2 && greatgrandsons == 0)
          ? true
          : false
      }
      helperText={
        sons > 0
          ? "محجوبات لوجود الأبناء."
          : grandsons > 0
          ? "محجوبات لوجود أبناء الأبناء."
          : sons == 0 && daughters >= 2 && grandsons == 0 && greatgrandsons == 0
          ? "محجوبات لإستيفاء حظ الثلثين للإناث."
          : null
      }
    />
  );
}

export default Greatgranddaughters;
