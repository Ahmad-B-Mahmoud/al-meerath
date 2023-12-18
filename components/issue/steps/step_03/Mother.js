/** Mother Select Input type Select Button. */
"use client";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import useStore from "@/store";

function Mother() {
  // Variables:
  const setMother = useStore((state) => state.setMother);
  const fatherSideGrandmother = useStore(
    (state) => state.fatherSideGrandmother
  );
  const motherSideGrandmother = useStore(
    (state) => state.motherSideGrandmother
  );

  // Handlers:
  const handleChange = () => {
    setMother();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checkedIcon={<AddCircleIcon />}
            icon={<RemoveCircleOutlineIcon />}
            onChange={handleChange}
            defaultChecked
            disabled={fatherSideGrandmother || motherSideGrandmother}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
        }
        label="الأم"
        labelPlacement="bottom"
      />
    </FormGroup>
  );
}

export default Mother;
