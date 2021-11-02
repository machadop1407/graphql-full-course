import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

function DisplayData() {

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
      
     
    </div>
  );
}

export default DisplayData;
