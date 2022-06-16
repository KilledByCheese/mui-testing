import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    cancelButton: true;
    confirmButton: true;
  }
}

const colors = {
  blue: {
    adesso: "#006EC7",
    dark: "#003D69",
    light: "#90B0DB",
    grey: "#E7EFF9",
  },
  grey: {
    dark: "#707070",
    light: "#BEBEBE",
  },
  white: {
    dark: "#EEF1F7",
    light: "#F6F8FB",
  },
};

const CustomTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "cancelButton" },
          style: {
            display: "inline-block",
            width: "fit-content",
            minWidth: "8rem",
            textTransform: "none",
            color: "white",
            borderRadius: "15px",
            backgroundColor: colors.grey.light,
            ":hover": {
              backgroundColor: colors.grey.dark,
            },
          },
        },
        {
          props: { variant: "confirmButton" },
          style: {
            display: "inline-block",
            width: "fit-content",
            minWidth: "8rem",
            textTransform: "none",
            color: "white",
            borderRadius: "15px",
            backgroundColor: colors.blue.dark,
            ":hover": {
              backgroundColor: colors.blue.adesso,
            },
          },
        },
      ],
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // this is styles for the new variants
          "&.subvariant-custom": {
            "& fieldset": {
              color: colors.grey.dark,
              border: "none",
              borderRadius: "0",
              borderBottom: `1px solid ${colors.blue.adesso} `,
            },
          },
        },
      },
    },
  },
});

export { CustomTheme };
