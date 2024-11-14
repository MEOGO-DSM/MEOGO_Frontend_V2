import { useState } from "react";
import { addBookmarker, deleteBookmarker } from "../apis/bookmark";

const useBookMarker = (schoolId: number) => {
  const [pressBookMarker, setPressBookMarker] = useState<boolean>(false);

  const { mutate: addBookmark } = addBookmarker();
  const { mutate: deleteBookmark } = deleteBookmarker();

  const handleToggleBookMarker = () => {
    setPressBookMarker((prevState) => !prevState);

    if (!pressBookMarker) {
      addBookmark(schoolId);
    } else {
      deleteBookmark(schoolId);
    }
  };

  return { pressBookMarker, handleToggleBookMarker };
};

export default useBookMarker;
