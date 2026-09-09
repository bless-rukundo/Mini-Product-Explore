# Mini Product Explorer

A simple web application that allows users to search and explore products using the DummyJSON API.

## Live Demo

🔗 https://mini-product-explorer.netlify.app/

## About The Project

This project was created as a learning project to practice working with:

- JavaScript
- Fetch API
- Promises
- Async/Await
- APIs
- JSON
- DOM manipulation
- Tailwind CSS

Users can view products and search for products by name.

## Features

- Display products from an API
- Search for products
- Display product images
- Display product names
- Display product categories
- Display product prices
- Display product ratings
- Handle loading and errors

## Technologies Used

- HTML
- JavaScript
- Tailwind CSS
- DummyJSON API

## API

This project uses the DummyJSON Products API:

https://dummyjson.com/products

## How It Works

When the page loads, JavaScript sends a request to the API using `fetch()`.

The response is converted into JSON and the products are displayed on the page.

When a user searches for a product, another API request is sent using the search endpoint and the results are displayed.

## Project Structure

```text
mini-product-explorer/
│
├── index.html
├── script.js
└── README.md