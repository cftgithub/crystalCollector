# Crystal Collector

### Purpose:
To create a fun and interactive math game designed with jQuery. [Play Crystal Collector](https://cftgithub.github.io/crystalCollector/)

### How the App Works:
   * There are four crystals displayed on the page.
   * The player will be shown a random number at the start of the game (Points to Win).
   * When the player clicks on a crystal, a specific amount of points will be added to the player's total score (Crystal Points Collected). 
   * The player wins if their total score equals the random number from the beginning of the game.
   * The player loses if their score is higher than the random number.
   * The game restarts whenever the player wins or loses.
   * The app keeps track of the number of games the player wins or loses per session. Refreshing the page will reset the Win/Loss count.

#### Game Design Notes:
* The random number (Points to Win) shown at the start of the game will be between 19 - 120. A new random number will be generated at the end of each game.
* Each crystal has a random value between 1 - 12. The value for each crystal will be different and are reassigned at the beginning of each game.
* The point value of each crystal is hidden. When the player clicks the crystal the point value will be added to the player's total score (Crystal Points Collected).

#### Technologies:
* HTML
* CSS
* Bootstrap
* jQuery

#### Future UX Upgrades
* Replace alert box at the end of each game with something that makes a stronger statement.
