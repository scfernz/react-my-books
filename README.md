# My Books Project for Udacity

Installation Instructions:

From within the directory run the following lines within the CLI

`npm install`

`npm start`

Project Summary:

- Root page '/' shows three shelf components: 'Want to Read', 'Currently Reading', 'Finished Reading'.
- In each shelf, books components are loaded and can be updated from the dropdown on each book. The dropdown value reflects the current shelf of the book.
- Page updates without having to refresh the page and keeps the same information after refreshing.
- Search page '/Search' renders Search component, which renders book components upon user input.
- Book components similarly reflect the shelf of the book in the dropdown and can be added to the shelf components rendered on the root page.