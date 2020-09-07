
let Codewars = {
  proxy: "https://cors-anywhere.herokuapp.com/",
  url: ["https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/CarlosalbertoMontt?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/FarrahHamada?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/GabrielRamirezDev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
  "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/JoshuaMacklin?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/andyvasquez.dev?access_key=QTstzP71K6CzCT2PAv9_&page=0",
    "https://www.codewars.com/api/v1/users/xshawncx?access_key=QTstzP71K6CzCT2PAv9_&page=0"],
  graph: (x)=>{
    url=`https://image-charts.com/chart?chbr=10&chd=t%3A${x}&chf=b0%2Clg%2C90%2Cff0000%2C1%2C000000%2C0.2&chs=999x999&cht=bvs&chtt=CodeWars%20Honor&chxl=0%3A%7CAnastasia%7CAndy%7CCarolin%7CCarlos%7CDiana%7CFarrah%7CGabriel%7CIbrahim%7CJeffrey%7CJohn%7CJosh%20M.%7CJosh%20N.%7CKadeisha%7CKathy%7CKim%7CNicole%7CRahma%7CRebecca%7CShawn%7C1%3A%7CPoints%7C&chxt=x%2Cy`
      fetch(Codewars.proxy+url)
        .then(response=>{
          document.querySelector('html').style.background = `url(${url}) no-repeat center bottom fixed`
        })
  }
}

let bunchOfPromises = Promise.all(
  Codewars.url.map(x=>{
    return fetch(Codewars.proxy+x)
    .then(response => response.json()).then(x=>console.log(x))
  })

  )
let allHonor = bunchOfPromises.then(x=>{
  Codewars.graph(x.map(y=>y.honor).join('%2C'))
})
