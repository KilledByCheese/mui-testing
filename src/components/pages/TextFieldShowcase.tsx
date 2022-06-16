import { Button, Container, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { CustomTheme } from "../../themes/CustomTheme";
import StyledButton from "../styledComponents/CustomCancelButton";
import StyledTextField from "../styledComponents/CustomTextField";

function TextFieldShowcase() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");

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
              label="Text3"
              onChange={(e) => setText3(e.target.value)}
              value={text3}
            />
            <StyledTextField
              error
              label="Text4"
              onChange={(e) => setText4(e.target.value)}
              value={text4}
              helperText="Error Message"
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <h2>Customized TextFields (Theme): </h2>
            <TextField
              className="subvariant-custom"
              label="Text5"
              onChange={(e) => setText5(e.target.value)}
              value={text5}
            />
            <TextField
              className="subvariant-custom"
              error
              label="Text6"
              onChange={(e) => setText6(e.target.value)}
              value={text6}
              helperText="Error Message"
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TextFieldShowcase;
