import React from "react";
import { LoaderContainer } from "./Loader.styles";

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <LoaderContainer>
      <div className="wrapper">
        <div className="img-box box-1">
          <img
            id="img-1"
            src="/assets/images/loader/Spreelogo3.png"
            alt="outer-2"
          />
        </div>
        <div className="img-box box-4">
          <img
            id="img-4"
            src="/assets/images/loader/Spreelogo4.png"
            alt="outer-2"
          />
        </div>

        <div className="img-box box-2">
          <img
            id="img-2"
            src="/assets/images/loader/Spreelogo2.png"
            alt="outer-1"
          />
        </div>
        <div className="img-box box-3">
          <img
            id="img-3"
            src="/assets/images/loader/Spreelogo.png"
            alt="inner"
          />
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
