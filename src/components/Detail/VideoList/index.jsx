import React, { useEffect, useState } from "react";
import api from "../../../utils";
import Error from "../../Error";
import Loader from "../../Loader";
import ReactPlayer from "react-player/youtube";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";

const VideoList = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get(`/movie/${id}/videos`)
      .then((res) => setVideos(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div className="my-10">
      {error ? (
        <Error info={error} />
      ) : (
        videos.length > 0 && (
          <div>
            <h2 className="text-center text-4xl my-5">Fragmanlar</h2>
            <Splide
              extensions={{ Video }}
              options={{ pagination: false, autowidth: true }}
            >
              {videos.map((video, key) => (
                <SplideSlide key={key}>
                  <div>
                    <ReactPlayer
                      controls
                      width={"100%"}
                      url={`https://www.youtube.com/watch?v=LXb3EKWsInQ`}
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )
      )}
    </div>
  );
};

export default VideoList;
