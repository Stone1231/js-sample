test("區分大小寫", () => {
  var address = "Rich19";
  var Address = "BirdHome";
  console.log(address);
  console.log(Address);
});

test("各種type", () => {
  //type
  console.log(typeof true); //boolean
  console.log(typeof "hello"); //string
  console.log(typeof 1); //number
  console.log(typeof 1.3); //number
  console.log(typeof gg); //undefined
  var aa;
  console.log(typeof aa); //undefined
  var bb = {};
  console.log(typeof bb); //object
  console.log(typeof null); //object
});

test("if else switch", () => {
  var age = 14;
  var result;
  if (age >= 18) {
    result = "Adult";
  } else {
    result = "Child";
  }
  console.log(result);

  result = age >= 18 ? "Adult" : "Child";
  console.log(result);

  //switch
  switch (age) {
    case 14:
      console.log("switch Child");
      break;
    default:
      console.log("switch Adult");
      break;
  }
});

test("do while", () => {
  var myMoney = 0;
  while (myMoney < 10) {
    myMoney += 1;
  }
  console.log(myMoney);

  var yourMoney = 0;
  do {
    yourMoney += 1;
  } while (yourMoney < 10);
  console.log(yourMoney);

  //for
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  var students = ["Eric", "AngryBird", "Ginny"];
  for (var i in students) {
    console.log("Hi, " + students[i]);
  }
});
