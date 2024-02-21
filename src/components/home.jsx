import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { Link } from 'react-router-dom';

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 2,
  backgroundColor: 'rgb(22, 78, 99)', // Set your desired background color
};

const cardStyle = {
  width: { xs: '50%', sm: '100%' }, // Adjust the width as needed for larger screens
  height: '40vh',
  overflow: 'hidden',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

function Home() {
  return (
    <Box sx={containerStyle}>
      {/* Card 1 */}
      <Card sx={cardStyle}>
        <Link to="/entry" style={{ textDecoration: 'none' }}>
          {/* Displaying the image */}
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.gsuQqiaazbvqO6SqtPiGRwHaE7&pid=Api&P=0&h=180"
            alt="Entry"
            style={imgStyle}
          />
        </Link>
      </Card>

      {/* Card 2 */}
      <Card sx={cardStyle}>
        <Link to="/table" style={{ textDecoration: 'none' }}>
          {/* Displaying the image */}
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.Er8ze76M1X_7tPwwKvzPKAHaHa&pid=Api&P=0&h=180"
            alt="Table"
            style={imgStyle}
          />
        </Link>
      </Card>

      {/* Card 3 */}
      <Card sx={cardStyle}>
        <Link to="/chart" style={{ textDecoration: 'none' }}>
          {/* Displaying the image */}
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.tD2wQ-V1yPeikB1T2B9SnAHaID&pid=Api&P=0&h=180"
            alt="Chart"
            style={imgStyle}
          />
        </Link>
      </Card>
    </Box>
  );
}

export default Home;
