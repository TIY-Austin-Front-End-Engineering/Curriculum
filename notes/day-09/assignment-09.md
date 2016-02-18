# Battleship

## Description

Create a command line version of the classic board game

## Explorer Mode

* Use `prompt`, `confirm`, and `console.log` to make a 2 player game that can be played by viewing the command line on a web browser.
* Each player should have one ship (battleship), which is 4 spaces long.
* Each player should have at least 1 board, to keep track of their hits and misses.
* Begin by asking each player to choose the location of their ship (you can have them specify every coordinate, or perhaps just choose a starting point and a direction).
* Display the player's board to the user when it is their turn, so that they can choose where to attack next. You can probably reuse some code from the tic-tac-toe assignment for this!
* On their turn, ask players to attack by inputting coordinates.
* Check the coordinates given against the location of the opponents ship. If the coordinates match, announce a hit! Otherwise, announce a miss.
* Keep track of hits and misses on each player's board, so that they can be displayed to the user. You can use whatever characters you like to display a hit or a miss. Unattacked spaces should be denoted by an empty space.
* Keep track of how many hits a player has made. When a player attacks a space occupied by the other player's battleship, check to see if that was the winning blow!
* When all 4 spaces occupied by either player's battleship have been attacked, announce the winner, and that game is over.

##### Notes

> You may want to use a `while` loop to keep track of turns.

##### What to Submit

A link to a repository containing at least the following:
* `index.html`
* `main.js`

## Adventurer Mode

Use objects to keep track of more information!
* Allow the users to input their names with `prompt`, and inform them by name when it is their turn, or they have been hit.
* Have more than just one ship on the board. In the original battleship game, there are 5 ships:
  * Aircraft Carrier: 5 long,
  * Battleship: 4 long,
  * Submarine: 3 long,
  * Destroyer: 3 long,
  * Patrol Boat: 2 long
* During setup, ask the users to place each one of their pieces in turn. You will probably want to create a second board for each player (much like the actual game) where the player can see their piece placement.
* Keep track of hits to each ship, and announce the ship by name when it is sunk. You could display a message like "Joey hit Steven's Aircraft Carrier".
* Remember that no matter how many ships are in the game, the game is still only won by sinking the battleship.

## Epic Mode

* Create AI, so that a single user can play against the computer. Initially set the computer to choose a completely random attack every turn.
* If you finish that, allow the user to choose `hard` mode, in which the computer will strategically attack, rather than randomly attack
* For fun, make an `impossible` mode, where the computer just immediately attacks the player's battleship, and therefore wins in 4 moves every time.
