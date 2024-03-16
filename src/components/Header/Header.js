import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function MyHeader() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            CESI EATS
          </Typography>
          {/* <Link to="/">
          </Link> */}
          <Button onClick={() => navigate({ pathname: `/products` })} color="inherit" sx={{fontSize: "16px"}}>Products</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}