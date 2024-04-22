// First Name Text Field Input:
import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useStore from "@/store";

function FullName() {
  // Variables:
  const [fullName, setFullName] = useState("");
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const addFullName = useStore((state) => state.addFullName);

  // Validator:
  const validateFullName = (name) => {
    const regex = /^[a-zA-Z\u0600-\u06FF\s]+$/;
    return regex.test(name);
  };

  // Handler:
  const handleFullNameChange = (event) => {
    const name = event.target.value;
    setFullName(name);
    setIsFullNameValid(validateFullName(name));
    validateFullName(name) ? addFullName(name) : null;
  };

  return (
    <TextField
      required
      label="الإسم"
      type="text"
      variant="outlined"
      value={fullName}
      onChange={handleFullNameChange}
      error={!isFullNameValid}
      helperText={!isFullNameValid && "يُرجى إدخال إسم صحيح."}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default FullName;
