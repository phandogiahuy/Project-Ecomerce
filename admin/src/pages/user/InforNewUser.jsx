import React from "react";

const InForNewUser = ({ user }) => {
  return (
    <>
      <p>Email: {user.email} </p>
      <p>Name: {user.username}</p>
    </>
  );
};

export default InForNewUser;
