/** Amount Select Input Type Number. */

"use client";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import useStore from "@/store";

function Amount() {
  // Variables:
  const amount = useStore((state) => state.amount);
  const setAmount = useStore((state) => state.setAmount);
  const error = useStore((state) => state.error);
  const setError = useStore((state) => state.setError);

  // Handlers:
  const handleChange = (e) => {
    let inputValue = e.target.value;
    inputValue > 0 ? setAmount(inputValue) : null;
    inputValue > 0 ? setError(false) : null;
  };

  return (
    <FormControl>
      <InputLabel htmlFor="legacy-amount">قيمة التركة</InputLabel>
      <OutlinedInput
        id="legacy-amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="قيمة التركة"
        value={amount === 0 ? "" : amount}
        type="number"
        onChange={handleChange}
        placeholder="يرجى إدخال قيمة للتركة"
        error={error}
        inputprops={{ min: 0, max: 20 }}
      />
    </FormControl>
  );
}

export default Amount;
