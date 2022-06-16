import { Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import CancelButton from "../styledComponents/CustomCancelButton";
import ConfirmButton from "../styledComponents/CustomConfirmButton copy";

function ButtonShowcase() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <h2>Default Buttons: </h2>
            <Button variant="text">Abbrechen</Button>
            <Button variant="contained">Speichern</Button>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <h2>Customized Buttons (reusable Components): </h2>

            <CancelButton>Abbrechen</CancelButton>
            <ConfirmButton>Speichern</ConfirmButton>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <h2>Customized Buttons (Theme): </h2>
            <Button variant="cancelButton">Abbrechen</Button>
            <Button variant="confirmButton">Speichern</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ButtonShowcase;
