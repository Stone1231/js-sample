test("function", () => {
  function buy(drink, food) {
    var totalAmount = drink * 20 + food * 60;
    return totalAmount;
  }
  var myOrder = buy(1, 2);
  console.log(myOrder);

  //匿名函式
  var buy2 = function (drink, food) {
    var money = drink * 20 + food * 60;
    console.log(money);
  };
  buy2(3, 3);
});

/*closures (閉包特性)
函式（父）內可以包含另一個函式（子）。 
子函式作用範圍：必須在位於嵌套它的函式內呼叫，不能在其他地方呼叫。
子函式可以取用父函式內的所有變數。*/
test("closures", () => {
  var name = "Ginny";
  function Card() {
    console.log("Hi " + name + ". You are " + are);
    console.log(`Hi ${name}. You are ${are}`);
  }
  var are = "human";
  return Card();
});
