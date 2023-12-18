/** Father Select Input type Select Button. */
"use client";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import useStore from "@/store";

function Father() {
  // Variables:
  const setFather = useStore((state) => state.setFather);
  const grandfather = useStore((state) => state.grandfather);

  // Handlers:
  const handleChange = () => {
    setFather();
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
            disabled={grandfather}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
        }
        label="الأب"
        labelPlacement="bottom"
      />
    </FormGroup>
  );
}

export default Father;
