import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axiosInstance from "../../config";
import { Grid, TextField, Button } from "@material-ui/core";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      alert("You can't register, website will go to Login page")
      // await axiosInstance.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {}
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
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justifyContent="center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/personal-video-app.appspot.com/o/items%2Flogo.jpg?alt=media&token=a4c8088c-d19e-4dee-a57f-1ef228b2779c"
                width={200}
                alt="logo"
              />
            </Grid>
            <>
              <TextField
                onChange={(e) => setUsername(e.target.value)}
                label="username"
                margin="normal"
                // inputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">
                //       <AccountCircle />
                //     </InputAdornment>
                //   ),
                // }}
              />
              <TextField
                label="email"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                // inputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">
                //       <LockRounded />
                //     </InputAdornment>
                //   ),
                // }}
              />
              <TextField
                label="password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
                // inputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">
                //       <LockRounded />
                //     </InputAdornment>
                //   ),
                // }}
              />
              <Button
                color="primary"
                variant="contained"
                style={{ width: "100%" }}
                onClick={handleFinish}
              >
                Start
              </Button>
            </>
            <div style={{ height: 20 }} />
            <Link to="/Login">
              <Button style={{ width: "100%" }}>To Login</Button>
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

export default Register;
