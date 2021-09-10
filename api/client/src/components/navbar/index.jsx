import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import AlertWarning from "../AlertWarning";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [hasTimeout, setHasTimeout] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const handleAlertOpen = () => {
    setAlertOpen(true);
  };

  const handleClick = () => {
    console.log(123);
    setOpen(true);
    if (hasTimeout) {
      return;
    }
    setHasTimeout(true);
    setTimeout(() => {
      handleClose();
      setHasTimeout(false);
    }, 3000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/music" className="link">
            <span className="navbarmainLinks">Music</span>
          </Link>
          <Link to="/sport" className="link">
            <span className="navbarmainLinks">Sport</span>
          </Link>
          {/* <span>New and Popular</span>
          <span>My List</span> */}
        </div>
        <div className="right">
          {/* <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" /> */}
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span onClick={handleClick}>Settings</span>
              <span onClick={handleAlertOpen}>Logout</span>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          这个功能还没有开发哦~
        </Alert>
      </Snackbar>
      <AlertWarning
        open={alertOpen}
        setOpen={setAlertOpen}
        onSuccess={() => dispatch(logout())}
      />
    </div>
  );
};

export default Navbar;
