# Lyric Generator 🎵  

Simply enter an artist and a song title by them to generate the lyrics and an image of the artist.

**Live Demo:** <a href="https://lyric-generator-jenna-nguyen.netlify.app/">Demo</a>

<img width="956" alt="Complex Song API" src="https://user-images.githubusercontent.com/88993361/137781991-73210c31-dcc8-4a3f-9fe6-958067354bf9.png">

## How It's Made

The application uses two different APIs in order to generate the output, according to the user's input. The first API, the Audio DB API, uses the artist name as a parameter value to generate an image while the second API, the Lyric API, uses both the artist name and a song title as two different parameter values to generate song lyrics.

## What I Learned
Generating lyrics for this application heavily depends on the user input and gives little room for errors, so it emphasized the importance of testing API parameters and understanding its boundaries. I figured out that although the API is not case-sensitive, if the user even slightly misspells something the API will fail to find the fetch request which would display an "undefined" error in place of the lyrics. I didn't mind it for this specific application (because it still conveys an error to the user) but for future projects I would find a way to improve this, such as integrating "suggested searches" as the user is typing their inputs.

