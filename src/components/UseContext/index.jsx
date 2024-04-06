import { useState, createContext, useContext } from "react";
import "../UseContext/style.scss";

const UserContext = createContext();

function Name1() {
  const [user, setUser] = useState("Guru Arjun");

  return (
    <UserContext.Provider value={user}>
      <h1>{user}</h1>
      <Name2 />
    </UserContext.Provider>
  );
}

function Name2() {
  return (
    <>
      <h1>Component 2</h1>
      <Name3 />
    </>
  );
}

function Name3() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 3</h1>
      <h2>{user}</h2>
      <Name4 />
    </>
  );
}

function Name4() {
  return (
    <>
      <h1>Component 4</h1>
      <Name5 />
    </>
  );
}

function Name5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{user}</h2>
    </>
  );
}

export default Name1;
