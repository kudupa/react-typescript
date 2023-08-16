import React, { useState } from "react";

type UserStateProps = {
  name: string;
  place: string;
};

const User = () => {
  const [user, setUser] = useState<null | UserStateProps>(null);

  const handleLogin = () => {
    setUser({
      name: "Karthik",
      place: "Badakere",
    });
  };
  return (
    <>
      <button onClick={handleLogin}>Set username</button>
      <button onClick={handleLogin}>Set email</button>
      <h1>User name is {user?.name}</h1>
    </>
  );
};

export default User;
