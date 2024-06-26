// src/components/EmployeeDBComponent/EmployeeDashboard.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EHome from './EHome';
import Tasks from './Tasks';
import Attendance from './Attendance';
import Projects from './Projects';
import AppsWebsites from './AppsWebsites';
import Settings from './Settings';

const EmployeeDashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#3f51b5',
          height:55
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            SmartAgile
          </Typography>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="User Avatar" src="/emp3.jpg" />
        </Toolbar>
      </AppBar>
      <div className='mt-8'>
      <VerticalTabs/>
      </div>
      
      
    </Box>
  );
};


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400}}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',width:120,mt:4,mr:0,bgcolor:'gray-100' ,justifyContent:'left'}}
      >
        <Tab label="Dashboard" {...a11yProps(0)} />
        <Tab label="Tasks" {...a11yProps(1)} />
        <Tab label="Attendance" {...a11yProps(2)} />
        <Tab label="Projects" {...a11yProps(3)} />
        <Tab label="Apps & Websites" {...a11yProps(4)} />
        <Tab label="Settings" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <EHome/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tasks/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Attendance/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AppsWebsites/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Settings/>
      </TabPanel>
    </Box>
  );
}

export default EmployeeDashboard;
