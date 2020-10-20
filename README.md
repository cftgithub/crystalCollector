# Crystal Collector

### Purpose:
To create a fun and interactive math game designed with jQuery.

### How the app works:
   * There are four crystals displayed on the page.
   * The player will be shown a random number at the start of the game (Points to Win).
   * When the player clicks on a crystal, a specific amount of points will be added to the player's total score (Crystal Points Collected). 
     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

#### Game design notes:
* The random number (Points to Win) shown at the start of the game will be between 19 - 120.
* Each crystal has a random value between 1 - 12. The value is reset at the beginning of each game.
* The point value is hidden until the player clicks the crystal.
