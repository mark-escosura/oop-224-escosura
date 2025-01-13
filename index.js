// Create a constructor to create a Player object with a name
class Player {
  constructor(name) {
    this._name = name;
    this._lvl = 1;
    this._points = 0;
  }
  // Create a method on the prototype called gainXp that takes in a number from
  // 1-10 and adds it to the players points. If the current
  // points are >= 10 then add 1 to the lvl and decrement the points by 10.
  //Public Method
  gainXp(xp) {
    this._points += xp;

    if (this._points >= 10) {
      this._lvl++;
      this._points -= 10;
    }

    this._describe();
  }
  // Create another prototype method called describe that displays the
  // players stats(name, lvl, points);
  // Private Method
  _describe() {
    if (this._points == 0) {
      console.log(`${this._name} is now level ${this._lvl}.`);
    } else {
      console.log(
        `${this._name} is now level ${this._lvl} with ${this._points} experience points.`
      );
    }
  }
}

const player1 = new Player('Mark');
console.log(player1 instanceof Player);

player1.gainXp(10);
player1.gainXp(5);
player1.gainXp(5);
player1.gainXp(7);
