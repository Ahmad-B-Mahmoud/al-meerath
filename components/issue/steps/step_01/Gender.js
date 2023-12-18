/** Gender Select Radio Buttons. */

"use client";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useStore from "@/store";

function Gender() {
  // Variables:
  const gender = useStore((state) => state.gender);
  const setGender = useStore((state) => state.setGender);

  // Handlers:
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="gender-select-radio">يرجى الإختيار بين:</FormLabel>
      <RadioGroup
        aria-labelledby="gender-select-radio"
        value={gender}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="المتوفى" />
        <FormControlLabel value="female" control={<Radio />} label="المتوفاة" />
      </RadioGroup>
    </FormControl>
  );
}

export default Gender;
