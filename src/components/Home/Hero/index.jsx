import { useEffect, useState } from "react";
import api from "../../../utils";
import { Link } from "react-router-dom";
import imageUrl from "../../../constants";
import AddButton from "../../AddButton";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        // Api den gelen populer filmlere eriş
        const movies = res.data.results;
        // rastgele bir sayı oluştur
        const index = Math.floor(Math.random() * movies.length);
        // Filmler içerisinden rastgele bir tanesine eriş

        setMovie(movies[index]);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error ? (
        <h1> Error</h1>
      ) : !movie ? (
        <h1>Yükleniyorrr</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-h[400px] gap-5 mb-10 ">
          {/* text */}
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{movie.title} </h1>
            <p className="text-start text-gray-300">{movie.overview} </p>
            <p>
              <span>IMDB : </span>
              <span className="text-yellow-400 ms-2 font-semibold">
                {movie.vote_average.toFixed(1)}{" "}
              </span>
            </p>
            <div className="flex gap-5">
              <Link
                className="p-2 px-4 bg-red-500 rounded transition hover:bg-red-700"
                to={`/movie/${movie.id}`}
              >
                Film İzle
              </Link>
              <AddButton movie={movie} />
            </div>
          </div>
          {/* image */}
          <div>
            <img
              className="my-4 object-cover max-h-[300px] rounded drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] w-[80%] mx-auto"
              src={imageUrl + movie.poster_path}
              alt="image-photo"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
