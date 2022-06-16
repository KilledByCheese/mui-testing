import { Button, Container, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type DataType = {
  firstname: string;
  surname: string;
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

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            className="subvariant-custom"
            label="Firstname"
            {...register("firstname", { required: true, minLength: 1 })}
            onChange={(e) => setName(e.target.value)}
            value={name}
            error={errors.firstname !== undefined}
            helperText={errors.firstname && "Enter your Name"}
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
        </Stack>
      </form>
    </Container>
  );
}

export default FormShowcase;
