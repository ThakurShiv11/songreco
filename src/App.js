import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [song, setSong] = useState("romantic");

  let recommendationDB = {
    romantic: [
      {
        title: "Kaise Hua",
        rating: 4
      },
      {
        title: "Kahi tho Hogi voh",
        rating: 4.5
      },
      {
        title: "Tum Ho",
        rating: 4
      }
    ],
    chill: [
      {
        title: "Illahi",
        rating: 3.5
      },
      {
        title: "Dil chahta hai",
        rating: 4
      },
      {
        title: "Sham",
        rating: 4.5
      }
    ],
    party: [
      {
        title: "Abhi tho party shuru huyi hai",
        rating: 4.5
      },
      {
        title: "Disco Dancer",
        rating: 4
      },
      {
        title: "Tamma Tamma",
        rating: 4.5
      }
    ]
  };

  let genreList = Object.keys(recommendationDB);

  function showSongSuggestions(event) {
    let recommendation = event.target.innerText;
    setSong(recommendation);
  }
  return (
    <div className="App">
      <h1>Songs Recomendations</h1>

      {genreList.map((genre, index) => {
        return (
          <button key={index} onClick={showSongSuggestions}>
            {genre}
          </button>
        );
      })}
      <ul>
        {recommendationDB[song].map((genre, index) => (
          <li key={index}>
            <p class="li-title">{genre.title}</p>
            <p class="li-rating">{genre.rating}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
