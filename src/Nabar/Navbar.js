import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

const drawerWidth = 240;
const navItems = ['Home', 'Service', 'AboutUs'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: '#36B864' }}>
              <ListItemText
                primary={
                  <Link
                    to={item.replace(' ', '').toLowerCase()}
                    smooth={true}
                    duration={500}
                  >
                    {item}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: '#fff', boxShadow: 'none' }}
        component="nav"
      >
        <Toolbar sx={{ display: 'flex', width: '100%' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#999' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flex: '33.333%',
              flexGrow: 1,
              display: { xs: 'block', sm: 'block' },
            }}
          >
            <img
              style={{
                position: 'relative',
                width: '82px',
                height: '76px',
                top: '10px',
                left: '124px',
              }}
              src="https://s3-alpha-sig.figma.com/img/4eb7/350b/6c3f9c965db196d180d48ab1f8e0cad7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SygDeWRVDVcI8ZN-co9jeue7gcLCBS5saTK8OxA0qNkoOCFHwlLw4jI5BC9~Jaemi9qpJBpcuTGDrm-ia2pU2a-dI8O9Sm9x6QwA22xvqY~velmjAuVvV9qHWbomFs2f2HIp2NCXjOS6RhjMLPOb9nkYrfo8SC3D7lGXpjD-FLzmfNMsYuXz0zOkMaKh8bnMSOgM5WpByv1jA6ZDMl1Kq8MoXlLbRRmLdtlNNMNYfJEMn08PWMZ3D0C7ajQ-oUXFZ11p~HhOy05suwssDv~d5hkUaFj9sBvwPCpUm9N40-LXzGfpCt~l6C2XfsvRZvRThDxeaVdWrI-JsZgs8wj59g__"
              alt="Logo"
            />
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'space-around',
              flex: '33.333%',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#36B864',
                  padding: '0px',
                  width: '45px',
                  height: '25px',
                  textTransform: 'none',
                  fontWeight: '600',
                  lineHeight: '24.5px',
                }}
              >
                <Link
                  to={item.replace(' ', '').toLowerCase()}
                  smooth={true}
                  duration={500}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              justifyContent: 'center',
              flex: '33.333%',
            }}
          >
            <Button
              variant="outlined"
              sx={{
                border: '1px solid #36B864',
                color: '#000000B2',
                width: '157px',
                height: '47.68px',
                padding: '0px',
                textTransform: 'none',
                textAlign: 'right !important',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
