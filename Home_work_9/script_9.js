const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "Bob", salary: 1200 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
      { name: "Max", salary: 600 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(obj) {
  if (Array.isArray(obj)) {
    return obj.reduce((total, employee) => total + employee.salary, 0);
  } else {
    return Object.values(obj).reduce(
      (total, subDept) => total + sumSalaries(subDept),
      0,
    );
  }
}

const total = sumSalaries(company);
console.log(total);
