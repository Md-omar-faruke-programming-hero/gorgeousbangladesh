import React from "react";
import acc from "/public/image/search.png";
import Image from "next/image";
const SearchInput = () => {
  return (
    <div style={{position:"relative"}}>
      <input
        style={{
          backgroundColor: "#F9FAFC",
          height: " 48px",
          width: "287px",
          borderRadius: " 30px ",
          marginLeft:"80px",
          position:"relative"
          
        }}
        type="text"
        name=""
        id=""
      />
      <Image style={{position:"absolute",top:"25px",left:"310px"}} width={16} height={16} src={acc} alt="manuicon" />,
    </div>
  );
};

export default SearchInput;
