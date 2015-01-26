[Table of Contents](/README.md)

# Day 15: lodash

## Review
- AJAX

## In Class
> Before:
> [
>	{firstName: 'Aaron', lastName: 'Larner', type: 'Instructor'},
>	{firstName: 'Alex', lastName: 'Hidalgo', type: 'Student'},
>	{firstName: 'Charlie', lastName: 'Lueker', type: 'Student'},
>	{firstName: 'Daniel', lastName: 'St. Clair', type: 'Student'},
>	{firstName: 'Erika', lastName: 'Moller', type: 'Student'},
>	{firstName: 'Gabe', lastName: 'Rubio', type: 'Student'},
>	{firstName: 'Hughie', lastName: 'Devore', type: 'Student'},
>	{firstName: 'Jacob', lastName: 'Burkhart', type: 'Student'},
>	{firstName: 'Justin', lastName: 'Herrick', type: 'Instructor'},
>	{firstName: 'Katlyn', lastName: 'Whittenburg', type: 'Campus Director'},
>	{firstName: 'Nathan', lastName: 'Hall', type: 'Teaching Assistant'},
>	{firstName: 'Paul', lastName: 'Kokoszyna', type: 'Student'},
>	{firstName: 'Ryan', lastName: 'Luedecke', type: 'Student'},
>	{firstName: 'Sam', lastName: 'Kapila', type: 'Instructor'},
>	{firstName: 'Travis', lastName: 'Czerw', type: 'Student'}
> ]
> After:
> [
>	{fullName: 'Aaron Larner', type: 'Instructor'},
>	{fullName: 'Alex Hidalgo', type: 'Student'},
>	{fullName: 'Charlie Lueker', type: 'Student'},
>	{fullName: 'Daniel St. Clair', type: 'Student'},
>	{fullName: 'Erika Moller', type: 'Student'},
>	{fullName: 'Gabe Rubio', type: 'Student'},
>	{fullName: 'Hughie Devore', type: 'Student'},
>	{fullName: 'Jacob Burkhart', type: 'Student'},
>	{fullName: 'Justin Herrick', type: 'Instructor'},
>	{fullName: 'Katlyn Whittenburg', type: 'Campus Director'},
>	{fullName: 'Nathan Hall', type: 'Teaching Assistant'},
>	{fullName: 'Paul Kokoszyna', type: 'Student'},
>	{fullName: 'Ryan Luedecke', type: 'Student'},
>	{fullName: 'Sam Kapila', type: 'Instructor'},
>	{fullName: 'Travis Czerw', type: 'Student'}
> ]
1. Use lodash map function to convert the before list to the after list.
2. Use the lodash filter function to remove anyone who is not a student from the after list.

## Goals
- Understand how to use lodash type checking.
- Understand how to use lodash iteration functions.
- Understand how to use lodash templating.
- Start talking about constructors

# Assignment
1. Update your IMDB movie project from day 14 to use lodash templates instead of regular HTML strings with jQuery.
2. If you didn't already finish Hard mode for day 14 finish it.
2. If you didn't already finish Hard mode for day 14 finish it.
1. Build a webpage that has three main elements: a search text box, a search button and a results box. When the user clicks on the search button, display the contents (value) of the search text box in the results box.
2. Update assignment 1 to now query the [IMDB API](http://www.omdbapi.com/) (via a $.get request) when the user clicks on the search button. console.log the response.
3. Update assignment 2 to display the response from IMDB in a table inside of the results box (instead of console.log'ing it).
4. **Hard Mode:** Update your results box to allow your user to click on a result to add it to another list of movies that they want to watch (their "to watch" list).
5. **Extra Hard Mode:** Allow your user to move movies from their "to watch" list to a new "watched" list (movies that they have already seen).
6. **Insane Mode:** Save the users lists using [window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window.localStorage) so that when you refresh the browser window their previous lists still appear.

# Resources
