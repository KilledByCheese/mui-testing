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
  backgroundColor: "#BEBEBE",
  ":hover": {
    backgroundColor: "#707070",
  },
}));

export default function CancelButton({ ...methods }: ButtonProps) {
  return <MyButton {...methods} />;
}
