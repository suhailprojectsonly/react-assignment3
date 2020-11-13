import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import HttpIcon from '@material-ui/icons/Http';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import EmojiEventsTwoToneIcon from '@material-ui/icons/EmojiEventsTwoTone';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton  color="inherit">
            <HomeIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>Home</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            <InfoIcon />
        </IconButton>
        <div class="icon-button-adjust">
        <p>About</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            <HttpIcon />
        </IconButton>
        <div class="icon-button-adjust">
        <p>Insight</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            <SettingsApplicationsIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>Service</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            < EmojiEventsTwoToneIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>Events</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            < ContactMailIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>ContactUs</p>
        </div>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit"> 
            < SearchIcon/>
        </IconButton>
        <div class="icon-button-adjust">
        <p>Search</p>
        </div>
      </MenuItem>
      
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" class="toolbarstyle">
        <Toolbar>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
       
              <div class="mt-4 header-image">
                <img src="/images/image25.png" alt="image25" />
              </div>
              <div class="header-menu">
                <ul class="uk-navbar-nav">
                  <li>
                    <a href="#">
                      <span class="linkfont">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="linkfont">About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="uk-active ">
                      <span class="linkfont">Insight</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="linkfont">Service</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="linkfont">Events</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="linkfont">Contact Us</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <SearchIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          

          <div className={classes.sectionMobile}>
          <div class="mt-4 pr-5">
                <img src="/images/image25.png" alt="image25" />
              </div>
              <div class="pl-5">
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>     
            </div>
          </div>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
