import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

function DisplayData() {

  const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);

  // Create User States
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  
  //BROKEN: Add the useMutation call utilizing the CREATE_USER_MUTATION mutation. For simplicity reasons, a user only needs a name and a username as variables.


  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      
      {/* BROKEN: Add a the mutation function call inside of this onClick */}
        <button
          onClick={}
        >
          Create User
        </button>
      </div>
      
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayData;
