import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

function Watch() {
  const location = useLocation();
  const video = location.video;
  console.log(video);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={video.video} />
    </div>
  );
}

export default Watch;
