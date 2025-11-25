const persons = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

function processPersons(persons) {
  const passed = persons.filter(person => person.tasksCompleted > 5);
  console.log("Filtered:", passed);
  const performanceArr = passed.map(person => {
    let performance = "";

    if (person.rating > 4.5) {
      performance = "Excellent";
    } else if (person.rating >= 3 && person.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }

    return { name: person.name, performance: performance };
  });

  console.log("After Mapping:", performanceArr);
  const priority = {
    "Excellent": 1,
    "Good": 2,
    "Needs Improvement": 3
  };

  const sorted = performanceArr.sort((a, b) => {
    return priority[a.performance] - priority[b.performance];
  });

  return sorted;
}

console.log("Final Output:", processPersons(persons));
