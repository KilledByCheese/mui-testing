import { Button, ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";

const MyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: "inline-block",
  width: "fit-content",
  minWidth: "8rem",
  textTransform: "none",
  color: "white",
  borderRadius: "15px",
  backgroundColor: "#003D69",
  ":hover": {
    backgroundColor: "#006EC7",
  },
}));

export default function ConfirmButton({ ...methods }: ButtonProps) {
  return <MyButton {...methods} />;
}
