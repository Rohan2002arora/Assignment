import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, Cell, ResponsiveContainer } from 'recharts';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Chart() {
  const storedData = localStorage.getItem("userdata");
  const data = storedData ? JSON.parse(storedData) : [];

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Capitalize the first letter of each name in the data
  const capitalizedData = data.map(entry => ({
    ...entry,
    name: capitalizeFirstLetter(entry.name)
  }));

  const getColor = (salary) => {
    if (salary > 100000) { return "#58C0A1"; }
    else if (salary < 20000) { return "#F16D64"; }
    else { return "#FFFF00"; }
  }

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" height="100vh" style={{ backgroundColor: 'rgb(22, 78, 99)' }}>
      <Grid item xs={12} sm={8} md={8} lg={8}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            borderRadius: 8,
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {capitalizedData?.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Chart
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={capitalizedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis dataKey="salary" domain={[0, 'dataMax+0']} />
                  <Tooltip />
                  <Bar dataKey="salary">
                    {capitalizedData.map((entry, index) => (
                      <Cell key={index} fill={getColor(entry.salary)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </>
          ) : (
            <>
              <h1>No Data Found</h1>
              <Link to="/entry" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Go to Entry
                </Button>
              </Link>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Chart;
