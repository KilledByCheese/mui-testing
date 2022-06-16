import { Button, Container, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { CustomTheme } from "../../themes/CustomTheme";
import StyledButton from "../styledComponents/CustomButton";
import StyledTextField from "../styledComponents/CustomTextField";

function TextFieldShowcase() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <h2>Default TextFields: </h2>
            <TextField
              label="Text1"
              onChange={(e) => setText1(e.target.value)}
              value={text1}
            />
            <TextField
              error
              label="Text2"
              onChange={(e) => setText2(e.target.value)}
              value={text2}
              helperText="Error Message"
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <h2>Customized TextFields (reusable Components): </h2>
            <StyledTextField
              label="Text1"
              onChange={(e) => setText1(e.target.value)}
              value={text1}
            />
            <StyledTextField
              error
              label="Text2"
              onChange={(e) => setText2(e.target.value)}
              value={text2}
              helperText="Error Message"
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <h2>Customized TextFields (Theme): </h2>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TextFieldShowcase;
