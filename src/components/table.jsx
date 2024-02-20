
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
function Show(){
    const data=JSON.parse(localStorage.getItem("userdata") || []);
   

    return(
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
      
      </Paper>
        </Box>
);

}
export default Show;
