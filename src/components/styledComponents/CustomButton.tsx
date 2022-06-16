import { Button, ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";

type MyButtonProps = {
  children?: React.ReactNode;
};

const MyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function StyledButton({ children }: MyButtonProps) {
  return <MyButton>{children}</MyButton>;
}
