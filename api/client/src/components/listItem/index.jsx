import "./index.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../config";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await axiosInstance.get("/videos/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setVideo(res.data);
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
    };
    getVideo();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", video: video, isError: isError }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isError ? (
          <img src="https://firebasestorage.googleapis.com/v0/b/personal-video-app.appspot.com/o/items%2F%E8%A7%86%E9%A2%91%E4%B8%8D%E8%A7%81%E4%BA%86.jfif?alt=media&token=2be64d24-f7e3-4087-9aeb-0fe16e4dffd0" />
        ) : (
          <img src={video?.imgSm} alt="" />
        )}
        {isHovered && (
          <>
            {/* <video src={video.video} autoPlay={true} loop /> */}
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                {/* <span>{video.duration}</span>
                <span className="limit">+{video.limit}</span>
                <span>{video.year}</span> */}
              </div>
              <div className="desc">{video.desc}</div>
              <div className="genre">{video.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
