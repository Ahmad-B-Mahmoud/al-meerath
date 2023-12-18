/** Paternal Sisters Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function PaternalSisters() {
  // Variables:
  const paternalSisters = useStore((state) => state.paternalSisters);
  const setPaternalSisters = useStore((state) => state.setPaternalSisters);
  const brothers = useStore((state) => state.brothers);
  const sisters = useStore((state) => state.sisters);
  const paternalBrothers = useStore((state) => state.paternalBrothers);
  const hasFemaleDescendants = useStore((state) => state.hasFemaleDescendants);

  // Handlers:
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setPaternalSisters(input) : null;
  };

  return (
    <TextField
      type="number"
      label="الأخوات لأب"
      value={paternalSisters}
      onChange={handleChange}
      helperText={
        brothers > 0
          ? "محجوبات لوجود الأخوة الأشقاء"
          : brothers == 0 && sisters >= 2 && paternalBrothers == 0
          ? "محجوبات لإستيفاء حظ الثلثين للإناث"
          : hasFemaleDescendants && sisters > 0
          ? "محجوبات لوجود الأخت الشقيقة التي صارت عصبة مع الفرع الوارث المؤنث."
          : null
      }
      disabled={
        brothers > 0 ||
        ((brothers == 0 || brothers == "") &&
          sisters >= 2 &&
          paternalBrothers == 0) ||
        (hasFemaleDescendants && sisters > 0)
          ? true
          : false
      }
    />
  );
}

export default PaternalSisters;
