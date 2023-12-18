/** Husband Select Input type Select Button. */
"use client";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import useStore from "@/store";

function Husband() {
  // Variables:
  const setHusband = useStore((state) => state.setHusband);

  // Handlers:
  const handleChange = () => {
    setHusband();
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
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
        }
        label="الزوج"
        labelPlacement="bottom"
      />
    </FormGroup>
  );
}

export default Husband;
