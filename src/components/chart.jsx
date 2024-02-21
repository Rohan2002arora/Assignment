
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, Cell, ResponsiveContainer } from 'recharts';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Chart() {
  const storedData = localStorage.getItem("userdata");
  const data = storedData ? JSON.parse(storedData) : [];
  const getColor = (salary) => {
    if (salary > 100000) { return "#58C0A1"; }
    else if (salary < 20000) { return "#F16D64"; }
    else { return "#FFFF00"; }
  }
  
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" height="100vh" style={{backgroundColor: 'rgb(22, 78, 99)'}}>
      {/* Box Component */}
      

      {/* Chart Component */}
      <Grid item xs={12} sm={8} md={8} lg={8}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%', // Adjust the width as needed
            borderRadius: 8,
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            
          }}
        >
          
{data?.length ?        (<>
      
        <Typography variant="h5" gutterBottom>
            Chart
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="salary" domain={[0, 'dataMax+0']} />
            <Tooltip />
            <Bar dataKey="salary">
              {data.map((entry, index) => (
                <Cell key={index} fill={getColor(entry.salary)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
          </>):(
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
