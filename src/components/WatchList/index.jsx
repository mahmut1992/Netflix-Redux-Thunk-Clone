import React from "react";
import { useSelector } from "react-redux";
import Error from "../Error";
import { Link } from "react-router-dom";
import imageUrl from "../../constants";
import { MdBookmarkRemove } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleList } from "../../redux/action";

const WatchList = () => {
  const { isLoading, error, list } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleDelete = (movie) => {
    dispatch(toggleList(movie, false));
  };
  return (
    <div>
      {error ? (
        <Error />
      ) : list.length === 0 ? (
        <h1>İzleme Listesinde Film Bulunmuyor</h1>
      ) : (
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">İzleme Listesi</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-10">
            {list.map((movie, key) => (
              <div className="relative" key={key}>
                <button
                  onClick={() => handleDelete(movie)}
                  className="bg-blue-500 absolute top-3 end-3 p-3 rounded hover:bg-blue-600 cursor-pointer"
                >
                  <MdBookmarkRemove />
                </button>
                <Link to={`/movie/${movie?.id}`}>
                  <img
                    className="rounded"
                    src={imageUrl + movie?.poster_path}
                    alt="movie-photo"
                  />
                </Link>
                <h1 className="text-xl font-semibold mt-3 text-center">
                  {movie?.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchList;
