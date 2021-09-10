import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

function Watch() {
  const location = useLocation();
  const { video, isError } = location;
  console.log(video);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {isError ? (
        <img src="https://firebasestorage.googleapis.com/v0/b/personal-video-app.appspot.com/o/items%2F%E8%A7%86%E9%A2%91%E4%B8%8D%E8%A7%81%E4%BA%86.jfif?alt=media&token=2be64d24-f7e3-4087-9aeb-0fe16e4dffd0" />
      ) : (
        <video className="video" autoPlay progress controls src={video.video} />
      )}
    </div>
  );
}

export default Watch;
