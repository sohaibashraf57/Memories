import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import { logout, signin, signup } from "../../features/authSlice";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logOut = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        {/* <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" /> */}
        <img
          className={classes.image}
          src={memories}
          alt="icon"
          height="60px"
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.data?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.data?.result.name}
              src={user?.data?.result.imageUrl}
            >
              {user?.data?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.data?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={() => logOut()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
