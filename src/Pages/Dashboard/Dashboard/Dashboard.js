import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import '../Dashboard.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddBlog from '../../AddBlog/AddBlog';
import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';
import AddTrending from '../../AddTrending/AddTrending';
import AddBestSeller from '../../AddBestSeller/AddBestSeller';
import booking from'../../Booking/Booking';
import { Button } from '@mui/material';
import Booking from '../../Booking/Booking';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div className='public-dashboard'>
      <Link to="/home" className='NevigationText'><Button className='buttond' >Home</Button></Link>
      <Link to={`${url}`} className='NevigationText'><Button className='buttond' >Dashboard</Button></Link>
      <Link to={`${url}/booking`} className='NevigationText'><Button className='buttond' >Booking</Button></Link>
      </div>
      {admin && <Box>
       <div  className='dashboard'>
       <Link to={`${url}/makeAdmin`} className='NevigationText'><Button className='buttond' >Make Admin</Button></Link>
      <Link to={`${url}/addblog`} className='NevigationText'><Button className='buttond' >Add Blog</Button></Link>
      <Link to={`${url}/addbestseller`} className='NevigationText'><Button className='buttond' >Add Best Seller</Button></Link>
      <Link to={`${url}/addtrending`} className='NevigationText'><Button className='buttond' >Add Trending</Button></Link>
      
       </div>
      </Box>

      }
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
        <Switch>
        <Route exact path={path}>
          <h3>Welcome ot Dashboard</h3>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addblog`}>
       <AddBlog></AddBlog>
        </AdminRoute>
        <AdminRoute path={`${path}/addtrending`}>
       <AddTrending></AddTrending>
        </AdminRoute>
        <AdminRoute path={`${path}/addbestseller`}>
       <AddBestSeller></AddBestSeller>
        </AdminRoute>
        <AdminRoute path={`${path}/booking`}>
       <Booking></Booking>
        </AdminRoute>
      </Switch>
          
        </Typography>
       
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default  Dashboard;
