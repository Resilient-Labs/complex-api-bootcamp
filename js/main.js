function chooseRandom(countryParameter) {
  let num = Math.random();
  if (num < 0.2) {
    countryParameter = "us";
  } else if (num < 0.4) {
    countryParameter = "gb";
  } else if (num < 0.6) {
    countryParameter = "br";
  } else if (num < 0.8) {
    countryParameter = "ca";
  } else if (num < 1) {
    countryParameter = "cn";
  }
  return countryParameter;
}
let randomCountry = chooseRandom();
fetch(
  `http://api.mediastack.com/v1/news?access_key=7625170bc33b1fe3194db78b1ed38216&countries=${randomCountry}`
)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("h3").innerText = data.data[0].title;

    let urlLink = data.data[0].url;
    document.querySelector("#urlHere").href = urlLink;

    console.log(document.querySelector("#urlHere"));
    console.log(data.data[0].url);

    let countryInfo = data.data[0].country;
    fetch(
      `https://calendarific.com/api/v2/holidays?&api_key=edccf02fd9f33d9f95fa4d4d44f442a3c4bdba1c&country=${countryInfo}&year=2022`
    )
      .then((res) => res.json())
      .then((dataHoli) => {
        document.querySelector(
          "#titleHere"
        ).innerText = `News source from: ${dataHoli.response.holidays[10].country.name}`;
        let dateIs = dataHoli.response.holidays[10].date.iso.slice(5);
        document.querySelector(
          "#holidayHere"
        ).innerText = `Holiday: ${dataHoli.response.holidays[10].name} (${dateIs})`;
        document.querySelector(
          "#moreAboutCountry"
        ).innerText = `More about ${dataHoli.response.holidays[10].country.name}`;
        document.querySelector(
          "#descriptionHere"
        ).innerText = `About Holiday: ${dataHoli.response.holidays[10].description}`;
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
