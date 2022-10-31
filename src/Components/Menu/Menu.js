import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import rentronixPic from "./rentronixPic.jpg"

import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import "./Menu.css";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
// import { createTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom'

const drawerWidth = 240;
const navItems = ["Products", "Login"];
function DrawerAppBar(props) {
  
  const [isloggedin, setloggedin] = useState(false)
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    setloggedin(true)
  } else {
    setloggedin(false)
  }
});
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 
 
  const handleAuthClick=()=>{
    if(isloggedin){
      
      
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log("done signout")
      }).catch((error) => {
        // An error happened.
      });
      
    }
  }


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={rentronixPic} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <Link to="cart">
          <ListItem>
            <ListItemButton>
              <Badge
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "red",
                  },
                }}
              >
                <ShoppingCartIcon style={{ color: "black" }} />
              </Badge>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //   const StyledButton = styled(Button)(`
  //   text-transform: none;
  // `);
  return (
    <Box>
     
      <AppBar component="nav" style={{ backgroundColor: "#087cec" }}>
        <Toolbar className="navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "35px",
              fontFamily: "Helvetica",
              fontWeight: "500",
            }}
          >
            <Link to="/" className="link">
              {" "}
              <span style={{ color: "white", textDecoration: "none" }}>
                <img src={rentronixPic} style={{height:"70px",width:"330px",marginTop:"10px"}} />
              </span>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {isloggedin && <Link to="products" className="link">
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontFamily: "Helvetica",
                  fontWeight: "10",
                }}
              >
                Products
              </Button>
            </Link>}
            
            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                fontFamily: "Helvetica",
                fontWeight: "10",
              }}

              onClick={handleAuthClick}
            >
              {isloggedin?<>Logout</> : <>Login</>}
              
            </Button>
              {isloggedin &&  <Link to="cart" className="link">
              <Button>
                <Badge
                  badgeContent={4}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "red",
                    },
                  }}
                >
                  <ShoppingCartIcon style={{ color: "black" }} />
                </Badge>
              </Button>
            </Link>}
           
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;