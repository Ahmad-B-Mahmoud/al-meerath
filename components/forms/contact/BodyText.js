// The Message Text Body:
import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import RateReviewTwoToneIcon from "@mui/icons-material/RateReview";
import useStore from "@/store";

function BodyText() {
  // Variables:
  const [bodyText, setBodyText] = useState("");
  const [isBodyTextValid, setIsBodyTextValid] = useState(true);
  const addBodyText = useStore((state) => state.addBodyText);

  // Validator:
  const validateBodyText = (text) => {
    const regex = /^[a-zA-Z0-9\u0600-\u06FF\s]+$/;
    return regex.test(text);
  };

  // Handler:
  const handleBodyTextChange = (event) => {
    const text = event.target.value;
    setBodyText(text);
    setIsBodyTextValid(validateBodyText(text));
    validateBodyText(text) ? addBodyText(text) : null;
  };

  return (
    <TextField
      value={bodyText}
      required
      label="نصّ الرسالة"
      placeholder="إكتب لنا.."
      multiline
      type="text"
      rows={4}
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <RateReviewTwoToneIcon />
          </InputAdornment>
        ),
      }}
      onChange={handleBodyTextChange}
      error={!isBodyTextValid}
      helperText={!isBodyTextValid && "يُرجى إدخال نص صحيح."}
    />
  );
}

export default BodyText;
