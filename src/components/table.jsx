
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Show() {
  const storedData = localStorage.getItem("userdata");
  const data = storedData ? JSON.parse(storedData) : [];
 
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh" style={{backgroundColor: 'rgb(22, 78, 99)'}}>
      <Grid item xs={12} sm={6} md={8} lg={6}>
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
            User Information
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Job</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">City</TableCell>
                  <TableCell align="right">Salary</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((data) => (
                  <TableRow
                    key={data.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data.name}
                    </TableCell>
                    <TableCell align="right">{data.job}</TableCell>
                    <TableCell align="right">{data.age}</TableCell>
                    <TableCell align="right">{data.city}</TableCell>
                    <TableCell align="right">{data.salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

export default Show;
