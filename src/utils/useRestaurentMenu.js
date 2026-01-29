import { useEffect, useState } from "react";
import { API_MENU } from "../utils/constants";

const useRestarentMenu = (resId) => {
  // Custom hook logic to fetch restaurant menu using resId
  // This is a placeholder implementation
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(API_MENU + resId);
      const json = await data.json();
      setResInfo(json);
    };
    fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useRestarentMenu;
