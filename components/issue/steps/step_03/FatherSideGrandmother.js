/** Father Side Grandmother Select Input type Select Button. */
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

function FatherSideGrandmother() {
  // Variables:
  const setFatherSideGrandmother = useStore(
    (state) => state.setFatherSideGrandmother
  );
  const father = useStore((state) => state.father);
  const mother = useStore((state) => state.mother);

  // Handlers:
  const handleChange = () => {
    setFatherSideGrandmother();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checkedIcon={<AddCircleIcon />}
            icon={<RemoveCircleOutlineIcon />}
            onChange={handleChange}
            disabled={mother || father ? true : false}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
        }
        label="الجَدّة أم الأب"
        labelPlacement="bottom"
      />
      {father && mother ? (
        <FormHelperText>محجوبة لوجود الوالدان.</FormHelperText>
      ) : father && !mother ? (
        <FormHelperText>محجوبة لوجود الأب.</FormHelperText>
      ) : !father && mother ? (
        <FormHelperText>محجوبة لوجود الأم.</FormHelperText>
      ) : null}
    </FormGroup>
  );
}

export default FatherSideGrandmother;
