import React from 'react';
import './App.css';
import { Button, Stack, MenuItem, TextField } from '@mui/material'; // Correct import here
import { useForm, Controller } from 'react-hook-form';

function App() {
  const { handleSubmit, control, formState } = useForm();
  const { isValid } = formState;

  const onSubmit = (data) => {
    console.log(data); // Log form data to the console
  };

  return (
    <div className="App">
      <h1>Create a Ticket</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={500}>
          <Controller
            name="contactName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label='Contact Name'
                type='text'
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label='Email'
                type='email'
                {...field}
              />
            )}
          />

          <Controller
            name="department"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                select
                label="Department"
                {...field}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </TextField>
            )}
          />

          <Controller
            name="subject"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label='Subject'
                type='text'
                {...field}
              />
            )}
          />

          <Controller
            name="inputText"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                type='text'
                label='Input text'
                multiline
                rows={4}
                {...field}
              />
            )}
          />

          <Controller
            name="classification"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                select
                label="Classification"
                {...field}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </TextField>
            )}
          />

          <Controller
            name="priority"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                select
                label="Priority"
                {...field}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </TextField>
            )}
          />

          <Controller
            name="dueDate"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Due Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                {...field}
              />
            )}
          />

          <Button type='submit' variant="contained" disabled={!isValid}>
            Save
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default App;
