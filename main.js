// const activityName = document.querySelector(".activityName");
// const activityType = document.querySelector(".activityType");
// const gif = document.querySelector(".gif");

// const corsPrefix = 'https://cors-anywhere.herokuapp.com/'

document.querySelector("button").addEventListener("click", getBoredData);

function getBoredData() {
  // let activityNameData, activityTypeData, gifData;
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("h2").innerText = data.activity;
      console.log(data);
      activityNameData = data.activity;
      activityTypeData = data.type;

      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=ED7v2G7AMoGFWwSgZM8XGmkFziImQbPI&q=${activityTypeData}&limit=25&offset=0&rating=g&lang=en`
      )
        .then((response) => response.json())
        .then((memes) => {
        document.querySelector("img").src = memes.data[0].images.original.url
        console.log(memes);
      

          // gif_data = data.data[0].images.original.url;

          // activity_name.textContent = "Activity Name: " + activity_name_data;
          // activity_type.textContent = "Activity Type: " + activity_type_data;
          // gif.src = gif_data;
        });
    });
}


