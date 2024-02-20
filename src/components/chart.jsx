import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Bar, Cell } from 'recharts';

function Chart() {
  const data = JSON.parse(localStorage.getItem("userdata") || []);
  const getColor = (salary) => {
    if (salary > 100000) { return "#58C0A1"; }
    else if (salary  < 20000) { return "#F16D64"; }
else { return "#FFFF00"; }
}

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          zIndex: 1,
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
        <BarChart width={730} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="salary" domain={[0, 'dataMax+0']} />
          <Tooltip />
          
          {/* <Bar dataKey="salary" fill={(entry) => (entry < 20000 ? '#ff0000' : entry > 100000 ? '#008000' : 'yellow')}  /> */}
          <Bar dataKey="salary"> 
                {data.map((entry, index) => (
                 <Cell fill={getColor(entry.salary)} />
                       ))}
           </Bar>
        </BarChart>
      </Paper>
    </Box>
  );
}

export default Chart;
