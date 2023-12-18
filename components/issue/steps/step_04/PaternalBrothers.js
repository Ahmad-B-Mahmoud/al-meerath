/** Paternal Brothers Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function PaternalBrothers() {
  // Variables:
  const paternalBrothers = useStore((state) => state.paternalBrothers);
  const setPaternalBrothers = useStore((state) => state.setPaternalBrothers);
  const brothers = useStore((state) => state.brothers);
  const hasFemaleDescendants = useStore((state) => state.hasFemaleDescendants);
  const sisters = useStore((state) => state.sisters);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setPaternalBrothers(input) : null;
  };

  return (
    <TextField
      type="number"
      label="الأخوة لأب"
      value={paternalBrothers}
      onChange={handleChange}
      disabled={
        brothers > 0 || (hasFemaleDescendants && sisters) > 0 ? true : false
      }
      helperText={
        brothers > 0
          ? "محجوبون لوجود الإخوة الأشقاء."
          : hasFemaleDescendants && sisters > 0
          ? "محجوبون لوجود الأخت الشقيقة التي صارت عصبة مع الفرع الوارث المؤنث."
          : null
      }
    />
  );
}

export default PaternalBrothers;
