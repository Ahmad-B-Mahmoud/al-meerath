// The Contact Email Input;
import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import useStore from "@/store";

function Email() {
  // Variables:
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const addEmail = useStore((state) => state.addEmail);

  // Validator:
  function validateEmail(email) {
    // Regular expression for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  // Handlers:
  const handleChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    setIsEmailValid(validateEmail(email));
    validateEmail(email) ? addEmail(email) : null;
  };

  return (
    <TextField
      value={email}
      label="الإيميل الخاص بكم"
      type="email"
      fullWidth
      required
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AlternateEmailTwoToneIcon />
          </InputAdornment>
        ),
      }}
      error={!isEmailValid}
      helperText={!isEmailValid && "يُرجى إدخال إيميل صحيح."}
      variant="outlined"
      onChange={handleChange}
    />
  );
}

export default Email;
