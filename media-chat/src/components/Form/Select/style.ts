import styled from "styled-components"

import { TextField } from "@mui/material"
export const StyleSelect = styled.div`
  div {
    border-radius: var(--border-radius-8);
    background-color: var(--grey-transparent-2);
  }

  p {
    margin-bottom: 0.5rem;
  }
`

export const CustomTextFieldSelect = styled(TextField)({
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
