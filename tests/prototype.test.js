function Player(name) {
  this.name = name;
}

test("prototype", () => {
  //prototype, constructor
  console.log(Player);
  console.log(Player.prototype);
  console.log(Player.prototype.constructor);
  console.log(Player.prototype.constructor === Player); //true

  //__proto__
  console.log(Player.__proto__);
  console.log(Player.prototype.__proto__);
  //最上層的Object.prototype的__proto__是null值，它是一個特例
  console.log(Object.prototype.__proto__); //null
  console.log(Player.__proto__ === Function.prototype); //true
  console.log(Player.prototype.__proto__ === Object.prototype); //true
  console.log(Function.prototype.__proto__ === Object.prototype); //true

  const newPlayer = new Player("Inori");
  //是一個物件，不是函式，不會有prototype
  console.log(newPlayer.prototype); // undefined
  console.log(newPlayer.__proto__);
  console.log(newPlayer.__proto__ === Player.prototype); //true

  console.log(Object.getPrototypeOf(newPlayer));
  console.log(newPlayer.__proto__);
  //只能用於不是使用Object.create建立的物件
  console.log(newPlayer.constructor.prototype);

  //擴充
  console.log(newPlayer.age);
  Player.prototype.age = 11;
  console.log(newPlayer.age);
  Player.prototype.toString = function () {
    return "Name: " + this.name;
  };
  console.log(newPlayer.toString());
  console.log(newPlayer); //觀察物件的內容

  //ES6類別的繼承
  class VipPlayer extends Player {
    constructor(name, level) {
      super(name);
      this.level = level;
    }
  }
  var inori = new VipPlayer("inori", 5);
  console.log(inori instanceof Player); //true
  console.log(inori instanceof VipPlayer); //true
});
