import React from "react";

import { MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleList } from "../../redux/action";

const AddButton = ({ movie }) => {
  const { list } = useSelector((store) => store);

  const dispatch = useDispatch();

  const isAdded = list.find((i) => i.id == movie.id);

  const handleClick = () => {
    dispatch(toggleList(movie, "true"));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 py-2 px-4 flex items-center gap-2 rounded hover:bg-blue-700 cursor-pointer justify-center"
    >
      {isAdded ? (
        <>
          <MdBookmarkRemove /> <span>Listeden Kaldır</span>
        </>
      ) : (
        <>
          <MdBookmarkAdd />
          <span>Listeye ekle</span>
        </>
      )}
    </button>
  );
};

export default AddButton;
