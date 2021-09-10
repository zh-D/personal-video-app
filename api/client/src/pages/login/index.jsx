import { useContext, useState } from "react";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("guest@gmail.com");
  const [password, setPassword] = useState("123456");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/personal-video-app.appspot.com/o/items%2Flogin.webp?alt=media&token=77fb6842-0bc1-4af6-a772-921ca4943e61"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="brand"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justify="center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/personal-video-app.appspot.com/o/items%2Flogo.jpg?alt=media&token=a4c8088c-d19e-4dee-a57f-1ef228b2779c"
                width={200}
                alt="logo"
              />
            </Grid>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="email"
              margin="normal"
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              margin="normal"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button
              color="primary"
              variant="contained"
              style={{ width: "100%" }}
              onClick={handleLogin}
            >
              log in
            </Button>
            <div style={{ height: 20 }} />
            <Link to="/register">
              <Button style={{ width: "100%" }}>To Register</Button>
            </Link>
          </div>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button color="primary">Go to community page</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Forgot password?</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
