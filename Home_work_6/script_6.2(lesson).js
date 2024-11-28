const array = [{}, 1, 2, 3, "string", null, []];

function avg(array) {
  const base = { total: 0, count: 0 };
  const cb = function (acc, el, index, array) {
    if (typeof el === "number") {
      acc.total += el;
      acc.count += 1;
    }

    return acc;
  };

  const obj = array.reduce(cb, base);
  // const obj = array.reduce(cb, { total: 0, count: 0 });
  // console.log(obj === base); // true

  return obj.total / obj.count;
}

//-----------------Примеры reduce()

console.log(avg(array));

console.log(
  [1, 2, 3, 4, 5].reduce(function (acc, el) {
    console.log(el);
    return (acc += el);
  }, 0),
);

const users = [{ name: "Serhii" }, { name: "Anna" }];

const transform = users.reduce(
  function (acc, el) {
    if (
      !acc.users.find(function (user) {
        return user.name === el.name;
      })
    ) {
      acc.users.push(el);
      acc.total += 1;
    }
    return acc;
  },
  { users: [], total: 0 },
);

console.log(transform);
