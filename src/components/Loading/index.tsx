import React from "react";
import ReactLoading from "react-loading";

import './loading.scss';

const Loading = () => {
  return (
    <ReactLoading
      type="cylon" 
      width={64}
      height={64}
      className="spinner"
    />
  );
};

export default Loading;
