import React from "react";
import acc from "/public/image/bale.png";
import line from "/public/image/line.png";
import user from "/public/image/amdin.png";
import Image from "next/image";
const Admin = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        style={{
          margin: "0px 4px",
        }}
        width={40}
        height={40}
        src={acc}
        alt="manuicon"
      />
      <Image
        style={{
          margin: "0px 4px",
        }}
        width={1}
        height={30}
        src={line}
        alt="manuicon"
      />
      <Image
        style={{
          margin: "0px 4px",
        }}
        width={150}
        height={40}
        src={user}
        alt="manuicon"
      />
    </div>
  );
};

export default Admin;
