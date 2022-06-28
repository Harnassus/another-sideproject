import {
  AutoAwesome,
  Mail,
  Notifications,
  SearchOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  InputAdornment,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';


import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';



const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  backgroundColor: 'black',
  justifyContent: 'space-between',
});

const SearchBar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));
const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  [ theme.breakpoints.down("sm") ]: {
    display: "none"
  }
}));

const User = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [ theme.breakpoints.down("sm") ]: {
    display: "flex"
  }
}));



const Navbar = () => {

  const [ open, setOpen ] = useState(false);
   const [ data, setData ] = useState([]);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        return await axios.get("http://localhost:5000/blogs").then((res) => setData(res.data)).catch((err) => console.log(err))
    }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Ad Astra
        </Typography>
        <AutoAwesome sx={{ display: { xs: 'block', sm: 'none' } }} />
        <SearchBar>
          <InputBase
            type="search"
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            }
            placeholder="Search..."
          />
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={10} color="secondary">
            <Notifications />
          </Badge>
          <Avatar
            onClick={e => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </Icons>
        <User onClick={e => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <Typography variant="span">Vinci</Typography>
        </User>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
