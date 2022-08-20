import React from "react";
import { useQuery } from "react-query";
import fetchPosts from "./FetchApi";
import Form from "./Form";
import "./App.css";

function App() {
  const { data, error, isLoading, isError } = useQuery("users", fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className=" ">
      <h1 className="">Users Name</h1>

      {data.map((users, id) => {
        return (
          <ul>
            <li className="" key={id}>
              {users.name}
            </li>
          </ul>
        );
      })}
      <Form />
    </div>
  );
}

export default App;
