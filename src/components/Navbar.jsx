import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import Grid from "@material-ui/core/Grid";
import "fontsource-roboto";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Link from "@material-ui/core/Link";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  customizeToolbar: {
   height:'36px',
  }
  
 
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.customizeToolbar}>
        <Toolbar>
          <div class="row col-sm-12">
            <div class="col-sm-1"></div>
            <div class="col-sm-1"></div>
            <div class="col-sm-4 pb-4">
              <PhoneInTalkOutlinedIcon
                className={classes.PhoneInTalkIconAdjust}
              />
              <Link href="#" class="TypographyAdjust">
                1-800-579-3850
              </Link>
              {"  "}
              <MailOutlineIcon className={classes.MailOutlineIconAdjust, "ml-2"} />
              <Link href="#" class="TypographyAdjust">
                info@covenantwealth.ca
              </Link>
            </div>

            <div class="col-sm-1">
            </div>
            <div class="col-sm-1">
            </div>
            <div class="col-sm-4"> <span class="mr-4 navpara">IndivitualFamily</span> | <span class="ml-4 navpara">Business</span>
  </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
