/** Mother Side Grandmother Select Input type Select Button. */
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

function MotherSideGrandmother() {
  // Variables:
  const setMotherSideGrandmother = useStore(
    (state) => state.setMotherSideGrandmother
  );
  const mother = useStore((state) => state.mother);

  // Handlers:
  const handleChange = () => {
    setMotherSideGrandmother();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checkedIcon={<AddCircleIcon />}
            icon={<RemoveCircleOutlineIcon />}
            onChange={handleChange}
            disabled={mother}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
        }
        label="الجَدّة أم الأم"
        labelPlacement="bottom"
      />
      {mother ? <FormHelperText>محجوبة لوجود الأم.</FormHelperText> : null}
    </FormGroup>
  );
}

export default MotherSideGrandmother;
