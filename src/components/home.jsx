import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Adjust the height as needed
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          zIndex:1,
          flexDirection: 'column',
          alignItems: 'center',
          width: '60%', // Adjust the width as needed
          borderRadius: 8, // Border radius for glass morphism effect
          backdropFilter: 'blur(8px)', // Glass morphism effect
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass morphism effect
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for glass morphism effect
        }}
      >
        <Typography variant="h5" gutterBottom>
          User Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Job"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Age"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number"
          />
          <TextField
            label="City"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Salary"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number"
          />
           <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default Home;
