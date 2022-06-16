import { Button, ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";

const MyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function StyledButton({ ...methods }: ButtonProps) {
  return <MyButton {...methods} />;
}
