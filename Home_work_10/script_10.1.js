const user = {
  firstName: "Anastasiia",
  lastName: "Kovalkova",
  age: 30,
  location: "Poznan",
  profession: "Frontend Developer",

  showInfo: function () {
    const info = `Full name: ${this.firstName} ${this.lastName}\nAge: ${this.age}\nLocation: ${this.location}\nProfession: ${this.profession}`;
    console.log(info);
    return info;
  },
};

user.showInfo();
