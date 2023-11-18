# Spotify Song Gif Finder 🎵🎶

## Project Description

The Spotify Song Gif Finder project offers a unique way to explore random songs from Spotify and find related GIFs using the Giphy API. Users can enter an artist's name to retrieve a random song and a GIF related to that artist, providing an engaging experience without the need for users to sign in to their Spotify account.

## How It's Made 🛠️

- **Technologies Used:** HTML, CSS, JavaScript, Fetch API, Spotify API, Giphy API
- **Project Organization:**
  - Organized project into folders: css (for styles), js (for JavaScript files), and the root folder containing README and index.html.

## Lessons Learned 🧠

- **Spotify API Challenges:**
  - Faced challenges with access and refresh tokens from the Spotify API.
  - Explored solutions for token refreshing, considering potential user sign-in options.

- **Chaining API Requests:**
  - Overcame the challenge of passing data from one API to another.
  - Nested the Giphy API call inside the fetch for the Spotify API to connect the two.

- **Embedding Spotify Player:**
  - Encountered difficulties in embedding the Spotify player into HTML.
  - Successfully embedded the player by simplifying the iframe attributes and splicing JSON objects for the Spotify URL.

- **Manipulating Spotify Player and API Headers:**
  - Gained insights into manipulating the Spotify iframe music player element.
  - Explored API headers, including methods and headers, to work with the Spotify API.

## Getting Started 🚀

To discover a random song and GIF, follow these steps:

1. Clone the repository.
2. Open the `index.html` file in your preferred web browser.
3. Click "Get Song & GIF" to enjoy a unique musical and visual experience.

Feel free to contribute, report issues, or provide feedback to enhance the Spotify Song Gif Finder.