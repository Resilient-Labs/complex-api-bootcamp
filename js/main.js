
// Finds a company by ticker example Apple =  AAPL then it takes the company name and finds news articles about that company


//event listener once button is clicked runs the function 
document.querySelector('button').addEventListener('click', getCompany);

function getCompany() {

    const selection = document.querySelector('input').value;
    const url = `https://financialmodelingprep.com/api/v3/profile/${selection}?apikey=WKqUh750uqAFuY8IQbtQvTaWcbFySZiN `;

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        //here we access the data companyName and display it in our h2
        document.querySelector('h2').innerText = `Company: ${data[0].companyName}`;

        //here we access the data price and display it in our h1
        document.querySelector('h3').innerText = `Stock Price: ${data[0].price}`;

        //here we access the data ceo and display it in our h1
        document.querySelector('h4').innerText = `CEO: ${data[0].ceo}`;

        //here we access the data description and display it in our h1
        document.querySelector('h5').innerText = `Description: ${data[0].description}`;

        //we then store the data companyName in a variable
        let companySearch = data[0].companyName;

        //Proxy from jose
        const proxy = "https://api.allorigins.win/raw?url=";
        const newsAPIUrl = `https://newsapi.org/v2/everything?q=${companySearch}&apiKey=de0e407a9bae406d9c6f943b6dbb52a4`; 
        const urlTwo = proxy + encodeURIComponent(newsAPIUrl);


        fetch(urlTwo)
        .then(res => res.json()) // parse response as JSON
        .then(companyNews => {
            console.log(companyNews);

            // Ensure that companyNews.articles exists and has at least one item
            if (companyNews.articles && companyNews.articles.length > 0) {

                //here we access the data title and display it in our h1
                document.querySelector('h6').innerText = `Company News: ${companyNews.articles[0].title}`;

                //here we display View Article in our a tag
                document.querySelector('a').innerText = `View Article`;

                //here we access the data url and display it in our h1
                document.querySelector('a').href = `${companyNews.articles[0].url}`;
            } else {
                console.log("No news data available");
            }
        })
        //catch errors
        .catch(err => {
            console.log(`error ${err}`);
        });
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}