import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiServer } from "../server";
import ReactPlayer from "react-player";

const OnePage = () => {
  const { videoId } = useParams();
  console.log(videoId);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await ApiServer.fetching(
          `videos?part=snippet,statistics&id=${videoId}`
        );
        console.log(data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [videoId]);
  return (
    <div className="container">
      <br />
      <br />
      <h1 style={{ color: "red" }}>OnePage: {videoId}</h1>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
    </div>
  );
};

export default OnePage;
