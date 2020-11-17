import React from "react";
import { useLocation } from "react-router-dom";

const Page404Error = () => {
  let location = useLocation();
  return (
    <>
      <div className="error404">
        <h3>Unfortunately this path <code>{location.pathname}</code> doesn't exist...</h3>
      </div>
    </>
  );
};

export default Page404Error;
