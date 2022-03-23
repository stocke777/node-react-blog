import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';




export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{ display: "flex"}}>
        <Toolbar sx={{ justifyContent: "end" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 10, mr: 10 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ ml: 10, mr: 10 }}>
            Contact
          </Typography>
          <Button color="inherit" sx={{ ml: 10, mr: 10 }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
