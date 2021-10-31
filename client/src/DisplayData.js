import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
    }
  }
`;

function DisplayData() {
  // This isn't working because the 'loading' variable comes from the useQuery hook.
  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }

  // This should return the list of movies and display their name. Fill in the data variable by using the useQuery hook.
  return (
    <div>
      {data &&
        data.movies.map((movie) => {
          return (
            <div>
              <h1>Movie: {movie.name}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayData;
