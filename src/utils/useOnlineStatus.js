import { useState, useEffect } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);
  //check if online

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });

    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);

  // boolean Value

  return onlineStatus;
};

export default useOnlineStatus;
