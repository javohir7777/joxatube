// import Frame from "../assets/Frame.png";
import { useEffect, useState } from "react";
import Card from "../container/card";
import { ApiServer } from "../server";

const HomePage = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await ApiServer.fetching("search");
        setHome(data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    // ApiServer.fetching("search").then((data) => console.log(data.data.items));
  }, []);

  return (
    <div className="row g-3">
      {home.map((home) => (
        <Card key={home.id.videoId} home={home} />
      ))}
    </div>
  );
};

export default HomePage;
