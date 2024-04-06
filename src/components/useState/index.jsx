import { useState, useEffect } from "react";
import "../useState/style.scss";

function Profile() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState({
    name: "Arjun",
    age: "22",
    occupation: "Jr.Software Developer",
    college: "VISTAS",
  });

  const updateName = () => {
    setProfile((previousState) => {
      return { ...previousState, name: "Guru arjun", age: "23" };
    });
  };

  useEffect(() => {
    // This function will be executed after every render
    console.log("Component rendered");

    // Returning a cleanup function
    // return () => {
      //  console.log("Cleanup function called");
    // };
  });

  return (
    <>
      <div className="container">
        <h1>Hooks useState</h1>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">College</th>
              <th scope="col">Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{profile.name}</td>
              <td>{profile.age}</td>
              <td>{profile.college}</td>
              <td>{profile.occupation}</td>
            </tr>
          </tbody>
        </table>
        <button className="click" onClick={updateName}>
          Update Me!
        </button>

        <p>You clicked {count} times</p>
        <button className="click" onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
}

export default Profile;
