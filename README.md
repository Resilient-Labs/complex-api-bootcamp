# Number Fact & Encyclopedia

## Inputs for API's

- The first input for the API is a number provided by the user.
- The second input for the API extracts the information that follows `${number} is`. This information is considered the fact. It is initially retrieved from the first API and then used as an input for the encyclopedia without using the number as the parameter again in the second API call.

This application allows users to enter a number and retrieve an interesting fact about that number using the Numbers API. Additionally, based on the content of the fact, the application attempts to fetch a related Wikipedia article, providing the user with more in-depth knowledge.

## Table of Contents

- [Number Fact \& Encyclopedia](#number-fact--encyclopedia)
  - [Inputs for API's](#inputs-for-apis)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Setup and Installation](#setup-and-installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Fetch and display facts about numbers.
- Dynamic search for related Wikipedia articles based on **fact content**.
- User-friendly interface for better user experience.

## Setup and Installation

1. **Clone the repository**:

   ```
   git clone [repository_url]
   ```

2. **Navigate to the repository**:

   ```
   cd [repository_name]
   ```

3. **Open `index.html` in your browser**.

## Usage

1. Enter a number in the provided input field.
2. Click the "Fetch Data" button.
3. View the fact about the entered number.
4. Read the related Wikipedia snippet, and if interested, click on "Read more" to view the full article.

## Contributing

We welcome contributions! Please create an issue to discuss the changes before making a pull request.

## License

This project is open-source. Kindly refer to the LICENSE file for more details.
