//functional programming samples from will保哥
var people = [
  {
    name: {
      first: "Will",
      last: "Huang",
    },
    company: "MINIASP",
  },
  {
    name: {
      first: "James",
      last: "Huang",
    },
    company: "Coolrare",
  },
  {
    name: {
      first: "Jeff",
      last: "Wu",
    },
    company: "MINIASP",
  },
];

test("functional program", () => {
  var filtered_people = people.filter(function (person) {
    return person.name.last === "Huang";
  });
  console.log(JSON.stringify(filtered_people));

  var new_people = people.map(function (person) {
    return {
      name: person.name.first + " " + person.name.last,
      company: person.company,
    };
  });
  console.log(JSON.stringify(new_people));

  var total_company_chars = people.reduce(function (sum, person) {
    return sum + person.company.length;
  }, 0);

  console.log(total_company_chars);

  var all = people
    .filter(function (person) {
      return person.name.last === "Huang";
    })
    .map(function (person) {
      return {
        name: person.name.first + " " + person.name.last,
        company: person.company,
      };
    })
    .reduce(function (sum, person) {
      return sum + person.company.length;
    }, 0);

  console.log(all);
});
