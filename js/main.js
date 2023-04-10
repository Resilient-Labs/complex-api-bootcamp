const button = document
  .querySelector(".searchButton")
  .addEventListener("click", getArticle);
const randomButton0 = document
  .querySelector(".randomButton0")
  .addEventListener("click", displayFact0);
const randomButton1 = document
  .querySelector(".randomButton1")
  .addEventListener("click", displayFact1);
const randomButton2 = document
  .querySelector(".randomButton2")
  .addEventListener("click", displayFact2);
const randomButton3 = document
  .querySelector(".randomButton3")
  .addEventListener("click", displayFact3);
const randomButton4 = document
  .querySelector(".randomButton4")
  .addEventListener("click", displayFact4);
const randomButton5 = document
  .querySelector(".randomButton5")
  .addEventListener("click", displayFact5);
const close = document.querySelectorAll(".close");

Array.from(close).forEach((arr) => {
  arr.addEventListener("click", closeModal);
});

function closeModal() {
  if (
    document.getElementById("thisDayInHistoryModal0").style.display === "block"
  ) {
    document.getElementById("thisDayInHistoryModal0").style.display = "none";
  } else if (
    document.getElementById("thisDayInHistoryModal1").style.display === "block"
  ) {
    document.getElementById("thisDayInHistoryModal1").style.display = "none";
  } else if (
    document.getElementById("thisDayInHistoryModal2").style.display === "block"
  ) {
    document.getElementById("thisDayInHistoryModal2").style.display = "none";
  } else if (
    document.getElementById("thisDayInHistoryModal3").style.display === "block"
  ) {
    document.getElementById("thisDayInHistoryModal3").style.display = "none";
  } else if (
    document.getElementById("thisDayInHistoryModal4").style.display === "block"
  ) {
    document.getElementById("thisDayInHistoryModal4").style.display = "none";
  } else if (
    document.getElementById("thisDayInHistoryModal5").style.display === "block"
  ) {
    document.getElementById("thisDayInHistoryModal5").style.display = "none";
  }
}
// document.getElementById("thisDayInHistoryModal0").style.display = "none";
// document.getElementById("thisDayInHistoryModal1").style.display = "none";
// document.getElementById("thisDayInHistoryModal2").style.display = "none";
// document.getElementById("thisDayInHistoryModal3").style.display = "none";
// document.getElementById("thisDayInHistoryModal4").style.display = "none";
// document.getElementById("thisDayInHistoryModal5").style.display = "none";

function displayFact0() {
  document.getElementById("thisDayInHistoryModal0").style.display = "block";
}
function displayFact1() {
  document.getElementById("thisDayInHistoryModal1").style.display = "block";
}
function displayFact2() {
  document.getElementById("thisDayInHistoryModal2").style.display = "block";
}
function displayFact3() {
  document.getElementById("thisDayInHistoryModal3").style.display = "block";
}
function displayFact4() {
  document.getElementById("thisDayInHistoryModal4").style.display = "block";
}
function displayFact5() {
  document.getElementById("thisDayInHistoryModal5").style.display = "block";
}

