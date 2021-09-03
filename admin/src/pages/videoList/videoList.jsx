import "./videoList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { VideoContext } from "../../context/videoContext/VideoContext";
import { deleteVideo, getVideos } from "../../context/videoContext/apiCalls";

export default function VideoList() {
  const { videos, dispatch } = useContext(VideoContext);
  console.log(videos);

  useEffect(() => {
    getVideos(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteVideo(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "video",
      headerName: "Video",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    // { field: "year", headerName: "year", width: 120 },
    // { field: "limit", headerName: "limit", width: 120 },
    { field: "type", headerName: "type", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/video/" + params.row._id, video: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={videos}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
