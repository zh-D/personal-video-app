import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { VideoContextProvider } from "./context/videoContext/VideoContext";
import { ListContextProvider } from "./context/listContext/ListContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <VideoContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </VideoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);