function getArticle() {
  let search = document.querySelector("#search").value;
  let historyDay0 = document.querySelector(".day0");
  let historyDay1 = document.querySelector(".day1");
  let historyDay2 = document.querySelector(".day2");
  let historyDay3 = document.querySelector(".day3");
  let historyDay4 = document.querySelector(".day4");
  let historyDay5 = document.querySelector(".day5");
  let historyMonth0 = document.querySelector(".month0");
  let historyMonth1 = document.querySelector(".month1");
  let historyMonth2 = document.querySelector(".month2");
  let historyMonth3 = document.querySelector(".month3");
  let historyMonth4 = document.querySelector(".month4");
  let historyMonth5 = document.querySelector(".month5");
  let historyYear0 = document.querySelector(".year0");
  let historyYear1 = document.querySelector(".year1");
  let historyYear2 = document.querySelector(".year2");
  let historyYear3 = document.querySelector(".year3");
  let historyYear4 = document.querySelector(".year4");
  let historyYear5 = document.querySelector(".year5");
  let historyEvent0 = document.querySelector(".event0");
  let historyEvent1 = document.querySelector(".event1");
  let historyEvent2 = document.querySelector(".event2");
  let historyEvent3 = document.querySelector(".event3");
  let historyEvent4 = document.querySelector(".event4");
  let historyEvent5 = document.querySelector(".event5");
  let article0 = document.querySelector(".article-0");
  let article1 = document.querySelector(".article-1");
  let article2 = document.querySelector(".article-2");
  let article3 = document.querySelector(".article-3");
  let article4 = document.querySelector(".article-4");
  let article5 = document.querySelector(".article-5");
  let img0 = document.querySelector(".img-0");
  let img1 = document.querySelector(".img-1");
  let img2 = document.querySelector(".img-2");
  let img3 = document.querySelector(".img-3");
  let img4 = document.querySelector(".img-4");
  let img5 = document.querySelector(".img-5");
  let historyDay = [
    historyDay0,
    historyDay1,
    historyDay2,
    historyDay3,
    historyDay4,
    historyDay5,
  ];
  let historyMonth = [
    historyMonth0,
    historyMonth1,
    historyMonth2,
    historyMonth3,
    historyMonth4,
    historyMonth5,
  ];
  let historyYear = [
    historyYear0,
    historyYear1,
    historyYear2,
    historyYear3,
    historyYear4,
    historyYear5,
  ];
  let historyEvent = [
    historyEvent0,
    historyEvent1,
    historyEvent2,
    historyEvent3,
    historyEvent4,
    historyEvent5,
  ];
  let img = [img0, img1, img2, img3, img4, img5];
  let article = [article0, article1, article2, article3, article4, article5];
  const apiKey = "qNbVDzVHZ4MFemjX1LUjG5c33SN7txIU";
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i <= 5; i++) {
        let articleContents = data.response.docs[i].headline.main;
        article[i].innerText = articleContents;
        let imgSrc = data.response.docs[i].multimedia[22].url;
        img[i].src = `https://www.nytimes.com/${imgSrc}`;
        let hisYear = data.response.docs[i].pub_date;
        hisYear = hisYear.slice(0, 4);
        let hisMonth = data.response.docs[i].pub_date;
        hisMonth = hisMonth.slice(5, 7);
        let hisDay = data.response.docs[i].pub_date;
        hisDay = hisDay.slice(8, 10);
        console.log(hisYear);
        console.log(hisMonth);
        console.log(hisDay);

        const histUrl =
          "https://api.api-ninjas.com/v1/historicalevents?day=" + hisDay; //&month=${hisMonth}&day=${hisDay}
        fetch(histUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5R+OPbWjzVj65AKFNWxDSg==ZyVpo1xvXwqxQ27U",
          },
        })
          .then((response) => response.json())
          .then((data2) => {
            console.log(data2);
            let randomObj = Math.floor(Math.random() * data2.length);
            console.log(data2[randomObj]);
            let randomDayContents = data2[randomObj].day;
            historyDay[i].innerText = randomDayContents;
            let randomMonthContents = data2[randomObj].month;
            historyMonth[i].innerText = randomMonthContents;
            let randomYearContents = data2[randomObj].year;
            historyYear[i].innerText = randomYearContents;
            let randomEventContents = data2[randomObj].event;
            historyEvent[i].innerText = randomEventContents;
            // modal.append(data2[randomDay].year)
          });

        // if (hisYear == "2023") {
        //   const histUrl =
        //     "https://api.api-ninjas.com/v1/historicalevents?month=" + hisMonth; //&month=${hisMonth}&day=${hisDay}
        //   fetch(histUrl, {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "X-Api-Key": "5R+OPbWjzVj65AKFNWxDSg==ZyVpo1xvXwqxQ27U",
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then((data2) => {
        //       console.log(data2);
        //     });
        // } else {
        //   const histUrl =
        //     "https://api.api-ninjas.com/v1/historicalevents?year=" + hisYear; //&month=${hisMonth}&day=${hisDay}
        //   fetch(histUrl, {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "X-Api-Key": "5R+OPbWjzVj65AKFNWxDSg==ZyVpo1xvXwqxQ27U",
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then((data2) => {
        //       console.log(data2);
        //     });
        // }
      }
      document.querySelector(".articles").style.display = "flex";
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
