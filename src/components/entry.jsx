import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Entry(){
  const [userdata, setUserData] = useState(() => {
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      try {
        return JSON.parse(storedData);
      } catch (e) {
        console.error("Parsing error: ", e);
        // Handle the error as needed, maybe return a default value
        return []; // or return a default object or whatever your initial state should be
      }
    }
    return []; // This is the default value in case there's nothing in localStorage
  });
    const [values,setValues]=useState({
        name:"",
        job:"",
        age:"",
        city:"",
        salary:"",
    })
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Convert the name to lowercase
      const lowercaseName = values.name.toLowerCase();
  
      // Check if the lowercase name already exists
      const isNameExists = userdata.some((user) => user.name.toLowerCase() === lowercaseName);
  
      if (isNameExists) {
          // Show toast notification for error
          toast.error('Name already exists. Please choose a different name.', {
              position: 'top-center',
              autoClose: 3000, // Close the notification after 3000 milliseconds (3 seconds)
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
      } else {
          // Add data to the state and localStorage
          setUserData((prev) => [...prev, { ...values, name: lowercaseName }]);
          localStorage.setItem('userdata', JSON.stringify([...userdata, { ...values, name: lowercaseName }]));
  
          // Show toast notification for success
          toast.success('Data added successfully', {
              position: 'top-center',
              autoClose: 2000, // Close the notification after 2000 milliseconds (2 seconds)
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
  
          // Clear the form after a delay
          setTimeout(() => {
              setValues({
                  name: '',
                  job: '',
                  age: '',
                  city: '',
                  salary: '',
              });
          }, 1000);
      }
  };
  
      useEffect(() => {
        // This will log the updated userdata when it changes
        console.log(userdata);
      }, [userdata]);
    
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', 
            backgroundColor: 'rgb(22, 78, 99)'
          }}
        >
          <ToastContainer />
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
             
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for glass morphism effect
            }}
          >
            <Typography variant="h5" gutterBottom>
              Enter User Information
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={values.name}
                onChange={
                    (e)=>{
                        setValues((prev)=>({...prev,name:e.target.value}))
                    }
                }
              />
              <TextField
                label="Job"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={values.job}
                onChange={
                    (e)=>{
                        setValues((prev)=>({...prev,job:e.target.value}))
                    }
                }
              />
              <TextField
                label="Age"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="number"
                value={values.age}
                onChange={
                    (e)=>{
                        setValues((prev)=>({...prev,age:e.target.value}))
                    }
                }
              />
              <TextField
                label="City"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={values.city}
                onChange={
                    (e)=>{
                        setValues((prev)=>({...prev,city:e.target.value}))
                    }
                }

              />
              <TextField
                label="Salary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="number"
                value={values.salary}
                onChange={
                    (e)=>{
                        setValues((prev)=>({...prev,salary:e.target.value}))
                    }
                }
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
export default Entry;