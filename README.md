# Phone Hunter API (phone-hunter-api-b8)

Welcome to the Phone Hunter API, a powerful API built in JavaScript that offers seamless search functionality for discovering mobile phones and related products. This API allows users to search for specific products and provides an initial set of 6 related products, with the option to load more for a comprehensive view. Let's dive into the details!

## Features

1. **Search Functionality:**
   - Conduct searches to find specific mobile phones or related products.
   - Example: Searching for "iphone" will return all Apple products.

2. **Initial Results:**
   - The API displays an initial set of 6 related products for quick reference.

3. **Load More Products:**
   - Click on the "Show All" button to load all related products for a comprehensive view.

## Getting Started

To integrate Phone Hunter API into your project, follow these steps:

1. **API Base URL:**
   - Use the base URL `https://api.phonehunter.com` for your API requests.

2. **Search Endpoint:**
   - Perform searches using the `/search` endpoint.
   - Example: `https://api.phonehunter.com/search?q=iphone`

3. **Load More Endpoint:**
   - To load more products, use the `/load-more` endpoint.
   - Example: `https://api.phonehunter.com/load-more?q=iphone&page=2`

## Usage

1. **Perform a Search:**
   - Use the search functionality by making a GET request to the `/search` endpoint with the desired query.
   - Example: `https://api.phonehunter.com/search?q=iphone`

2. **Initial Results:**
   - View the initial 6 related products provided in the response.

3. **Load More Products:**
   - Click on the "Show All" button to load additional products using the `/load-more` endpoint.

## Technologies Used

- JavaScript

## Contributing

Contributions are welcome! If you have ideas for improvement, please follow the standard GitHub fork and pull request workflow.
