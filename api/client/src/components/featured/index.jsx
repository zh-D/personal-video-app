import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./index.scss";
import axiosInstance from "../../config";
import { Link } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  const [isError, setIsError] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasTimeout, setHasTimeout] = useState(false);

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

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axiosInstance.get(`/videos/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);
  return (
    <div className="featured">
      <div className="category">
        {type && <div id="type">{type}</div>}
        <select
          name="genre"
          id="genre"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Genre</option>
          {(!type || type === "music") && (
            <>
              <option value="ballads">Ballads</option>
              <option value="fingerstyle">FingerStyle</option>
            </>
          )}
          {(!type || type === "sport") && (
            <>
              <option value="taekwondo">taekwondo</option>
              <option value="basketball">basketball</option>
              <option value="football">football</option>
            </>
          )}
        </select>
      </div>
      {isError ? (
        <img src="https://firebasestorage.googleapis.com/v0/b/personal-video-app.appspot.com/o/items%2F%E8%A7%86%E9%A2%91%E4%B8%8D%E8%A7%81%E4%BA%86.jfif?alt=media&token=2be64d24-f7e3-4087-9aeb-0fe16e4dffd0" />
      ) : (
        <img src={content.img} alt="" />
      )}
      {!isError && (
        <div className="info">
          <img src={content.imgTitle} alt="" />
          <span className="desc">{content.desc}</span>
          <div className="buttons">
            <Link to={{ pathname: "/watch", video: content, isError: isError }}>
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
            </Link>
            <button onClick={handleClick} className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          这个功能还没有开发哦~
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Featured;
