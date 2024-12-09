// const user = {
//   firstName: "Anastasiia",
//   lastName: "Kovalkova",
//   age: 30,
//   location: "Poznan",
//   profession: "Frontend Developer",
//
//   showInfo: function () {
//     const info = `Full name: ${this.firstName} ${this.lastName}\nAge: ${this.age}\nLocation: ${this.location}\nProfession: ${this.profession}`;
//     console.log(info);
//     return info;
//   },
// };
//
// user.showInfo();

function User(name, surname, age, location, profession) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.location = location;
  this.profession = profession;
}

User.prototype.getInfo = () => {
  return {
    name: this.name,
    surname: this.surname,
    age: this.age,
    location: this.location,
    profession: this.profession,
  };
};

const user = new User(
  "Anastasiia",
  "Kovalkova",
  30,
  "Poznan",
  "Frontend developer",
);
console.log(user);
