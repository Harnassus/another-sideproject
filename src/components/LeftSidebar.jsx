import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
} from '@mui/material';
import React from 'react';


const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  [ theme.breakpoints.up('sm') ]: {
    display: 'none'
  },
  [ theme.breakpoints.up('md') ]: {
    display: 'block'
  },
}));



const LeftSideBar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: 'black', color:'white' }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home sx={{color: 'white'}}/>
              </ListItemIcon>
              <StyledListItemText primary="Homepage"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon color="primary">
                <Pages sx={{color: 'white'}}/>
              </ListItemIcon>
              <StyledListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group sx={{color: 'white'}}/>
              </ListItemIcon>
              <StyledListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront sx={{color: 'white'}}/>
              </ListItemIcon>
              <StyledListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person sx={{color: 'white'}}/>
              </ListItemIcon>
              <StyledListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings sx={{color: 'white'}}/>
              </ListItemIcon>
              <StyledListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox sx={{color: 'white'}}/>
              </ListItemIcon>
              <StyledListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{display: 'flex', alignItems:'center'}}>
                <ModeNight sx={{ color: 'white' }} />
                <Switch
                  sx={{color: "white"}}
              // onChange={e => setMode (mode === 'light' ? 'dark' : 'light')}
              />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
