import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    cancelButton: true;
    confirmButton: true;
  }
}

const CustomTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "cancelButton" },
          style: {
            color: "white",
            borderRadius: "15px",
            backgroundColor: "#BEBEBE",
            ":hover": {
              backgroundColor: "#707070",
            },
          },
        },
        {
          props: { variant: "confirmButton" },
          style: {
            color: "white",
            borderRadius: "15px",
            backgroundColor: "#003D69",
            ":hover": {
              backgroundColor: "#006EC7",
            },
          },
        },
      ],
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export { CustomTheme };
