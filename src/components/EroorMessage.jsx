import React from "react";

const EroorMessage = ({ error }) => {
  return (
    <p className="bg-rose-100 text-rose-600 p-5 rounded border border-rose-500 ">
      {error}
    </p>
  );
};

export default EroorMessage;
