import { Link, useLocation } from "react-router-dom";
import "./video.css";
import { Publish } from "@material-ui/icons";

export default function Video() {
  const location = useLocation();
  const video = location.video;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Video</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={video.img} alt="" className="productInfoImg" />
            <span className="productName">{video.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{video._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{video.genre}</span>
            </div>
            {/* <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{video.year}</span>
            </div> */}
            {/* <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{video.limit}</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Video Title</label>
            <input type="text" placeholder={video.title} />
            {/* <label>Year</label>
            <input type="text" placeholder={video.year} /> */}
            <label>Genre</label>
            <input type="text" placeholder={video.genre} />
            {/* <label>Limit</label>
            <input type="text" placeholder={video.limit} /> */}
            <label>Trailer</label>
            <input type="file" placeholder={video.trailer} />
            <label>Video</label>
            <input type="file" placeholder={video.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={video.img}
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
