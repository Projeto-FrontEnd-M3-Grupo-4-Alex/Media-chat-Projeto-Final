import { TextField } from "@mui/material"
import styled from "styled-components"

export const InputStyle = styled.div`
  div {
    border-radius: var(--border-radius-8);
    width: 100%;

  }

  label {
    color: var(--text-inputs-color);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-400);
  }



`

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
})
