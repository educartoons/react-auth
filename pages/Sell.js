import React from "react";
import CreateItem from "../components/CreateItem";
import PleaseSiginIn from "../components/PleaseSignIn";

const Sell = () => {
  return (
    <div>
      <PleaseSiginIn>
        <CreateItem />
      </PleaseSiginIn>
    </div>
  );
};

export default Sell;
