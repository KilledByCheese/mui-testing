import { Button, ButtonProps, TextField, TextFieldProps } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";

const MyTextField = styled(TextField)({
  "& fieldset": {
    color: "#707070",
    border: "none",
    borderRadius: "0",
    borderBottom: "1px solid #006EC7",
  },
});

export default function StyledTextField({ ...methods }: TextFieldProps) {
  return <MyTextField {...methods} />;
}
