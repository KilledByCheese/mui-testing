import { Button, ButtonProps, TextField, TextFieldProps } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";

const MyTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

export default function StyledTextField({ ...methods }: TextFieldProps) {
  return <MyTextField {...methods} />;
}
