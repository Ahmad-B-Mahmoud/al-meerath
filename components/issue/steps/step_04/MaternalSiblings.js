/** Maternal Siblings Select Input Type Number. */
"use client";
import { TextField } from "@mui/material";
import useStore from "@/store";

function MaternalSiblings() {
  // Variables:
  const maternalSiblings = useStore((state) => state.maternalSiblings);
  const setMaternalSiblings = useStore((state) => state.setMaternalSiblings);
  const hasFemaleDescendants = useStore((state) => state.hasFemaleDescendants);
  const grandfather = useStore((state) => state.grandfather);

  // Handlers
  const handleChange = (e) => {
    const input = e.target.value;
    input >= 0 ? setMaternalSiblings(input) : null;
  };

  return (
    <TextField
      type="number"
      label="الأخوة لأم"
      value={maternalSiblings}
      onChange={handleChange}
      helperText={
        grandfather
          ? "محجوبون لوجود الجد."
          : hasFemaleDescendants
          ? "محجوبون لوجود الفرع الوارث المؤنث."
          : null
      }
      disabled={grandfather || hasFemaleDescendants ? true : false}
    />
  );
}

export default MaternalSiblings;
