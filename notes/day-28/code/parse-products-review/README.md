# React Navigation

## Description
Use parse to store and query product information.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how to post data with parse.
* Understand how to query data with parse.


### Performance Objectives

After completing this assignment, you be able to effectively use

* Parse.Object.extend
* Parse.Query
* .save(...)



## Details

### Deliverables

* A repo containing at least:
  * `scripts/main.js`
  * `index.html`

### Requirements

* No ESLint warnings or errors

## Normal Mode
Fork and clone this repository. After cloning, cd into the new directory and run the tiyfe command.

You will need to add your own parse API tokens using `Parse.initialize(...)` in the scripts/main.js file in order for this code to work.

1. Update the AddProductComponent to save product information to parse when the form is submitted.
2. Implement the BooksComponent, ClothingComponent and ElectronicsComponent to list out a table of all of the products that match the corresponding category.

## Hard Mode
1. Newest: Add a new page that lists the 10 newest products added to the system.
2. Cheapest: Add a new page that lists the 10 cheapest products in the database.

## Nightmare Mode
1. Search: Add the ability to search for a product by name.
2. Pagination: Instead of listing all of the products on the category pages, instead add pagination so that the page lists 10 at a time and allows you to go to different pages of results.

## Notes

## Additional Resources

[Parse Queries](https://www.parse.com/docs/js/guide#queries)

