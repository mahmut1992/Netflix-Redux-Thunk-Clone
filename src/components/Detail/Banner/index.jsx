import imageUrl from "../../../constants";

const Banner = ({ movie }) => {
  return (
    <div className="h-[30vh] md:h-[40vh] drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] relative">
      <img
        src={imageUrl + movie.backdrop_path}
        alt="image"
        className="size-full object-cover rounded-sm"
      />
      <div className="absolute inset-0 bg-black grid place-items-center opacity-40 p-3">
        <h2 className="text-3xl md:text-4xl font-mono z-10 font-semibold text-center">
          {movie.title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
