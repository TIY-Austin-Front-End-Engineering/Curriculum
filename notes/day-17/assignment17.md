# Create Your Own Etsy Search Page

## Description

Make use of AJAX calls and the Etsy API to re-create the Etsy search results page.

## Explorer Mode

Re-Create An Etsy Page - example:  https://www.etsy.com/search?q=whiskey

1. Create your own API token by signing up as an [Etsy developer](https://www.etsy.com/developers/)
2. Create a function that makes an AJAX request to the Etsy API using whatever search term you'd like.
3. Create a data handler function to handle the data when it (asynchronously) returns from the API. Use this data to populate your webpage!
4. Recreate the Etsy search results page, styled as closely as possible to the actual Etsy site.
  * The most important thing is the actual search results. Do the rest of the page (including header and footer styles) _after_ you have the search results rendering to the DOM
  * You should link the items to their proper Etsy product pages
  * You may omit the "Top Categories" section
  * No need to make any of the form elements work.

##### Notes

> Hints go here

##### What to Submit

A link to a repository with at least the following files:
  * main.js
  * index.html
  * styles/main.css

## Adventurer Mode

Allow the user to change the search term. When they make a new search, refetch the data and update the results list

## Epic Mode

1. Pull the categories from the data to create the sidebar, with links that filter the listings.
2. Implement the sorting dropdown.
