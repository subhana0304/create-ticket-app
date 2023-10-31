import React, { useState } from 'react';
import './App.css';
import { TextField, Button, Stack, MenuItem } from '@mui/material';

function App() {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    department: '',
    subject: '',
    inputText: '',
    classification: '',
    priority: '',
    dueDate: '',
  });

  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log(formData); // Log form data to the console
    } else {
      alert('Please fill out all the required fields.');
    }
  };

  return (
    <div className="App">
      <h1>Create a Ticket</h1>
      <form onSubmit={handleSubmit} noValidate>
        <Stack spacing={2} width={500}>
          
        <TextField
            label='Contact Name'
            type='text'
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
          />
          <TextField
            label='Email'
            type='email'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            select
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>

          <TextField
            label='Subject'
            type='text'
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />

          <TextField
            type='text'
            label='Input text'
            multiline
            rows={4}
            name="inputText"
            value={formData.inputText}
            onChange={handleInputChange}
          />

          <TextField
            select
            label="Classification"
            name="classification"
            value={formData.classification}
            onChange={handleInputChange}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>

          <TextField
            select
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>

          <TextField
            label="Due Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
          />


          <Button type='submit' variant="contained" disabled={!isFormValid}>
            Save
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default App;

