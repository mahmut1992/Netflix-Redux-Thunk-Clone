import React, { useEffect, useState } from "react";
import api from "../../../utils";
import Error from "../../Error";
import imageUrl from "../../../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ActorList = ({ id }) => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get(`/movie/${id}/credits`)
      .then((res) => setActors(res.data.cast))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 text-4xl font-semibold">Aktörler</h1>
      {error ? (
        <Error />
      ) : actors.length == 0 ? (
        <h1></h1>
      ) : (
        <Splide
          options={{
            autoWidth: true,
            pagination: false,
            type: "loop",
            gap: "20px",
            autoplay: true, // Otomatik kaydırmayı aç
            interval: 3000, // Her 3 saniyede bir kaydır
            pauseOnHover: false, // Üzerine gelince durmasın
            resetProgress: false, // Yeniden başlamasını engelleme
          }}
        >
          {actors.map((item, key) => (
            <SplideSlide key={key}>
              <div className="w-[160px] h-full flex flex-col gap-1">
                <img
                  className="rounded-sm w-[160px] h-[240px]"
                  src={
                    item.profile_path
                      ? imageUrl + item.profile_path
                      : item.gender === 1
                      ? "/woman.jpg"
                      : item.gender === 2
                      ? "/man.jpg"
                      : "/default.webp"
                  }
                  alt="actor-photo"
                />
                <h2 className="text-center mt-2">
                  {item.name.slice(0, 17) + "..."}
                </h2>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default ActorList;
