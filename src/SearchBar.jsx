import React from "react";
import { useState } from "react";

export default function SearchBar(props) {
  const { setProductSearch } = props;
  const hdlChange = (e) => {
    setProductSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        onChange={hdlChange}
      />
    </div>
  );
}
