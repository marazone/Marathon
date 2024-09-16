import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const theme = useTheme();
  const location = useLocation(); // Get the current location

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); 
    setOpenDropdown(!openDropdown);
  };

  const handleListItemClick = () => {
    if (openDropdown) {
      setOpenDropdown(false);
    } else {
      toggleDrawer();
    }
  };

  React.useEffect(() => {
    setOpen(false); // Close the drawer on route change
    setOpenDropdown(false); // Close the dropdown on route change
  }, [location]);

  const list = (
    <Box
      sx={{ width: '90vw' }}
      role="presentation"
      onClick={handleListItemClick} // Use a separate handler to close the drawer
      onKeyDown={handleListItemClick}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleDropdownClick}>
            <ListItemText primary="올댓 마라톤" />
            {openDropdown ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className='bg-blue-gray-50'>
            <ListItemButton component={Link} to="/history" sx={{ pl: 4 }}>
              <ListItemText primary="히스토리" />
            </ListItemButton>
            <ListItemButton component={Link} to="/sooprint" sx={{ pl: 4 }}>
              <ListItemText primary="SOO 프린트" />
            </ListItemButton>
            <ListItemButton component={Link} to="/mail" sx={{ pl: 4 }}>
              <ListItemText primary="마라톤 메일" />
            </ListItemButton>
            <ListItemButton component={Link} to="/marazon" sx={{ pl: 4 }}>
              <ListItemText primary="마라존" />
            </ListItemButton>
            <ListItemButton component={Link} to="/chip" sx={{ pl: 4 }}>
              <ListItemText primary="침 착용법" />
            </ListItemButton>
            <ListItemButton component={Link} to="/medal" sx={{ pl: 4 }}>
              <ListItemText primary="메달각인" />
            </ListItemButton>
            <ListItemButton component={Link} to="/photowall" sx={{ pl: 4 }}>
              <ListItemText primary="전광판 포토월" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/schedule">
            <ListItemText primary="대회 일정" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/record">
            <ListItemText primary="기록 조회" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/register">
            <ListItemText primary="대회 등록" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/qrcode">
            <ListItemText primary="각인 QR생성" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='mr-5'>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={toggleDrawer}
        sx={{ color: 'white', fontSize: 36 }}
      >
        <MenuIcon sx={{ color: 'white', fontSize: 36 }} />
      </IconButton>
      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '90vw',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', padding: theme.spacing(1) }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        {list}
      </Drawer>
    </div>
  );
};

export default MobileNav;
