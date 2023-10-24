# 📊 Project: Complex Company API 

### Goal: Use data returned from one api to make a request to another api and display the data returned

# My Awesome Project

This project is a complex company search API that allows users to find companies by their ticker (e.g., Apple = AAPL). Once a company is identified, the application fetches news articles related to that company. Additionally, it displays information about the company, such as its CEO and a brief description.

(![(img/company.png)] "Screenshot of the Crypto Search API")

## How It's Made:
**Tech used:** HTML, CSS, JavaScript

The main feature of this project is its search capability, where a user inputs a company ticker, and the application fetches related news articles and company details. To achieve this:

1. **HTML**: Used to structure the front-end, creating input fields for the ticker search, and sections to display the company information and news articles.
2. **CSS**: Added styles and responsive design to ensure a user-friendly experience.
3. **JavaScript**: The core functionality. Using JavaScript, I created functions to:
   - Fetch data from the company API based on the input ticker.
   - Extract the company name from the API response and fetch related news articles.
   - Dynamically display the fetched data on the web page.

## Optimizations:
I initially started with synchronous API calls, which slowed down the user experience. Later, I refactored the code to use asynchronous requests, significantly improving the response time. 

## Lessons Learned:
This project was an enlightening experience. 

- Discovering the power of asynchronous programming and how it can drastically improve user experience was a significant revelation.
- Dealing with multiple API responses and ensuring that the data was displayed accurately and efficiently was a challenge. Successfully handling these aspects instilled a great sense of achievement.
