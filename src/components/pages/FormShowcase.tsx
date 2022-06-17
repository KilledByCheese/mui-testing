import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type DataType = {
  firstname: string;
  surname: string;
  gender: string;
};

function FormShowcase() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();
  const onSubmit: SubmitHandler<DataType> = (data) => {
    let name = data.firstname + " " + data.surname;
    alert("Hello " + name);
  };

  const GENDERS = [
    {
      value: "m",
      label: "Male",
    },
    {
      value: "f",
      label: "female",
    },
    {
      value: "d",
      label: "Divers",
    },
  ];

  const [gender, setGender] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <Container>
      <Stack spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8} className="formBackground">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                  <FormControl>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      id="SelectGenderType"
                      className="custom-input"
                      {...register("gender", { required: true })}
                      label="Gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      error={errors.gender !== undefined}
                    >
                      {GENDERS.map((option) => (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                      ))}
                    </Select>
                    {errors.gender && (
                      <FormHelperText sx={{ color: "#d32f2f" }}>
                        Field cannot be empty!
                      </FormHelperText>
                    )}
                  </FormControl>
                  <TextField
                    className="subvariant-custom"
                    label="Firstname"
                    {...register("firstname", { required: true, minLength: 1 })}
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    error={errors.firstname !== undefined}
                    helperText={errors.firstname && "Enter your Firstname"}
                  />
                  <TextField
                    className="subvariant-custom"
                    label="Surname"
                    {...register("surname", { required: true, minLength: 1 })}
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    error={errors.surname !== undefined}
                    helperText={errors.surname && "Enter your Surname"}
                  />
                  <Button variant="confirmButton" type="submit">
                    Confirm
                  </Button>
                  <br></br>
                </Stack>
              </form>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <h4>Your Inputs:</h4>
                <p>Gender: {gender}</p>
                <p>Firstname: {firstname}</p>
                <p>Surname: {surname}</p>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}

export default FormShowcase;
