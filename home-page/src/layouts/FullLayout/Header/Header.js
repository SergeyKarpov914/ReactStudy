import React from "react";

import {
  AppBar,
  Toolbar,
} from "@mui/material";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const myStyle = {
  //backgroundImage: "url(../../../assets/images/backgrounds/background.png)",
    //height: "100",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <AppBar sx={props.sx} elevation={0} className={props.customClass}>
      <Toolbar style={myStyle}>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
