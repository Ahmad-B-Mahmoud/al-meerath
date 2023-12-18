/** Grandfather Select Input type Select Button. */
"use client";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import useStore from "@/store";

function Grandfather() {
  // Variables:
  const setGrandfather = useStore((state) => state.setGrandfather);
  const father = useStore((state) => state.father);

  // Handlers:
  const handleChange = () => {
    setGrandfather();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checkedIcon={<AddCircleIcon />}
            icon={<RemoveCircleOutlineIcon />}
            onChange={handleChange}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            disabled={father}
          />
        }
        label="الجَدّ أبو الأب"
        labelPlacement="bottom"
      />
      {father ? <FormHelperText>محجوب لوجود الأب.</FormHelperText> : null}
    </FormGroup>
  );
}

export default Grandfather;
